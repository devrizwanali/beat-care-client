<template>
  <b-card class="mt-5 card-center text-center">
    <h1>Details</h1>
    <hr>
    <div v-if="beatRate">
      <p>
        <span class="font-weight-bold">
          Beate Rate:
        </span> {{beatRate.beatRate}} BPM</p>
      <p>
        <span class="font-weight-bold">
          Note: 
        </span>{{beatRate.note}}</p>
    </div>
    <hr>
    <b-button 
      pill variant="outline-info"
      @click="goBack"
    >Back</b-button>
  </b-card>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'Details', 
    computed: {
      ...mapGetters(['beatRate'])
    },
    mounted() {
      this.$store.dispatch('fetchBeatRate', this.$route.params.id)
    },
    methods: {
      goBack() {
        this.$router.push('/dashboard')
      },
    }
  }
</script>
