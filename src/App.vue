<template>
    <div id="app">
      <b-container>
        <Header 
          headerText="My Portfolio"
          headerLead="Welcome to my website"
        />
        <Navbar
          :links="links"
        />
        <router-view></router-view>
      </b-container>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Header,
    Navbar
  },
  data () {
    return {
      links: [
        {
          url: 'home',
          text: 'Home'
        },
        {
          url: 'about',
          text: 'About'
        }
      ]
    }
  }
}
</script>
