<template>
  <div id="app">
    <Nav-bar />
    <router-view/>
    <The-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
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
.card-center {
  width: 50%;
  margin: auto;
}
</style>
