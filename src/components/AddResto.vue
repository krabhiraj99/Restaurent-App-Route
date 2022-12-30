<template>
  <div>
    <NavBar />

    <div class="border border-2 border-dark my-2 mx-5">
      <h3 class="text-center text-success my-2">
        {{ updateResto ? "Update Restaurant Details" : "Add New Restaurant" }}
      </h3>
      <div class="my-2 row justify-content-center">
        <div class="m-2 col-sm-10 col-md-7">
          <b-form-input
            type="text"
            placeholder="Restaurant's Name"
            v-model="restoName"
            required
          />
        </div>
        <div class="my-2 col-sm-10 col-md-7">
          <b-form-input
            type="text"
            placeholder="Restaurant's Address"
            v-model="address"
            required
          />
        </div>
        <div class="my-2 col-sm-10 col-md-7">
          <b-form-input
            type="text"
            placeholder="Restaurant's Contact"
            v-model="contact"
            required
          />
        </div>
        <div class="w-100"></div>
        <b-button
          v-on="
            updateResto ? { click: updateCurrResto } : { click: addCurrResto }
          "
          class="my-2 col-3"
          variant="success"
          >{{ updateResto ? "Update Me" : "Add Me" }}</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  name: "AddRseto",
  data() {
    return {
      restoName: "",
      address: "",
      contact: "",
      updateResto: false,
    };
  },
  methods: {
    addCurrResto() {
      console.log("Adding resto");
      axios
        .post("http://localhost:3000/restaurents", {
          name: this.restoName,
          address: this.address,
          contact: this.contact,
        })
        .then((res) => {
          console.log("Successfully Added Restaurent", res.data);
          this.restoName = "";
          this.address = "";
          this.contact = "";
        });
    },
    updateCurrResto() {
      console.log("Updating resto");

      axios
        .put(`http://localhost:3000/restaurents/${this.$route.params.id}`, {
          name: this.restoName,
          address: this.address,
          contact: this.contact,
        })
        .then((res) => {
          console.log("After Updating Restaurant :", res.data);
          this.$router.push("/home");
        });
    },
  },

  mounted() {
    if (this.$route.params.id) {
      this.updateResto = true;
      axios
        .get(`http://localhost:3000/restaurents/${this.$route.params.id}`)
        .then((res) => {
          console.log(res);
          this.restoName = res.data.name;
          this.contact = res.data.contact;
          this.address = res.data.address;
        });
    }
    const user = localStorage.getItem("user-details");
    if (!user) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>
