import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProjectState } from './types';
import { RootState } from '../types';

export const state: ProjectState = {
    projects: [],
    error: false,
    search: ''
};

const namespaced: boolean = true;

export const projects: Module<ProjectState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};