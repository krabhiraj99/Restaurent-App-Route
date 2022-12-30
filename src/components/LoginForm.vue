<template>
  <div class="border border-2 border-dark my-2 mx-5">
    <h3 class="text-center m-2">Log in to Continue</h3>
    <div class="my-2 row justify-content-center">
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
      <b-button @click="signInUser" class="my-2 col-2" variant="success"
        >Log in</b-button
      >
      <p class="text-center">New to restaurent?  <router-link to="/">Sign Up</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LoginForm",
  data(){
    return{
        email:"",
        password:"",
    }
  },
  methods: {
    signInUser(){
        axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
        .then((res) => {
            console.log("Logging in this user", res);
            if(res.data.length){
                localStorage.setItem("user-details",JSON.stringify(res.data[0]));
                this.$router.push("/home");
            }
        })
    }
  },
  mounted(){
        const user = localStorage.getItem("user-details");
        if(user){
            this.$router.push({name:"home"});
        }
    },

};
</script>