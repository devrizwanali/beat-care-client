<template>
  <div id="app">
    <The-header />
    <router-view/>
    <The-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
body {
  background: #f7fafc;
}
</style>
