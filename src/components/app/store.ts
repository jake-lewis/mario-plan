import { configureStore, ThunkAction, Action, StateFromReducersMapObject, DeepPartial } from '@reduxjs/toolkit';
import {authSlice} from '../auth/authSlice';
import {projectsSlice} from '../projects/projectsSlice';


const reducer = {
    auth: authSlice.reducer,
    projects: projectsSlice.reducer
}

const preloadedState = {
    projects: {
        ids: [1, 2, 3],
        entities: {
            1: {id: 1, title: 'Help me find Peach', content: 'blah blah blah', dateCreated: Date.now()},
            2: {id: 2, title: 'Collect all the stars', content: 'blah blah blah', dateCreated: Date.now()},
            3: {id: 3, title: 'Egg hunt with Yoshi!', content: 'blah blah blah', dateCreated: Date.now()}
        }
    }
}

export const store = configureStore({
  reducer,
  preloadedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
