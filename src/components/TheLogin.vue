<template>
  <div class="login">
    <h1 class="text-center">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-input-group-append class="mt-4 align-items-center">
        <b-icon
          icon="envelope"
          aria-hidden="true"
          class="position-absolute ml-3"
        ></b-icon>
        <b-form-input
          class="pl-5"
          id="input-1"
          v-model="user.email"
          type="email"
          required
          placeholder="Enter email"
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
          v-model="user.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-input-group-append>
      <div class="mt-4 text-center">
        <b-button type="submit" variant="primary">Login</b-button>
        <b-button @click="Register" variant="danger">Sign up</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(['login']),
    onLogin() {
      this.login(this.user)
      .then(res => {
        this.$router.push('/dashboard')
      })
      .catch(error => {
        alert(error.response.data.message)
      })
    },
    Register(evt) {
      this.$router.push('/sign-up');
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
