import React from "react";
import Note from "./Note";

const note = {
  "id": "XWaQXcbk0",
  "title": "JavaScript essentials",
  "body": "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
  "priority": 2
};

const sidebarProps = {
  inSidebar: true,
  note,
  deleteNote: jest.fn(),
  // deleteNote: (id) => `deleted ${id}`,
}

const notepadProps = {
  inSidebar: false,
  note,
  deleteNote: jest.fn(),
  updateNote: jest.fn(),
  // updateNote: (id) => `updated ${id}`,
}

const setUp = (props) => mount(<Note {...props} />);

describe("Note component", () => {

  describe("Notepad Note component", () => {
    let component;

    beforeEach(() => {
      component = setUp(notepadProps);
    });

    it("should contain one note wrapper", () => {
      const wrapper = component.find("li");
      expect(wrapper).toHaveLength(1);
    });

    it("should contain two buttons", () => {
      const wrapper = component.find("button");
      expect(wrapper).toHaveLength(2);
    });

    it("should receive an updateNote function prop if it's placed in the Notepad", () => {
      const updateNote = component.prop("updateNote");
      const inSidebar = component.prop("inSidebar");
      if (!inSidebar) expect(typeof updateNote).toBe("function");
    });

    it("should call the updateNote function on click update note button", () => {
      const wrapper = component.find('#update-note-btn');
      const updateNote = component.prop("updateNote");
      wrapper.simulate("click");
      expect(updateNote).toHaveBeenCalled();
    });

    it("should call the updateNote function on click update note button", () => {
      const wrapper = component.find('#delete-note-btn');
      const deleteNote = component.prop("deleteNote");
      wrapper.simulate("click", {
        target: { id: "note-id" }
    });
      expect(deleteNote).toHaveBeenCalledWith(note.id);
    });

    // it("should update the note on click update button", () => {
    //   const updateNote = component.find(Note).prop('updateNote');
    //   const result = updateNote("id");
    //   expect(result).toBe("updated id");
    // });
  }),

  describe("Sidebar Note component", () => {
    let component;

    beforeEach(() => {
      component = setUp(sidebarProps);
    });

    it("should contain one button", () => {
      const wrapper = component.find("button");
      expect(wrapper.length).toBe(1);
    });

    it("shouldn't receive an updateNote function prop if it's placed in the Sidebar", () => {
      const updateNote = component.prop("updateNote");
      const inSidebar = component.prop("inSidebar");
      if (inSidebar) expect(typeof updateNote).not.toBe("function");
    });
  })
});

