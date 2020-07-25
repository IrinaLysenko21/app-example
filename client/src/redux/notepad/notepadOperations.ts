import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as actions from './notepadActions';
import * as API from '../../services/api';
import { INoteWithoutId, INotePartialData } from '../../types/noteType';

export const getNotes = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => async dispatch => {
  dispatch(actions.getNotesStart());

  API.getNotes()
    .then(notes => {
      if (notes) dispatch(actions.getNotesSuccess(notes));
    })
    .catch(err => {
      dispatch(actions.getNotesError(err));
    });
};

export const addNote = (
  note: INoteWithoutId,
): ThunkAction<Promise<void>, any, any, AnyAction> => async dispatch => {
  dispatch(actions.addNoteStart());

  API.addNote(note)
    .then(note => {
      if (note) dispatch(actions.addNoteSuccess(note));
    })
    .catch(err => {
      dispatch(actions.addNoteError(err));
    });
};

export const deleteNote = (
  id: string,
): ThunkAction<Promise<void>, any, any, AnyAction> => async dispatch => {
  dispatch(actions.deleteNoteStart());

  API.deleteNote(id)
    .then(res => {
      if (res) dispatch(actions.deleteNoteSuccess(id));
    })
    .catch(err => {
      dispatch(actions.deleteNoteError(err));
    });
};

export const updateNote = (
  id: string,
  data: INotePartialData,
): ThunkAction<Promise<void>, any, any, AnyAction> => async dispatch => {
  dispatch(actions.updateNoteStart());

  API.updateNote(id, data)
    .then(res => {
      if (res) dispatch(actions.updateNoteSuccess(id, data));
    })
    .catch(err => {
      dispatch(actions.updateNoteError(err));
    });
};
