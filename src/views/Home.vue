<template>
  <div>
    <div class="d-md-flex justify-content-between py-2">
      <div class="d-md-flex">
        <div class="mr-2">
          <b-form-input v-model="newProject.name" placeholder="Project name"></b-form-input>
        </div>
        <div class="mr-2">
          <b-form-input v-model="newProject.description" placeholder="Project description"></b-form-input>
        </div>
        <b-button variant="primary" @click="onAddProject(newProject)">Add Project</b-button>
      </div>
      <div>
        <b-form-input v-model="searchText" placeholder="Search project by name..."></b-form-input>
      </div>
    </div>
    <b-row>
      <b-col v-for="project in projects" cols="12" md="4" class="p-2" :key="project.id">
        <ProjectCard :project="project" @delete="removeProject" />
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { State, Action, Getter } from 'vuex-class';
  import Component from 'vue-class-component';
  import { ProjectState, Project } from '../store/projects/types';
  // components
  import ProjectCard from '../components/ProjectCard.vue'
  //
  const namespace: string = 'projects';
  const defaultNewProject = {
    name: null,
    description: null
  }
  @Component({
    components: {
      ProjectCard
    }
  })
  export default class ProjectsView extends Vue {
    @State('search') search: string;
    @Action('fetchData', { namespace }) fetchData: any;
    @Action('add', { namespace }) addProject: any;
    @Action('remove', { namespace }) removeProject: any;
    @Action('updateSearch', { namespace }) updateSearch: any;
    @Getter('projects', { namespace }) projects: Array<Project>;
    
    private newProject = {...defaultNewProject}

    private get searchText(): string {
      return this.search
    }

    private set searchText(query: string) {
      this.updateSearch(query)
    }

    private onAddProject(payload: Project) {
      this.addProject(payload)
      this.newProject = {...defaultNewProject}
    }

    created() {
      this.fetchData();
    }
  }
</script>