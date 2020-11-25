<template>
  <b-container>
    <b-card class="text-center mt-5">
      <h2>Beat Rates</h2>
      <b-button variant="outline-info" pill class="mb-2" style="margin-left: -20px;" @click="create">Add <b-icon icon="plus-circle"></b-icon></b-button>
      <table class="table border" style="cursor:pointer;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Beat rate</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td class="d-flex justify-content-around">
              <b-icon icon="eye" v-b-tooltip.hover title="Details" @click="show"></b-icon>
              <b-icon icon="pencil-square" v-b-tooltip.hover title="Edit" @click="edit"></b-icon>
              <b-icon icon="trash" v-b-tooltip.hover title="Delete"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    create() {
      this.$router.push({ name: 'Create' })
    },
    edit() {
      this.$router.push({ name: 'Edit' })
    },
    show() {
      this.$router.push({ name: 'Details'})
    }
  }
};
</script>
<style>
.table thead {
  background: #3c4d69 !important;
  color: white;
}
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