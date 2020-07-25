import React from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import * as notepadOperations from '../../redux/notepad/notepadOperations';
import { INote } from '../../types/noteType';
import s from './NotesList.module.scss';

type PropsType = {
  inSidebar?: true;
  notes: INote[];
  updateNote?: (id: string) => void;
};

const NotesList = ({ notes, inSidebar, updateNote }: PropsType) => {
  const dispatch = useDispatch();

  const deleteNote = (id: string) => {
    dispatch(notepadOperations.deleteNote(id));
  };

  return (
    <ul className={s.notesList}>
      {notes.map((note: INote) => (
        <li
          className={cn(s.notesList__item, {
            [s.notesList__item_small]: inSidebar,
          })}
          key={note.id}
        >
          <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </div>
          <div className={s.note__footer}>
            <span
              className={cn(s.note__priority, {
                [s.note__priority_high]: note.priority === 1,
                [s.note__priority_low]: note.priority === 2,
              })}
            >
              {note.priority}
            </span>
            <div className={s.note__buttonsWrap}>
              {!inSidebar && updateNote && (
                <button
                  className={cn(s.note__footerBtn, s.note__footerBtn_edit)}
                  type="button"
                  onClick={() => updateNote(note.id)}
                >
                  <i className="las la-pen"></i>
                </button>
              )}

              <button
                className={cn(s.note__footerBtn, s.note__footerBtn_delete)}
                type="button"
                onClick={() => deleteNote(note.id)}
              >
                <i className="las la-trash-alt"></i>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
