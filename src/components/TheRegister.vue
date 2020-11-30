<template>
  <div class="login">
    <h1 class="text-center">Sign up</h1>
    <b-form @submit.prevent="onSignUp">
      <b-input-group-append class="mt-4">
        <b-form-input
          v-model="user.firstName"
          type="text"
          required
          placeholder="First name"
          class="mr-2"
          >
        </b-form-input>
         <b-form-input
          v-model="user.lastName"
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
          id="email"
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
          id="password"
          v-model="user.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-input-group-append>
      <div class="mt-4 text-center">
        <b-button
          type="submit"
          variant="outline-info"
          pill
        >Sign up</b-button>
        <b-button 
          @click="login"
          variant="outline-info"
          pill
        >Login</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      user: {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      }
    };
  },
  methods: {
    ...mapActions(['register']),
    onSignUp(evt) {
      this.register(this.user)
       .then(res => {
          this.$router.push('/dashboard')
       })
       .catch(error => {
          alert(error.response.data.message)
       })
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
