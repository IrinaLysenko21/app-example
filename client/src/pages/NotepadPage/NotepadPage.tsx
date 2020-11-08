import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddNoteForm from '../../components/AddNoteForm/AddNoteForm';
import NotesList from '../../components/NotesList/NoteList';
import * as notepadSelectors from '../../redux/notepad/notepadSelectors';
import { INote } from '../../types/noteType';
import appearTransition from '../../assets/transitions/slide.module.scss';

const NotepadPage = () => {
  const allNotes: INote[] | [] = useSelector(notepadSelectors.allNotes);

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [noteToEdit, setNoteToEdit] = useState<INote | null>(null);

  const toggleIsSidebarOpen = () => setIsSidebarOpen(!isSidebarOpen);

  const updateNote = (id: string) => {
    !isSidebarOpen && setIsSidebarOpen(true);
    const noteToEdit = allNotes.find(note => note.id === id);

    if (noteToEdit) setNoteToEdit(noteToEdit);
  };

  return (
    <div className="page">
      <div className="page__contentWrap">
        <div className="container">
          <div className="page__innerContentWrap">
            <div className="page__content">
              <h2>Notepad</h2>
              {allNotes.length > 0 && (
                <NotesList notes={allNotes} updateNote={updateNote} />
              )}
            </div>
            <button
              className="page__btn"
              type="button"
              onClick={toggleIsSidebarOpen}
            >
              <i className="las la-plus"></i>
            </button>
          </div>
        </div>
      </div>

      <CSSTransition
        in={isSidebarOpen}
        timeout={250}
        classNames={appearTransition}
        unmountOnExit
      >
        <Sidebar title="Add new task">
          <AddNoteForm
            noteToEdit={noteToEdit}
            toggleIsSidebarOpen={toggleIsSidebarOpen}
            setNoteToEdit={setNoteToEdit}
          />
        </Sidebar>
      </CSSTransition>
    </div>
  );
};

export default NotepadPage;
