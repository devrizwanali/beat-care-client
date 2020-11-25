<template>
  <b-navbar toggleable="lg"  class="navbar-horizontal header">
    <b-navbar-brand @click="$router.push('/')" class="heading" style="cursor: pointer">BeatCare</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item" v-if="isLoggedIn">
          <router-link
            :to="{ name: 'FAQs' }"
            class="heading nav-link"
          >Report</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link 
            :to="{ name: 'Dashboard' }"
            class="heading nav-link"
          >Dashboard</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <span 
            class="heading nav-link"
            @click="onLogOut"
          >LogOut</span>
        </li>
        <li class="nav-item" v-else>
          <router-link 
            :to="{ name: 'Login' }"
            class="heading nav-link"
          >Login</router-link>
        </li>
        <li class="nav-item">
          <router-link 
            :to="{ name: 'FAQs' }"
            class="heading nav-link"
          >FAQs</router-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapActions, mapGetters } from  'vuex';
  export default {
    name: 'TheHeader',
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    methods: {
      ...mapActions(['LogOut']),
      onLogOut() {
        this.LogOut()
        this.$router.push({name: 'Home'})
      }
    }
  }
</script>
<style>
.header {
  background-color: #3c4d69;
}
.heading {
  color: #ccc !important;
  text-decoration: none !important;
  cursor: pointer;
}
.heading:hover {
  color: white !important;
}
</style>
