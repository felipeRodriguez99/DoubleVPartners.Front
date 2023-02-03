import {
    FormControl,
    FormBuilder,
    Validators,
    FormArray,
    FormGroup,
  } from "@angular/forms";
  import { Injectable } from "@angular/core";
  
  @Injectable({
    providedIn: "root",
  })
  export class RegisterValidator {
    constructor(private fb: FormBuilder) { }
  
  
    //  Validacion de formulario de registro
    public formValidationInformation(): any {
      return new FormGroup({
          
        names: new FormControl('', [
          Validators.required,
          Validators.pattern(/[a-zA-Z ]{1,254}/),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.pattern(/[a-zA-Z ]{1,254}/),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?:[^<>()[\].,;:\s@']+(\.[^<>()[\].,;:\s@']+)*|'[^\n']+')@(?:[^<>()[\].,;:\s@']+\.)+[^<>()[\]\.,;:\s@']{2,63}$/i
          ),
        ]),
        identificationNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9]*$/),
          Validators.minLength(5),
          Validators.maxLength(10),
        ]),

        typeIdentification: new FormControl('', [
          Validators.required,          
          Validators.minLength(1),
          Validators.maxLength(6),
        ]),

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
  