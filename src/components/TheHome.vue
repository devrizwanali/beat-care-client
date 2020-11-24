<template>
  <div class="mt-4" style="text-align: center; cursor: pointer;">
    <b-card  calss="card" style="">
      <b-card-text class="text-justify">
      Heart rate or heartbeat is an important measure in health and fitness. BeatCare is developed to monitor one’s heart movements. The only thing needed is the monitoring of one’s pulse rates through an electrocardiogram device that is attached to the region around the heart. The application is able to record the users pulse rates and thereof the user is able to record notes. The user can record his heartbeat while at rest, while walking/exercising, and before receiving medication.
      </b-card-text>
      <b-button class="create-account" @click="createAccount">Create account</b-button>
    </b-card>
  </div>
</template>
<script>
  export default {
    name: "Home",
    methods: {
      createAccount() {
        this.$router.push('/sign-up');
      }
    }
  }
</script>
<style scoped>
.create-account{
  float: right;
  color: #ccc;
  font-weight: bold;
  background: #3c4d69;
}
.create-account:hover {
  background: #3c4d69;
  color: white;
}
.card {
  transition: box-shadow .3s;
  border-radius:10px;
  width: 50%;
  padding: 20px;
  margin: 30px; 
  border: 2px solid #3c4d69; 
}
.card:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
</style>
