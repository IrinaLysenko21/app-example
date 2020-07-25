import * as types from './notepadTypes';
import { INote } from '../../types/noteType';
import { NotepadActionsTypes } from './notepadTypes';
// import { NotepadActionsReturnTypes } from './notepadActions';

// interface IAction {
//   type: string;
//   payload?: any;
// }
const initialState = [] as INote[] | [];

type NotepadInitialStateType = typeof initialState;

const notepadReducer = (
  state = initialState,
  action: NotepadActionsTypes,
): NotepadInitialStateType => {
  switch (action.type) {
    case types.GET_NOTES_SUCCESS:
      return [...state, ...action.payload.notes];

    case types.ADD_NOTE_SUCCESS:
      return [...state, action.payload.note];

    case types.DELETE_NOTE_SUCCESS:
      return [...state].filter(
        task => (task as INote).id !== action.payload.id,
      );

    case types.UPDATE_NOTE_SUCCESS:
      return [...state].map(task =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.data }
          : task,
      );

    case types.GET_NOTES_ERROR:
    case types.ADD_NOTE_ERROR:
    case types.DELETE_NOTE_ERROR:
    case types.UPDATE_NOTE_ERROR:
      return state;

    default:
      return state;
  }
};

export default notepadReducer;
