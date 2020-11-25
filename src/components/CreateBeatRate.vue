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
<style>
button {
  color: #3c4d69 !important;
  border-color: #3c4d69 !important;
}
button:hover {
  color: white !important;
  background: #3c4d69 !important;
  font-weight: bold;
}
</style>