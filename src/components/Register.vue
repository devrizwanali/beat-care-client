<template>
  <div class="login">
    <h1 class="text-center">Sign up</h1>
    <b-form @submit="onSubmit">
      <b-input-group-append class="mt-4">
        <b-form-input
          v-model="form.firstName"
          type="text"
          required
          placeholder="First name"
          class="mr-2"
          >
        </b-form-input>
         <b-form-input
          v-model="form.lastName"
          type="text"
          required
          placeholder="Last name"
          >
        </b-form-input>
      </b-input-group-append>


      <b-input-group-append class="mt-4 align-items-center">
        <b-icon
          icon="envelope"
          aria-hidden="true"
          class="position-absolute ml-3"
        ></b-icon>
        <b-form-input
          class="pl-5"
          id="input-1"
          v-model="form.email"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-input-group-append>

      <b-input-group-append class="mt-4 align-items-center">
        <b-icon
          icon="lock-fill"
          aria-hidden="true"
          class="position-absolute ml-3"
        ></b-icon>
        <b-form-input
          class="pl-5"
          id="input-1"
          v-model="form.email"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-input-group-append>
      <div class="mt-4 text-center">
        <b-button type="submit" variant="primary">Sign up</b-button>
        <b-button @click="login" variant="danger">Login</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      form: {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
    login() {
     this.$router.push({name: "Login"})
    }
  }
};
</script>
<style>
.login {
  background: white;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  margin: auto;
  width: 50%;
  padding: 40px;
  margin-top: 70px;
}
</style>
