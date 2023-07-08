import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'ngsocial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-social';

  constructor(
    private auth: AuthService,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    if(this.auth.token){
      this.userService.getUserProfile().subscribe();
    }
  }
}
