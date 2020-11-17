<template>
  <b-navbar toggleable="lg"  class="navbar-horizontal header">
    <b-navbar-brand @click="$router.push('/')" class="heading">BeatCare</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <router-link 
            :to="{ name: 'TechnicalDocument' }"
            class="heading nav-link"
          >Technical Document</router-link>
        </li>
        <li class="nav-item">
          <router-link 
            :to="{ name: 'Help' }"
            class="heading nav-link"
          >Help</router-link>
        </li>
        <li class="nav-item">
          <router-link 
            :to="{ name: 'Login' }"
            class="heading nav-link"
          >Login</router-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  export default {
    name: 'TheHeader'
  }
</script>
<style>
.header {
  background-color: #3c4d69;
}
.heading {
  color: #ccc !important;
  text-decoration: none !important;
}
.heading:hover {
  color: white !important;
}
</style>
