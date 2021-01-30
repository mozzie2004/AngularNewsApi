import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE = {
  term: ''
};

@Injectable({
  providedIn: 'root'
})
export class StateService {

_state = new BehaviorSubject(INITIAL_STATE); 

  changeTerm(term: string) {
    const oldState = this._state.getValue()
    this._state.next({ ...oldState, term });
    }

}


