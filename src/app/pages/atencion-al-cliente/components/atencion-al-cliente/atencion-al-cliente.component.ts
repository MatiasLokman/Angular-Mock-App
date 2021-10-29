import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    this.loading = true;
    setTimeout(() => {
      if (this.formData.valid) console.log(this.formData.value);
      if (this.formData.valid) console.log(this.formData.value);
      this.loading = false;
    }, 3000);
  }

  resetForm() {
    this.formData.reset();
  }
}
