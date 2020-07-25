import axios from 'axios';
import { Notyf } from 'notyf';
import config from '../config/config';
import { INote, INoteWithoutId, INotePartialData } from '../types/noteType';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

axios.defaults.baseURL = config.baseURL;

export const getNotes = async (): Promise<INote[] | [] | undefined> => {
  try {
    const response = await axios.get('/notes');

    if (response) return response.data;
  } catch (err) {
    notyf.error('Error while loading notes');
    throw new Error(err);
  }
};

export const addNote = async (
  note: INoteWithoutId,
): Promise<INote | undefined> => {
  try {
    const response = await axios.post('/notes', note);

    if (response) return response.data;
  } catch (err) {
    notyf.error('Error while adding a note');
    throw new Error(err);
  }
};

export const deleteNote = async (id: string): Promise<INote | undefined> => {
  try {
    const response = await axios.delete(`/notes/${id}`);

    if (response) return response.data;
  } catch (err) {
    notyf.error('Error while deleting a note');
    throw new Error(err);
  }
};

export const updateNote = async (
  id: string,
  data: INotePartialData,
): Promise<INote | undefined> => {
  try {
    const response = await axios.patch(`/notes/${id}`, data);

    if (response) return response.data;
  } catch (err) {
    notyf.error('Error while editing a note');
    throw new Error(err);
  }
};
