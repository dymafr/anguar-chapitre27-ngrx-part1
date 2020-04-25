import { Action } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as todosAction from './todos.actions';

export interface TodoState {
  datas: Todo[];
}

const initialState = {
  datas: [
    {
      message: 'manger une pizza',
      done: false,
    },
  ],
};

export function todosReducer(
  state: TodoState = initialState,
  action: todosAction.TodosActionType
): TodoState {
  switch (action.type) {
    case todosAction.TODO_CREATE:
      return {
        ...state,
        datas: [...state.datas, action.payload],
      };
    case todosAction.TODO_DELETE:
      return {
        ...state,
        datas: state.datas.filter((t, i) => i !== action.payload),
      };
    case todosAction.TODO_TOGGLE:
      return {
        ...state,
        datas: state.datas.map((t, i) =>
          i === action.payload ? { ...t, done: !t.done } : t
        ),
      };
    default:
      return state;
  }
}
