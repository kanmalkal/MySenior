interface UserBackPackState {
  loginstate: boolean
}

const initialState: UserBackPackState = {
  loginstate:  false
};

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class UserBackpackService extends StateService<UserBackPackState> {
  loginstate$: Observable<boolean> = this.select((state) => {
    return state.loginstate;
  });
  constructor() { 
    super(initialState);
  }

  public setLoginState (value:UserBackPackState)
  {
    this.state.loginstate = value.loginstate
  }

  public getLoginState() : boolean {
     return this.state.loginstate
  }
}
