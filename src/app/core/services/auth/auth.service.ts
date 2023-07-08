import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.model';
import { isPlatformBrowser } from '@angular/common';
import { UserService } from '../user/user.service';

interface TokenData {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private userService: UserService
  ) { }

  get token(): string | null {
    if (isPlatformBrowser(this.platformId)){
      return localStorage.getItem("api_auth_token")
    }
    return null
  }

  signup(userData: User): Observable<User> {
    return this.http.post<User>("http://localhost:3000/auth/signup", userData);
  }

  login(userData: User): Observable<TokenData> {
    return this.http
      .post<TokenData>("http://localhost:3000/auth/login", userData)
      .pipe(tap((tokenData) => {
        this.saveToken(tokenData.access_token),
        this.userService.getUserProfile().subscribe()
      }));
  }

  private saveToken(token: string): void{
    localStorage.setItem("api_auth_token", token);
  }
}
