import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-atencion-al-cliente',
  templateUrl: './atencion-al-cliente.component.html',
  styleUrls: ['./atencion-al-cliente.component.scss'],
})
export class AtencionAlClienteComponent implements OnInit {
  loading = false;

  formData = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(350),
      ],
    ],
    link: [''],
    genre: [''],
    newsletter: [''],
  });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.formData.valid) {
      this.loading = true;
      setTimeout(() => {
        if (this.formData.valid) console.log(this.formData.value);
        this.loading = false;

        this._snackBar.open('Formulario enviado con éxito', 'x', {
          duration: 3000,
        });
      }, 3000);
      this.formData.reset();
    }
  }

  resetForm() {
    this.formData.reset();
  }
}
