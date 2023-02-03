import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { Alerts } from 'src/app/shared/class/alerts';
import { RegisterValidator } from 'src/app/shared/validators/registerValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public dataRegister: FormGroup;

  constructor(
    private registerValidator: RegisterValidator,
    private registerService: RegisterService,
    private alert: Alerts,
  ) {
    this.dataRegister = this.registerValidator.formValidationInformation();
  }


  /**
   * Metodo encargado de crear el usuario y la persona
   */
  public RegisterPerson() {

    if (this.dataRegister.invalid) {
      this.validateAllFormFields(this.dataRegister);
      return
    };

    this.registerService.RegisterPerson(this.dataRegister.value).subscribe((data) => {
      if (data.personIsSusses && data.userIsSusses){
        this.dataRegister.reset();        
        this.alert.callAlert('success','','Se registro correctamente','');
      }
      else{
        this.alert.callAlert('error','','Lo sentimos, hubo un problema','');
      }
      
    });
  }

  public validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
