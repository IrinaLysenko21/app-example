import { IStore } from '../../types/storeType';
import { INote } from '../../types/noteType';

export const allNotes = (store: IStore): INote[] => store.notes;

export const highPriorityNotes = (store: IStore): INote[] =>
  store.notes.filter(note => note.priority === 1);
