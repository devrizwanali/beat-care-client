<template>
 <beat-rate-form :beatRate="form" title="Add beat rate!" @onSubmit="onCreate"/>
</template>

<script>
  import BeatRateForm from '@/components/BeatRateForm';
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        form: {
          beatRate: '',
          note: '',
        },
      }
    },
    components: {
      BeatRateForm
    },
    methods: {
      ...mapActions(['createBeatRate']),
      onCreate(data) {
       this.createBeatRate(data)
        .then(res => {
          alert('Record created sucessfully!')
          this.$router.push('/dashboard')
        })
        .catch(error => {
          alert('Something went wrong!')
        })
      },
    }
  }
</script>
