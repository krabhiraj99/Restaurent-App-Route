import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import HomePage from "../../components/HomePage.vue";
import SignupForm from "../../components/SignupForm.vue";
import LoginForm from "../../components/LoginForm.vue";
import AddResto from "../../components/AddResto.vue";

const routes = [
    {
        name:"home",
        path:"/home",
        component:HomePage,
    },
    {
        name:"login",
        path:"/login",
        component:LoginForm,
    },
    {
        name:"signup",
        path:'/signup',
        component:SignupForm,
    },
    {
        name:"Add",
        path:'/add',
        component:AddResto,
    },
    {
        name:"Update",
        path:'/update/:id',
        component:AddResto,
    },
    {
        path:"/",
        redirect:"/signup"

    }

]

const router = new VueRouter({
    routes,
    mode: "history",
})

export default router;