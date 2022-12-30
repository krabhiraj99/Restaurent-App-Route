<template>
    <div>
        <div>
  <b-navbar  type="dark" variant="dark">
    <b-navbar-brand  class="mx-2" href="#">NavBar</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item @click="pushToHome">Home</b-nav-item>
        <b-nav-item @click="pushToAdd">Add Restaurant</b-nav-item>
        <b-nav-item @click="logoutUser">Logout</b-nav-item>
    </b-navbar-nav>   
  </b-navbar>
</div>
    </div>
</template>

<script>
    export default{
        name: "NavBar",
        methods:{
            logoutUser(){
                localStorage.clear();
                this.$router.replace("/login");
            },
            pushToHome(){
                this.$router.replace("/home");
            },
            pushToAdd(){
                this.$router.replace("/add");
            },
            pushToUpdate(){
                this.$router.replace("/update");
            }

        }
    }
</script>