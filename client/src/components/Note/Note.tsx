import React from 'react';
import cn from 'classnames';
import { INote } from '../../types/noteType';
import s from './Note.module.scss';

type PropsType = {
  inSidebar?: boolean;
  note: INote;
  updateNote?: (id: string) => void;
  deleteNote: (id: string) => void;
};

const Note = ({ note, inSidebar, updateNote, deleteNote }: PropsType) => {

  return (
    <li className={cn(s.notesList__item, { [s.notesList__item_small]: inSidebar})}>
          <div>
            <h3>{note?.title}</h3>
            <p>{note?.body}</p>
          </div>
          <div className={s.note__footer}>
            <span
              className={cn(s.note__priority, {
                [s.note__priority_high]: note.priority === 1,
                [s.note__priority_low]: note.priority === 2,
              })}
            >
              {note?.priority}
            </span>
            <div className={s.note__buttonsWrap}>
              {!inSidebar && updateNote && (
                <button
                id="update-note-btn"
                  className={cn(s.note__footerBtn, s.note__footerBtn_edit)}
                  type="button"
                  onClick={() => updateNote(note.id)}
                >
                  <i className="las la-pen"></i>
                </button>
              )}

              <button
                id="delete-note-btn"
                className={cn(s.note__footerBtn, s.note__footerBtn_delete)}
                type="button"
                onClick={() => deleteNote(note.id)}
              >
                <i className="las la-trash-alt"></i>
              </button>
            </div>
          </div>
        </li>
  );
};

export default Note;
