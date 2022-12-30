<template>
  <div class="border border-2 border-dark  my-2 mx-5">
    <h3 class="text-center  my-2">Sign Up to Continue</h3>
    <div class="my-2 row justify-content-center">
      <div class="m-2 col-sm-10 col-md-7">
        <b-form-input
          type="text"
          placeholder="Username"
          v-model="username"
          required
        />
      </div>
      <div class="my-2 col-sm-10 col-md-7">
        <b-form-input
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />
      </div>
      <div class="my-2 col-sm-10 col-md-7">
        <b-form-input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>
      <div class="w-100"></div>
      <b-button @click="signUpUser" class="my-2 col-2" variant="success"
        >Sign Up</b-button
      >
      <p class="text-center">Already registered?  <router-link to="/login">Log in</router-link></p>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SignupForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signUpUser() {
      axios.post("http://localhost:3000/users", {
        username: this.username,
        email: this.email,
        password: this.password,
      }).then((res) => {
        console.log("user posted", res.data);
        localStorage.setItem("user-details", JSON.stringify(res.data));
        this.$router.replace({path: "/home"})
      });
    },
  },

  mounted(){
        const user = localStorage.getItem("user-details");
        if(user){
            this.$router.push({name:"home"});
        }
    },
};
</script>
