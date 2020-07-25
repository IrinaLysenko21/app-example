import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';
import * as notepadOperations from '../../redux/notepad/notepadOperations';
import { INote } from '../../types/noteType';
import s from './AddNoteForm.module.scss';

type PropsType = {
  noteToEdit: INote | null;
  toggleIsSidebarOpen: () => void;
  setNoteToEdit: (note: INote | null) => void;
};

const AddNoteForm = ({
  noteToEdit,
  toggleIsSidebarOpen,
  setNoteToEdit,
}: PropsType) => {
  const dispatch = useDispatch();

  type ValuesType = {
    title: string;
    body: string;
    priority: string;
  };

  const initialValues: ValuesType = {
    title: '',
    body: '',
    priority: '2',
  };

  const [initial, setInitial] = useState<ValuesType>(initialValues);

  useEffect(() => {
    if (noteToEdit) {
      setInitial({
        title: noteToEdit.title,
        body: noteToEdit.body,
        priority: noteToEdit.priority.toString(),
      });
    } else {
      setInitial(initialValues);
    }
  }, [noteToEdit]);

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    body: Yup.string().required('Required'),
    priority: Yup.number().required('Required'),
  });

  const onSubmit = (values: ValuesType, { resetForm }: any) => {
    const note = {
      title: values.title,
      body: values.body,
      priority: Number(values.priority),
    };

    noteToEdit
      ? dispatch(notepadOperations.updateNote(noteToEdit.id, note))
      : dispatch(notepadOperations.addNote(note));

    resetForm({});
    setNoteToEdit(null);
    toggleIsSidebarOpen();
  };

  return (
    <Formik
      initialValues={initial}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {props => {
        return (
          <Form className={s.form}>
            <div className={s.form__control}>
              <label className={s.form__label} htmlFor="title">
                Note title
              </label>
              <Field
                className={s.form__input}
                type="text"
                id="title"
                name="title"
              />
              <ErrorMessage className={s.form__errorMessage} name="title" />
            </div>

            <div className={s.form__control}>
              <label className={s.form__label} htmlFor="body">
                Note description
              </label>
              <Field
                className={s.form__textarea}
                as="textarea"
                id="body"
                name="body"
              />
              <ErrorMessage className={s.form__errorMessage} name="body" />
            </div>

            <div
              role="group"
              aria-labelledby="my-radio-group"
              className={cn(s.form__control, s.form__controlCheckboxes)}
            >
              <div className={s.form__checkboxWrap}>
                <label className={s.form__label} htmlFor="priority_1">
                  <Field
                    as="input"
                    className={s.form__checkbox}
                    type="radio"
                    id="priority_1"
                    name="priority"
                    value="1"
                  />
                  Important task
                  <div className={s.form__checkboxCustom}></div>
                </label>
              </div>
              <div className={s.form__checkboxWrap}>
                <label className={s.form__label} htmlFor="priority_2">
                  <Field
                    as="input"
                    className={s.form__checkbox}
                    type="radio"
                    id="priority_2"
                    name="priority"
                    value="2"
                  />
                  I can do it later
                  <div className={s.form__checkboxCustom}></div>
                </label>
              </div>
            </div>

            <div className={s.form__buttons}>
              <button
                className={cn(s.form__btn, s.form__btn_submit)}
                type="submit"
              >
                Save
              </button>
              <button
                className={cn(s.form__btn, s.form__btn_cancel)}
                type="reset"
                onClick={() => {
                  props.resetForm();
                  setNoteToEdit(null);
                  toggleIsSidebarOpen();
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddNoteForm;
