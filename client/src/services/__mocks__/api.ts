const fakeData = [
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

const getNotes = async () => {
  return await new Promise(resolve => {
    resolve(fakeData);
  });
};

export default getNotes;
