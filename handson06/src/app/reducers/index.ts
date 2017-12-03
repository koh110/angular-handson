import { Action, combineReducers } from 'redux'

import { todoReducer, ITodoState, INITIAL_STATE as TODO_INITIAL_STATE } from './todo'

export interface IAppState {
  todo: ITodoState
}

export const INITIAL_STATE: IAppState = {
  todo: TODO_INITIAL_STATE
};

export const rootReducer = combineReducers<IAppState>({
  todo: todoReducer
})
