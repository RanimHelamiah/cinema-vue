<template>
   <div class="text-center mt-10">
         <div class="flex items-center justify-center">
            <svg fill="none" viewBox="0 0 24 24" class="w-12 h-12 text-purple-700" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
         </div>
         <h2 class="text-4xl tracking-tight">
            Sign in into your account
         </h2>
         <span class="text-sm">or <a href="/register" class="text-purple-700"> 
            register a new account
         </a>
      </span>
   </div>
   <div class="flex justify-center my-2 mx-4 md:mx-0">
      <form class="login-form w-full max-w-xl bg-gray-300 rounded-lg  border border-2 
         border-purple-900 shadow-md p-6"  @submit.prevent="login">
         <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-full px-3 mb-6">
               <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email address</label>
               <input class="login-input appearance-none block w-full bg-white text-gray-900 font-medium 
               border border-2 border-purple-900 rounded-lg py-3 px-3 leading-tight focus:outline-none"
               placeholder="Email" v-model="email"
               type='email'  required>
            </div>
            <div class="w-full md:w-full px-3 mb-6">
               <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
               <input class="login-input appearance-none block w-full bg-white text-gray-900 font-medium 
               border border-2 border-purple-900 rounded-lg py-3 px-3 leading-tight focus:outline-none"
               placeholder="Password" v-model="password"
               type='password'  required>
            </div>
            <div class="w-full flex items-center justify-between px-3 mb-3 ">
               <label for="remember" class="flex items-center w-1/2">
                  <input type="checkbox" name="" id="" class="mr-1 bg-white shadow">
                  <span class="text-sm text-gray-700 pt-1">Remember Me</span>
               </label>
               <div class="w-1/2 text-right">
                  <a href="#" class="text-purple-700 text-sm tracking-tight">Forget your password?</a>
               </div>
            </div>
            <div class="form-control w-full md:w-fullml-20 mr-20">
               <button class="btn-submit appearance-none block w-full bg-purple-900 text-xl  text-gray-100 font-bold border border-2 border-purple-900
               rounded-lg py-3 px-3 leading-tight hover:bg-purple-500 focus:outline-none focus:bg-white focus:border-purple-300 hover:bg-purple-300">
               Login</button>
            </div>
         </div>
      </form>
   </div>
</template>

<script>
import {useStore} from 'vuex';
import { mapActions,mapGetters } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed:mapGetters('auth', ["loggedIn"]),


  methods: {
    
    ...mapActions('auth',['retrieveToken']),
  
    login() {
        const user={email: this.email,password: this.password,}
        this.retrieveToken(user)
          .then(response => {
            //console.log(response);
            this.$router.push({ name: 'Dashboard'})
          })
          .catch(error => {
             this.serverErrors = Object.values(error.response.data.errors)
             this.password = ''
            //this.successMessage = ''
          })
      }
    }
  }
</script>
