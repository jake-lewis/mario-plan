import { createEntityAdapter, createSlice, Selector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: initialState,
    reducers:{

    }
})

export const selectProjects: Selector<RootState, ReturnType<typeof projectsSlice.reducer>> = state => state.projects;

export const {
    selectAll: selectAllProjects
} = projectsAdapter.getSelectors<RootState>(selectProjects)

export const {} = projectsSlice.actions

export default projectsSlice.reducer