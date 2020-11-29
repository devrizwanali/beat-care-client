<template>
  <b-container>
    <b-card class="text-center mt-5">
      <h2>Beat Rates</h2>
      <b-button variant="outline-info" pill class="mb-2" style="margin-left: -20px;" @click="create">Add <b-icon icon="plus-circle"></b-icon></b-button>
      <table class="table border" style="cursor:pointer;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Note</th>
            <th>Beat rate(BPM)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="beat in beatRates" :class="beat.beatRate > 60 ? '': 'danger'">
            <td>{{beat.createdAt}}</td>
            <td>{{beat.note}}</td>
            <td>{{beat.beatRate}}</td>
            <td class="d-flex justify-content-around">
              <b-icon icon="eye" v-b-tooltip.hover title="Details" @click="show(beat._id)"></b-icon>
              <b-icon icon="pencil-square" v-b-tooltip.hover title="Edit" @click="edit(beat._id)"></b-icon>
              <b-icon icon="trash" v-b-tooltip.hover title="Delete" @click="Delete(beat._id)"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['beatRates'])
  },
  mounted() {
    this.$store.dispatch('fetchBeatRates')
  },
  methods: {
    ...mapActions(['deleteBeatRate']),
    create() {
      this.$router.push({ name: 'Create' })
    },
    edit(id) {
      this.$router.push({ name: 'Edit', params: { id: id }})
    },
    show(id) {
      this.$router.push({ name: 'Details', params: { id: id }})
    },
    Delete(id) {
      this.deleteBeatRate(id).then(res => {
        alert('Successfully deleted!')
      })
      .catch(error => {
        alert('Something went wrong!')
      })
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
.danger {
  background-color: #ff000085;
}
</style>