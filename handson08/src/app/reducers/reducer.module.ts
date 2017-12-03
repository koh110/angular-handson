import { NgModule } from '@angular/core';
import {
  applyMiddleware,
  Store,
  combineReducers,
  compose,
  createStore
} from 'redux';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { rootReducer, IAppState, INITIAL_STATE } from './index';

import { TodoActions } from './todo'

@NgModule({
  declarations: [
  ],
  imports: [
    NgReduxModule
  ],
  providers: [ TodoActions ]
})
export class ReducerModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
