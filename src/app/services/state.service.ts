import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const INITIAL_STATE = {
  data: null,
  term: ''
};

@Injectable({
  providedIn: 'root'
})
export class StateService {

_state = new BehaviorSubject(INITIAL_STATE);
  state = this._state.asObservable(); 

  changeData(data: object) {
    const oldState = this._state.getValue()
    this._state.next({ ...oldState, data });
  }

  changeTerm(term: string) {
    const oldState = this._state.getValue()
    this._state.next({ ...oldState, term });
    }

}


