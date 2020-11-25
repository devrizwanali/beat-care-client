<template>
  <beat-rate-form :beatRate="form" title="Edit beat rate!" @onSubmit="Edit"/>
</template>
<script>
  import BeatRateForm from '@/components/BeatRateForm'
  export default {
    name: 'Edit',
    data() {
      return {
        form: {

        }
      }
    },
    components: {
      BeatRateForm
    },
    methods: {
      Edit(data) {
        alert(data)
      }
    }
  }
</script>
