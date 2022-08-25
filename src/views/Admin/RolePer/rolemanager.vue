<template>
  <AdminLayout >
    <div class="overflow-x-auto">
         <!-- {{this.$store.getters.loggedIn}}
        {{this.$store.state.auth.token}} -->
        <div class="min-w-screen min-h-screen bg-gray-100 flex m-4 justify-center bg-gray-100 
        dark:bg-purple-900 overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6" :key="role.id"
                        v-for="role in allroles">
                        
                              <menu-accordion class="w-full">
                                <template v-slot:icon>
                                <Icon class="dark:text-gray-100 mt-2" icon="bi:person" />
                                </template>
                                <template v-slot:title><p class="text-purple-800 dark:text-gray-100 "> {{role.name}}</p> </template>
                                <template v-slot:content>
                                <router-link
                                    to="/Movie/index"
                                    class="w-full text-left block rounded-md p-3 hover:bg-purple-200 dark:hover:bg-violet-500
                                text-purple-700 dark:text-gray-200">
                                    {{role.id}}
                                </router-link>
                                <router-link
                                    to="/component/"
                                    class="w-full text-left block rounded-md p-3 hover:bg-purple-200 dark:hover:bg-violet-500 text-purple-700 dark:text-gray-200"
                                >
                                   delete
                                </router-link>
                                
                                </template>
                            </menu-accordion>
                </div>
            </div>
        </div>
    </div>
 </AdminLayout>
</template>

<script>
  // @ is an alias to /src
  import AdminLayout from '@/Layouts/AdminLayout'
  import { Icon } from "@iconify/vue";

  import { mapGetters,mapActions } from 'vuex'
  import MenuAccordion from '@/components/MenuAccordion.vue';
  export default {
    name: "rolemanager",
    data() {
      return {
        isOpen: false,
      };
    },
    components: {
    AdminLayout,
    MenuAccordion,
    Icon
   },
   methods: {
     
    },

   methods:{
    ...mapActions('role', {index: "index"}),
     toggleAccordion() {
        this.isOpen = !this.isOpen;
      },
   },
   computed:mapGetters('role', {allroles: "allroles"}),
   created() {
      this.index()
   }
}
  
  </script>