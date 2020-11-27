<template>
 <beat-rate-form :beatRate="form" title="Add beat rate!" @onSubmit="onCreate"/>
</template>

<script>
  import BeatRateForm from '@/components/BeatRateForm'
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
      onCreate(evt) {
        alert(evt)
      },
    }
  }
</script>
