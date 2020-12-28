<template>
  <div class="py-4">
    <b-jumbotron class="py-4 mb-0" :header="headerText" :lead="headerLead" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop({default: null}) private headerText!: string;
  @Prop({default: null}) private headerLead!: string;
}
</script>
