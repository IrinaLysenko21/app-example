import { INote, INotePartialData } from '../../types/noteType';

export const GET_NOTES_START = 'notepad/GET_NOTES_START';
export const GET_NOTES_SUCCESS = 'notepad/GET_NOTES_SUCCESS';
export const GET_NOTES_ERROR = 'notepad/GET_NOTES_ERROR';

export const ADD_NOTE_START = 'notepad/ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'notepad/ADD_NOTE_SUCCESS';
export const ADD_NOTE_ERROR = 'notepad/ADD_NOTE_ERROR';

export const DELETE_NOTE_START = 'notepad/DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'notepad/DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_ERROR = 'notepad/DELETE_NOTE_ERROR';

export const UPDATE_NOTE_START = 'notepad/UPDATE_NOTE_START';
export const UPDATE_NOTE_SUCCESS = 'notepad/UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_ERROR = 'notepad/UPDATE_NOTE_ERROR';

// get notes

export interface IGetNotesStart {
  type: typeof GET_NOTES_START;
}

export interface IGetNotesSuccess {
  type: typeof GET_NOTES_SUCCESS;
  payload: {
    notes: INote[];
  };
}

export interface IGetNotesError {
  type: typeof GET_NOTES_ERROR;
  payload: {
    error: {};
  };
}

// add note

export interface IAddNoteStart {
  type: typeof ADD_NOTE_START;
}

export interface IAddNoteSuccess {
  type: typeof ADD_NOTE_SUCCESS;
  payload: {
    note: INote;
  };
}

export interface IAddNoteError {
  type: typeof ADD_NOTE_ERROR;
  payload: {
    error: {};
  };
}

// delete note

export interface IDeleteNoteStart {
  type: typeof DELETE_NOTE_START;
}

export interface IDeleteNoteSuccess {
  type: typeof DELETE_NOTE_SUCCESS;
  payload: {
    id: string;
  };
}

export interface IDeleteNoteError {
  type: typeof DELETE_NOTE_ERROR;
  payload: {
    error: {};
  };
}

// update note

export interface IUpdateNoteStart {
  type: typeof UPDATE_NOTE_START;
}

export interface IUpdateNoteSuccess {
  type: typeof UPDATE_NOTE_SUCCESS;
  payload: {
    id: string;
    data: INotePartialData;
  };
}

export interface IUpdateNoteError {
  type: typeof UPDATE_NOTE_ERROR;
  payload: {
    error: {};
  };
}

export type NotepadActionsTypes =
  | IGetNotesStart
  | IGetNotesSuccess
  | IGetNotesError
  | IAddNoteStart
  | IAddNoteSuccess
  | IAddNoteError
  | IDeleteNoteStart
  | IDeleteNoteSuccess
  | IDeleteNoteError
  | IUpdateNoteStart
  | IUpdateNoteSuccess
  | IUpdateNoteError;
