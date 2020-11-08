import React from 'react';
import { useDispatch } from 'react-redux';
import Note from "../Note/Note";
import { INote } from '../../types/noteType';
import * as notepadOperations from '../../redux/notepad/notepadOperations';
import s from './NoteList.module.scss';

type PropsType = {
  inSidebar?: boolean;
  notes: INote[];
  updateNote?: (id: string) => void;
};

const NoteList = ({ notes, inSidebar, updateNote }: PropsType) => {
  const dispatch = useDispatch();

  const deleteNote = (id: string) => {
    dispatch(notepadOperations.deleteNote(id));
  };

  return (
    <ul className={s.notesList}>
      {notes.length > 0 && notes.map((note: INote) => (
        <Note note={note} inSidebar={inSidebar} updateNote={updateNote} deleteNote={deleteNote} key={note.id}/>
      ))}
    </ul>
  );
};

export default NoteList;
