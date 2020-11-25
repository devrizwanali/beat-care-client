<template>
  <b-card class="mt-5 card-center text-center">
    <h1>Details</h1>
    <hr>
    <p>
      <span class="font-weight-bold">
        Beate Rate:
      </span> 76 BPM</p>
    <p>
      <span class="font-weight-bold">
        Note: 
      </span> waliking</p>
    <hr>
    <b-button 
      pill variant="outline-info"
      @click="goBack"
    >Back</b-button>
  </b-card>
</template>
<script>
  export default {
    name: 'Details', 
    methods: {
      goBack() {
        this.$router.push('/dashboard')
      },
    }
  }
</script>
