import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthValidatorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          return event;
        },
        error: (error) => {
          console.log(this.router.url)
          if(!this.router.url.includes("/login/signup") && !this.router.url.includes("/about") && this.router.url != "/") {
            //when the user is not logged in
            if(error.status === 401) {
              this.router.navigateByUrl('login');
              localStorage.removeItem("api_auth_token")
            }
            //when the user set and invalid id in the URL
            if(error.status === 500) {
              this.router.navigateByUrl('feed');
            }
          }
        },
      })
    );
  }
}
