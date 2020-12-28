export interface Project {
  id?: String;
  name: string;
  description: string;
}

export interface ProjectState {
  projects: Array<Project>;
  error: boolean;
  search: string;
}