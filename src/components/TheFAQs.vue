<template>
  <div class="center mt-4 bg-white">
    <h4 class="text-center mb-2" style="cursor: pointer;">Frequently asked questions</h4>
     <div class="cursor-pointer">
       <h6>1.Does the app need a user account registration?</h6>
       <p>Yes, user needs to have an account to use this app.</p>
       <h6>2- Does the application work effectively?</h6>
       <p>The application records the heartbeat of a patient, determines the level of pressure of a patient who acts on that knowledge to seek for medication</p>
       <h6>3- Does the application consider user confidentiality?</h6>
       <p>Yes</p>
       <h6>4- Is the application user friendly?</h6>
       <p>Yes</p>
       <h6>5- Does the app show highlights of beat rate in case it detects abnormal heart beat? </h6>
        <p>Yes</p>
        <h6>6- Does the beat recorder change its color to indicate danger when the heart rate goes below 60?</h6>
        <p>Yes</p>
      </div>
  </div>
</template>
<script>
  export default {
    name: "TheFAQs"
  }
</script>
<style>
  p {
    margin-left: 20px;
    cursor: pointer;
  }
  .center {
    transition: box-shadow .3s;
    border-radius:10px;
    width: 50%;
    padding: 20px;
    margin: 30px; 
    border: 2px solid #3c4d69; 
  }
  a {
    text-decoration: none !important;
    color: rgb(33, 37, 41) !important;
  }
  a:hover {
    font-weight: bold;
  }
</style>
