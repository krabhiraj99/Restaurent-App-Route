<template>
  <div>
    <NavBar />
    <div class="mx-2">
      <h4 class="text-center my-2">Hello {{ name }}, Welcome To Home Page</h4>
      <b-table striped hover :fields="fields" :items="restaurents">
        <template #cell(edit)="row">
          <div class="curtor">
            <b-icon
              @click="editCurrResto(row)"
              icon="pencil-square"
              aria-hidden="true"
            ></b-icon>
          </div>
        </template>
        <template #cell(delete)="row">
          <div class="curtor">
            <b-icon
              @click="deleteCurrResto(row)"
              icon="trash"
              aria-hidden="true"
            ></b-icon>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./NavBar.vue";

export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurents: [],
      fields: ["name", "address", "contact", "edit", "delete"],
    };
  },

  methods: {
    editCurrResto(row) {
      this.$router.push(`/update/${row.item.id}`);
    },
    deleteCurrResto(row) {
      axios
        .delete(`http://localhost:3000/restaurents/${row.item.id}`)
        .then((res) => {
          console.log("Response after deletion", res);
          this.fetchData();
        });
    },
    fetchData() {
      axios.get("http://localhost:3000/restaurents").then((res) => {
        this.restaurents = res.data;
      });
    },
  },
  mounted() {
    const user = localStorage.getItem("user-details");
    if (user) {
      this.name = JSON.parse(user).username;
    }
    if (!user) {
      this.$router.push({ name: "login" });
    }
    this.fetchData();
  },
  components: { NavBar },
};
</script>

<style scoped>
.curtor {
  cursor: pointer;
  padding: 2px;
}
</style>
