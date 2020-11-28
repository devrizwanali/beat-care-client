<template>
  <div>
    Graph
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
export default {
  name: 'BeatRateGraph',
  extends: Bar,
  mounted () {
    this.renderChart(data, options)
  }
}
</script>
