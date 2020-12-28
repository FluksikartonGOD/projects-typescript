<template>
  <b-card
    :header="project.name"
    header-tag="header"
    footer-tag="footer"
    no-body
  >
    <b-card-body>
      <div v-html="project.description"></div>
    </b-card-body>
    <b-card-footer>
      <b-button variant="text-variant" @click="onProjectDelete(project)">Delete Project</b-button>
    </b-card-footer>
  </b-card>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import { Project } from '../store/projects/types';

@Component({
  methods: {
    onProjectDelete(project: Project): void {
      this.$emit('delete', project)
    }
  }
})
export default class ProjectCard extends Vue {
  @Prop({default: null}) private project!: Project;
}
</script>