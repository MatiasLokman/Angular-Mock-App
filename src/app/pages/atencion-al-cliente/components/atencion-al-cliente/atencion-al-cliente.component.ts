import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('LOK | Contacto');
  }

  submitForm() {
    if (this.formData.valid) {
      this.loading = true;
      if (this.formData.valid) console.log(this.formData.value);
      setTimeout(() => {
        this.loading = false;
        this._snackBar.open('Formulario enviado con éxito', 'x', {
          duration: 3000,
        });
      }, 3000);

      // this.formData.setValue({
      //   name: '',
      //   email: '',
      //   phone: '',
      //   message: '',
      //   link: '',
      //   genre: '',
      //   newsletter: '',
      // });

      // this.formData.get('name')?.clearValidators();
      // this.formData.get('name')?.updateValueAndValidity();
      // this.formData.get('name')?.addValidators(Validators.required);
      // this.formData.get('name')?.updateValueAndValidity();

      // this.formData.get('email')?.clearValidators();
      // this.formData.get('email')?.updateValueAndValidity();
      // this.formData
      //   .get('email')
      //   ?.addValidators([Validators.required, Validators.email]);
      // this.formData.get('email')?.updateValueAndValidity();

      // this.formData.get('message')?.clearValidators();
      // this.formData.get('message')?.updateValueAndValidity();
      // this.formData
      //   .get('message')
      //   ?.addValidators([
      //     Validators.required,
      //     Validators.minLength(20),
      //     Validators.maxLength(350),
      //   ]);
      // this.formData.get('message')?.updateValueAndValidity();
    }

    this.formData.reset();


    // Object.keys(this.formData.controls).forEach((key) => {
    //   this.formData.get(key)?.setErrors(null);
    // });
  }

  resetForm() {
    this.formData.reset();
    // this.formData.setValue({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   message: '',
    //   link: '',
    //   genre: '',
    //   newsletter: '',
    // });

    // this.formData.get('name')?.clearValidators();
    // this.formData.get('name')?.updateValueAndValidity();
    // this.formData.get('name')?.addValidators(Validators.required);
    // this.formData.get('name')?.updateValueAndValidity();

    // this.formData.get('email')?.clearValidators();
    // this.formData.get('email')?.updateValueAndValidity();
    // this.formData
    //   .get('email')
    //   ?.addValidators([Validators.required, Validators.email]);
    // this.formData.get('email')?.updateValueAndValidity();

    // this.formData.get('message')?.clearValidators();
    // this.formData.get('message')?.updateValueAndValidity();
    // this.formData
    //   .get('message')
    //   ?.addValidators([
    //     Validators.required,
    //     Validators.minLength(20),
    //     Validators.maxLength(350),
    //   ]);
    // this.formData.get('message')?.updateValueAndValidity();
  }
}
