import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProjectState, Project } from './types';
import { RootState } from '../types';


export const actions: ActionTree<ProjectState, RootState> = {
    fetchData({ commit }): any {
        axios({
            url: '/projects.json'
        }).then((response) => {
            const payload: Project = response && response.data;
            commit('projectsLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('projectsError');
        });
    },
    add({ commit }, payload: Project): any {
        commit('projectsAdd', payload);
    },
    remove({ commit }, payload: Project): any {
        commit('projectsRemove', payload);
    },
    updateSearch({ commit }, payload: string): any {
        commit('updateSearch', payload)
    }
};