import { Action } from 'redux'
import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core'
import { IAppState } from '../reducers'

export interface ITodoState {
  list: { title: string }[],
  input: string
}

export const INITIAL_STATE: ITodoState = {
  list: [],
  input: ''
}

export function todoReducer(state: ITodoState = INITIAL_STATE, action: TodoAction): ITodoState {
  switch(action.type) {
    case TodoActions.ADD: {
      const list = [...state.list, { title: state.input }];
      return { ...state, list, input: '' }
    }
    // @todo deleteのlogic
    case TodoActions.DELETE: {
      return { ...state }
    }
    case TodoActions.INPUT:
      return { ...state, input: action.input }
    case TodoActions.GET:
      return { ...state, list: action.list }
  }
  return state
}

interface TodoAction extends Action {
  input: string;
  index: number;
  list: { title: string }[]
}


const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve() }, ms);
  })
}

@Injectable()
export class TodoActions {
  static ADD = 'todo/add'
  static DELETE = 'todo/delete'
  static INPUT = 'todo/input'
  static GET = 'todo/get'

  constructor(private ngRedux: NgRedux<IAppState>) { }

  public add() {
    this.ngRedux.dispatch({ type: TodoActions.ADD });
  }

  public delete(index: number) {
    this.ngRedux.dispatch({ type: TodoActions.DELETE, index })
  }

  public input(txt: string) {
    this.ngRedux.dispatch({ type: TodoActions.INPUT, input: txt })
  }

  // 2秒後にapiからデータをとってくるmock
  public async get(): Promise<{title: string}[]> {
    await sleep(2000);

    const list = [
      { title: 'ほげ' },
      { title: 'ふが' },
      { title: 'ぴよ' }
    ];

    this.ngRedux.dispatch({ type: TodoActions.GET, list })

    return list
  }
}
