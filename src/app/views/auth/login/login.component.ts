import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { Alerts } from 'src/app/shared/class/alerts';
import { LoginValidator } from 'src/app/shared/validators/loginValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public dataLogin: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private loginValidator: LoginValidator,
    private alert: Alerts,
  ) {
    this.dataLogin = this.loginValidator.formValidationLogin();
    localStorage.setItem('isLogin', 'false');
  }

  public Login() {
    this.userService.GetPersons(this.dataLogin.value).subscribe((data) => {
      if (data) {
        localStorage.setItem('isLogin', 'true');
        this.router.navigate(['/pages/dashboard'])
      }
      else {
        this.alert.callAlert('error', '', 'Usuario o contraseña invalida', '')
      }
    })
  }

  public Reegister() {

    this.router.navigate(['/auth/register'])
  }
}
