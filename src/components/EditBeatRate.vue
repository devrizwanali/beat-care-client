<template>
 <div v-if="beat">
    <beat-rate-form :beatRate="beat" title="Edit beat rate!" @onSubmit="Edit"/>
 </div>
</template>
<script>
  import BeatRateForm from '@/components/BeatRateForm';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'Edit',
    data() {
      return {
        form: {
          beat: null
        }
      }
    },
    components: {
      BeatRateForm
    },
    computed: {
      ...mapGetters(['beatRate']),
      beat: function() {
        return Object.assign({}, this.beatRate)
      }
    },
    mounted() {
      this.$store.dispatch('fetchBeatRate', this.$route.params.id)
    },
    methods: {
      ...mapActions(['updateBeatRate']),
      Edit(beatrate) {
        const data = {id: this.$route.params.id, beatRate: beatrate}
        this.updateBeatRate(data)
          .then(res => {
            alert('Record updated successfully!')
            this.$store.dispatch('fetchBeatRates')
            this.$router.push('/dashboard')
          })
          .catch(error => {
            alert('There is something went wrong!')
          })
      }
    }
  }
</script>
