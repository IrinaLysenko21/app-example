import React from "react";
import NoteList from "./NoteList";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const notes = [
  {
    "id": "XWaQXcbk0",
    "title": "JavaScript essentials",
    "body": "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    "priority": 2
  },
  {
    "id": "pkXzyRp1P",
    "title": "Refresh HTML and CSS",
    "body": "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    "priority": 1
  },
]

const mockStore = configureStore([ thunk ]);
const store = mockStore({ notes: [] });

const setUp = (props) => mount(<Provider store={store}><NoteList notes={notes} {...props} /></Provider>);

describe("NotesList component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should contain one note list wrapper", () => {
    const wrapper = component.find("ul");
    expect(wrapper.length).toBe(1);
  });

  it("should contain 2 notes", () => {
    const wrapper = component.find("li");
    expect(wrapper.length).toBe(2);
  });
});
