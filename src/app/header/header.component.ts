import { Component } from '@angular/core';
import { UserService } from '../core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngsocial-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  username: String | undefined = undefined

  constructor(
    private userService: UserService,
    private router: Router 
  ){}

  ngOnInit(): void {
    console.log(this.router.url)
    if(!this.router.url.includes("/login/signup") && !this.router.url.includes("/about")){
      this.userService.getUserProfile().subscribe({
        next: (response) =>{
          this.username = response.username
        },
        error: (error) => {
          console.log(error.message)
        }

      });
    }
  }

  logout() {
    this.router.navigateByUrl('login');
    localStorage.removeItem("api_auth_token")
    window.location.reload();
  }

}
