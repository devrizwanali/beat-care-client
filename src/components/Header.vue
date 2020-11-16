<template>
  <div>
  <b-navbar toggleable="lg"  class="navbar-horizontal header">
    <b-navbar-brand href="#">BeatCare</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span class="nav-link ">Discover</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span class="nav-link ">Profile</span>
                </a>
            </li>
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <span class="">Settings</span>
              </template>
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
<style>
.header {
  background-color: #3c4d69;
}
.nav-link {
  color: #ccc !important;
}
</style>
