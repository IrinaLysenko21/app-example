import { INote, INotePartialData } from '../../types/noteType';
import * as types from './notepadTypes';

// get notes

export const getNotesStart = (): types.IGetNotesStart => ({
  type: types.GET_NOTES_START,
});

// export type GetNotesStartReturnType = ReturnType<typeof getNotesStart>;

export const getNotesSuccess = (notes: INote[]): types.IGetNotesSuccess => ({
  type: types.GET_NOTES_SUCCESS,
  payload: {
    notes,
  },
});

// export type GetNotesSuccessReturnType = ReturnType<typeof getNotesSuccess>;

export const getNotesError = (error: object): types.IGetNotesError => ({
  type: types.GET_NOTES_ERROR,
  payload: {
    error,
  },
});

// export type GetNotesErrorReturnType = ReturnType<typeof getNotesError>;

// add note

export const addNoteStart = (): types.IAddNoteStart => ({
  type: types.ADD_NOTE_START,
});

// export type AddNoteStartReturnType = ReturnType<typeof addNoteStart>;

export const addNoteSuccess = (note: INote): types.IAddNoteSuccess => ({
  type: types.ADD_NOTE_SUCCESS,
  payload: {
    note,
  },
});

// export type AddNoteSuccessReturnType = ReturnType<typeof addNoteSuccess>;

export const addNoteError = (error: object): types.IAddNoteError => ({
  type: types.ADD_NOTE_ERROR,
  payload: {
    error,
  },
});

// export type AddNoteErrorReturnType = ReturnType<typeof addNoteError>;

// delete note

export const deleteNoteStart = () => ({
  type: types.DELETE_NOTE_START,
});

// export type DeleteNoteStartReturnType = ReturnType<typeof deleteNoteStart>;

export const deleteNoteSuccess = (id: string) => ({
  type: types.DELETE_NOTE_SUCCESS,
  payload: {
    id,
  },
});

// export type DeleteNoteSuccessReturnType = ReturnType<typeof deleteNoteSuccess>;

export const deleteNoteError = (error: object) => ({
  type: types.DELETE_NOTE_ERROR,
  payload: {
    error,
  },
});

// export type DeleteNoteErrorReturnType = ReturnType<typeof deleteNoteError>;

// update note

export const updateNoteStart = () => ({
  type: types.UPDATE_NOTE_START,
});

// export type UpdateNoteStartReturnType = ReturnType<typeof updateNoteStart>;

export const updateNoteSuccess = (id: string, data: INotePartialData) => ({
  type: types.UPDATE_NOTE_SUCCESS,
  payload: {
    id,
    data,
  },
});

// export type UpdateNoteSuccessReturnType = ReturnType<typeof updateNoteSuccess>;

export const updateNoteError = (error: object) => ({
  type: types.UPDATE_NOTE_ERROR,
  payload: {
    error,
  },
});

// export type UpdateNoteErrorReturnType = ReturnType<typeof updateNoteError>;

// export type NotepadActionsReturnTypes =
//   | GetNotesStartReturnType
//   | GetNotesSuccessReturnType
//   | GetNotesErrorReturnType
//   | AddNoteStartReturnType
//   | AddNoteSuccessReturnType
//   | AddNoteErrorReturnType
//   | DeleteNoteStartReturnType
//   | DeleteNoteSuccessReturnType
//   | DeleteNoteErrorReturnType;
