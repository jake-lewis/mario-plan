import { createEntityAdapter, createSlice, Selector } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Project {
    id: number,
    title: string,
    content: string,
    dateCreated: number
}

const projectsAdapter = createEntityAdapter<Project>({
    sortComparer: (a, b) => a.dateCreated === b.dateCreated ? 0 : a > b ? 1 : -1
})

const initialState = projectsAdapter.getInitialState()
const filledState = projectsAdapter.upsertMany(initialState, [
    {id: 1, title: 'Help me find Peach', content: 'blah blah blah', dateCreated: Date.now()},
    {id: 2, title: 'Collect all the stars', content: 'blah blah blah', dateCreated: Date.now()},
    {id: 3, title: 'Egg hunt with Yoshi!', content: 'blah blah blah', dateCreated: Date.now()}
])

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: filledState,
    reducers:{

    }
})

export const selectProjects: Selector<RootState, ReturnType<typeof projectsSlice.reducer>> = state => state.projects;

export const {
    selectAll: selectAllProjects
} = projectsAdapter.getSelectors<RootState>(selectProjects)

export const {} = projectsSlice.actions

export default projectsSlice.reducer