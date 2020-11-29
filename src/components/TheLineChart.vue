<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    beats: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                sampleSize: 35,
                maxTicksLimit: 0
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ]
        },
        legend: {
          display: true,
          position: 'right',
          labels: {
            pointStyle: 'rect'
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  watch: {
    beats() {
      this.renderChart(this.chartData(), this.options)
    },
    labels() {
      this.renderChart(this.chartData(), this.options)
    },
    deep: true
  },
  mounted() {
    this.renderChart(this.chartData(), this.options)
  },
  methods: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'Beat Rate',
            borderColor: '#3c4d69',
            pointBackgroundColor: '#3c4d69',
            pointBorderColor: '#3c4d69',
            backgroundColor: 'transparent',
            pointBorderWidth: 6,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'white',
            data: this.beats
          },
        ]
      }
    }
  }
}
</script>