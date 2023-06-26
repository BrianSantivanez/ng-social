import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user';

@Component({
  selector: 'ngsocial-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    username: new FormControl("",[Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(8), Validators.required]),
  })

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log)
  }

  login(): void {
    if (this.loginForm.invalid){
      return;
    }

    const loginData = this.loginForm.value as User
    this.auth.login(loginData).subscribe();
  }
}
