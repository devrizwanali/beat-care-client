<template>
  <div v-if="beatRates.length > 0" class="mt-5">
    <h3 class="text-center">Beat Rate grpah</h3>
    <line-chart :beats="beats" :labels="labels" :height="100"/>
  </div>
  <div v-else>
    <h2 class="text-center mt-5">There is no record. Please create from dashboard.</h2>
  </div>
</template>
<script>
  import LineChart from './TheLineChart'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        beats: [],
        labels: []
      }
    },
    components: {
      LineChart
    },
    computed: {
      ...mapGetters(['beatRates'])
    },
    mounted() {
      this.$store.dispatch('fetchBeatRates')
      this.labels = this.beatRates.map(x => x.createdAt)
      this.beats = this.beatRates.map(x => x.beatRate)
    }
  }
</script>
