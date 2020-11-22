<template>
  <div class="mt-4" style="text-align: center;">
    <b-card style="width: 50%; padding: 20px;margin: 30px;">
      <b-card-text>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      
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
<style>
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

</style>