<template>
  <AdminLayout>
    <div class="overflow-x-auto" >
        <div class="flex m-4 justify-center">
           <createtime />
        </div>
        <div class="min-w-screen min-h-screen bg-gray-100 flex m-4 justify-center bg-gray-100 
        dark:bg-purple-900 overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto rounded-lg" >
                        <thead>
                            <tr class="bg-violet-900 dark:bg-violet-300  uppercase text-md leading-normal text-purple-200 dark:text-purple-900">
                                <th class="py-3 px-6 text-left">ID</th>
                                <th class="py-3 px-6 text-left">start time</th>
                                <th class="py-3 px-6 text-center">end time</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-purple-900 dark:text-gray-200 text-md font-light" 
                          :key="time.id" v-for="time in alltimes" >
                          <!-- // v-for="(post, index) in posts" :key="index"> -->
                            <tr class="border-b border-gray-200 hover:bg-purple-500">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2" >
                                          {{time.id}}
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                           {{time.starttime}}
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                        {{time.endtime}}
                                    </div>
                                </td>
                               
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <router-link :to="{ name: 'timeedit', params:{timeid: time.id}}">
                                         <button  class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110" >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                         </button>
                                        </router-link>
                                        <button :key="time.id"
                                            v-if="time.active==1"
                                            @click="deactivated(time)"  class="text-xs text-white bg-sky-600 rounded-full w-6 mr-2 transform
                                             hover:text-purple-300 hover:scale-110">
                                             A
                                             
                                        </button>
                                         <button 
                                            v-else-if="time.active==0"
                                            @click="activated(time)"  class="text-xs text-white bg-orange-600 rounded-full w-6 mr-2 transform
                                             hover:text-purple-300 hover:scale-110">
                                             DA
                                        </button>
                                       
                                               
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
 </AdminLayout>
</template>

<script>
  // @ is an alias to /src
  import AdminLayout from '@/Layouts/AdminLayout'
  import { mapGetters,mapActions } from 'vuex'
  import createtime from "@/views/Admin/Time/create.vue"
  export default {
    name: "timeindex",
    components: {
    createtime,
    AdminLayout,
},

   methods:{
    ...mapActions('time',['index','deactivate','activate']),
    deactivated(time){
        //console.log(id)
      this.deactivate(time)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)

        })
    },
    activated(time){
        //console.log(time)
      this.activate(time)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)

        })
    },
    
   },
    created() {
        this.index()

    },
    
    computed:mapGetters('time', {alltimes: "alltimes"}),
   
    
}
  </script>