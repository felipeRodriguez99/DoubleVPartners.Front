import {
    FormControl,
    FormBuilder,
    Validators,
    FormArray,
    FormGroup,
  } from '@angular/forms';
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root',
  })
  export class LoginValidator {
    constructor(private fb: FormBuilder) { }
  
    //  Validacion de formulario de registro
    public formValidationLogin(): any {
      return new FormGroup({
        userName: new FormControl('', [
            Validators.required,          
            Validators.minLength(8),
            Validators.maxLength(50),
          ]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(50),
          ]),

      });
    }
  
  }
  