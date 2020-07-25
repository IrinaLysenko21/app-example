import { combineReducers } from 'redux';
import notepadReducer from './notepad/notepadReducer';

const rootReducer = combineReducers({
  notes: notepadReducer,
});

export default rootReducer;
// export type rootState = ReturnType<typeof rootReducer>;
