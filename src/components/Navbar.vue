<template>
  <div>
    <b-nav class="border-top border-bottom py-2 mb-4">
      <b-nav-item v-for="link in links" :key="link.url" :to="link.url">
        {{ link.text }}
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

type Link = {
  url: string;
  text: string;
}

@Component
export default class Navbar extends Vue {
  @Prop({default: []}) private links!: Array<Link>;
}
</script>