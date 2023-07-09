import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngsocial-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  @ViewChild("username") usernameInput: any;
  @ViewChild("password") passwordInput: any;

  loginForm = new FormGroup({
    username: new FormControl("",[Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(8), Validators.required]),
  })

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log)
  }

  login(): void {
    if (this.loginForm.invalid){
      return;
    }

    const loginData = this.loginForm.value as User
    this.auth.login(loginData).subscribe({
      error: () => {
        this.usernameInput.nativeElement.value = "";
        this.passwordInput.nativeElement.value = "";
        this.toastr.error('', 'Username or Password is not correct', {timeOut: 3000});
      },
      complete: () => { this.router.navigateByUrl('feed');}
    });
  }
}
