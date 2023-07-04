import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.model';

interface TokenData {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(userData: User): Observable<User> {
    return this.http.post<User>("http://localhost:3000/auth/signup", userData);
  }

  login(userData: User): Observable<TokenData> {
    return this.http
      .post<TokenData>("http://localhost:3000/auth/login", userData)
      .pipe(tap((tokenData) => this.saveToken(tokenData.access_token)));
  }

  private saveToken(token: string): void{
    localStorage.setItem("api_auth_token", token);
  }
}
