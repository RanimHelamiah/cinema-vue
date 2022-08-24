<template>
  <div id="app" >
   <div class="ma flex-auto overflow-auto h-screen bg-gray-200" id="body-scroll" >
      <ul class="nav" v-if="!loggedIn">
        <router-link to="/">
            <li v-if="!loggedIn">
              Home
            </li>
        </router-link>
        <router-link to="/login">
            <li v-if="!loggedIn">
              login
            </li>
        </router-link>
        <router-link to="/register">
            <li v-if="!loggedIn">
              register
            </li>
        </router-link>
      </ul>
      <router-view />
   </div>
  </div>
</template>

<script>
import Scrollbar from "smooth-scrollbar";
import { mapGetters } from 'vuex';
import login from "../Auth/login.vue";
import logout from "../Auth/logout.vue";
import LandingPage from "../Marketing/LandingPage.vue";
import Register from "../Auth/Register.vue";
import Button from "@/views/components/button.vue";

export default {
 
  computed:
    mapGetters('auth',["loggedIn"]),
  components:{
    login,
    logout,
    LandingPage,
    Register,
}
}

</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 24px;
    height: 100vh;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  .nav {
    display: flex;
    list-style: none;
    padding: 18px 18px;
    margin: 0;
    justify-content: flex-end;
    background: rgb(228, 225, 228);
    border-bottom: 2px solid rgb(45, 2, 56);
    margin-bottom: 24px;
  }
  .nav li {
    color:rgb(45, 2, 56);
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
  /* // Auth Pages */
  label {
    display: block;
    margin-bottom: 4px;
    color:#340b56;
  }
  .login-heading {
    margin-bottom: 16px;
  }
  .form-control {
    margin-bottom: 24px;
  }
  .mb-more {
    margin-bottom: 42px;
  }
  .login-form {
    max-width: 500px;
    margin: auto;
  }
  .register-form {
    max-width: 700px;
    margin: auto;
  }
  .login-input {
    width: 100%;
    font-size: 16px;
    padding: 12px 16px;
    outline: 0;
    border-radius: 3px;
    border: 1px solid #340b56;;
  }
   .btn-submit {
    width: 85%;
    margin-left:30px;
    margin-top:50px;
    margin-bottom:15px;
    padding: 14px 12px;
    font-size: 18px;
    font-weight: bold;
    background: #60BD4F;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  
  }
</style>