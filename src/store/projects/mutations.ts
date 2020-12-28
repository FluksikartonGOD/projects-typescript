import { MutationTree } from 'vuex';
import { uuid } from 'uuidv4';
import { ProjectState, Project } from './types';

export const mutations: MutationTree<ProjectState> = {
    projectsLoaded(state, payload: Array<Project>) {
        state.error = false;
        state.projects = payload.map((p) => {
            p.id = uuid()
            return p
        });
    },
    projectsError(state) {
        state.error = true;
        state.projects = [];
    },
    projectsAdd(state, payload: Project) {
        state.projects.push(payload)
    },
    projectsRemove(state, payload: Project) {
        const index = state.projects.findIndex(p => p.id === payload.id)
        if (index === -1) return console.warn(`Project with id: ${payload.id} not found!`)
        state.projects.splice(index, 1)
    },
    updateSearch(state, payload: string) {
        state.search = payload
    }
};