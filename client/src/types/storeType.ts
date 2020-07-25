import { INote } from './noteType';

export interface IStore {
  notes: INote[] | [];
}
