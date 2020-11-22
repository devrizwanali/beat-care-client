<template>
  <div id="app">
    <Nav-bar />
    <router-view/>
    <The-footer />
  </div>
</template>

<script>
import NavBar from '@/components/TheNavBar';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'App',
  components: {
    NavBar,
    TheFooter
  }
}
</script>

<style>
body {
  background: #f7fafc;
}
</style>
