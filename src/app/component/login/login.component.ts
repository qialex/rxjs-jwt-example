import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../service';
import { IAuthData } from '../../types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    // TODO: remove hardcoding
    // email: new FormControl('test@circly.at', Validators.required),
    // password: new FormControl('123ABCDE', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  @ViewChild('elEmail') elEmail!: ElementRef;
  @ViewChild('elPassword') elPassword!: ElementRef;

  errorCode: number|undefined;

  constructor(
    private userService: UserService,
  ) {}

  onAnyChange(): void {
    this.clearErrorCode();
  }

  async onSubmit() {
    if (!this.loginForm.valid) {
      const elFocus: ElementRef = !this.loginForm.value.email ? this.elEmail : this.elPassword;
      elFocus.nativeElement.focus();
      return;
    }

    const result = await this.userService.auth(this.loginForm.value as IAuthData);
    this.errorCode = result.status === 200 ? undefined : result.status;
  }

  clearErrorCode(): void {
    this.errorCode = undefined;
  }

  // TODO: remove 
  usePrefilled(): void {
    this.loginForm.setValue({email: 'test@circly.at', password: '123ABCDE'});
  }
}
