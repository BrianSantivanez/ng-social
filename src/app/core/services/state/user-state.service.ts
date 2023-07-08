import { Injectable } from '@angular/core';
import { StateService } from './state.service';
import { Observable } from 'rxjs';

interface UserState {
  userId : string
}

const initialUserState: UserState = {
  userId: ""
}

@Injectable({
  providedIn: 'root'
})
export class UserStateService extends StateService<UserState> {

  userId$: Observable<string> | undefined= this.select(
    (state) => state.userId
  )

  constructor() { 
    super(initialUserState)
  }

  setUserId(userId : string): void {
    this.setState({userId})
  }
}
