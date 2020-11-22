<template>
  <div class="footer">
    <b-container fluid>
      <p class="mt-2 heading">&copy; 2020 Copyright BeatCare</p>
    </b-container>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
  }
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  cursor: pointer;
  height: 50px;
  background: #3c4d69;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-align: center;
}
</style>
