import { GetterTree } from 'vuex';
import { ProjectState, Project } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProjectState, RootState> = {
  projects(state): Array<Project> {
    const { projects, search } = state;
    if (!search || search === '') return projects
    return projects.filter((p) => {
      const pName = p.name.toLowerCase()
      const s = search.toLowerCase()
      return pName.includes(s)
    })
  }
};