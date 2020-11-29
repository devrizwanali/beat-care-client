<template>
  <b-card class="mt-5 card-center">
    <h1 class="text-center">{{title}}</h1>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="Your Beat rate:"
        label-for="beat-rate"
      >
        <b-form-input
          id="beat-rate"
          v-model="beatRate.beatRate"
          type="number"
          required
          placeholder="112 BPM"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Your Note:"
        label-for="note">
        <b-form-input
          id="note"
          v-model="beatRate.note"
          required
          type="text"
          placeholder="walking..."
        ></b-form-input>
      </b-form-group>

      <b-form-group class="d-flex justify-content-center">
        <b-button 
          type="submit"
          pill
          variant="outline-info"
        >Submit</b-button>
        <b-button 
          pill
          variant="outline-info"
          @click="cancel"
        >Cancel</b-button>
      </b-form-group>
    </b-form>
  </b-card>
</template>
<script>
  export default {
    name: 'BeatRateForm', 
    props: {
      beatRate: {
        type: Object,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      cancel() {
        this.$router.push('/dashboard')
      },
      onSubmit() {
        this.$emit('onSubmit', this.beatRate)
      }
    }
  }
</script>
