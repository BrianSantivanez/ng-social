import { Component, ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'ngsocial-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @ViewChild("signupForm") signupForm: FormGroup | null = null
  
  username = ""
  password = ""

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  signup(): void{
    if (this.signupForm?.invalid){
      console.log("invalid", this.signupForm?.value)
      return;
    }
    console.log("valid", this.signupForm?.value)
    this.auth.signup(this.signupForm?.value).subscribe({
      complete: () => { this.router.navigateByUrl('login');},
      error: (err) => {
        console.log(err)
        this.toastr.error('', 'The user was not created', {timeOut: 3000});
      },
    });

  }
}
