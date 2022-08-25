<template>
  <AdminLayout>
    <div class="overflow-x-auto" >
        <div class="flex m-4 justify-center">
           <createhall />
        </div>
        <div class="min-w-screen min-h-3/4  flex m-4 justify-center bg-gray-100 
        dark:bg-purple-900 overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-gray-100   dark:bg-purple-900  rounded my-6">
                    <table class="ml-20 min-w-max w-2/3 table-auto rounded-lg bg-purple-300 shadow-md dark:bg-purple-800" >
                        <thead>
                            <tr class="bg-violet-900 dark:bg-violet-300  uppercase text-md leading-normal text-purple-200 dark:text-purple-900">
                                <th class="py-3 px-6 text-center">ID</th>
                                <th class="py-3 px-6 text-center">Name</th>
                            </tr>
                        </thead>
                        <tbody class="text-purple-900 dark:text-gray-200 text-md " 
                          :key="hall.id" v-for="hall in allhalls" >
                          <!-- // v-for="(post, index) in posts" :key="index"> -->
                            <tr class="border-b border-gray-200 hover:bg-purple-500">
                                <td class="py-3 px-6 text-center whitespace-nowrap">
                                        <div class="mr-2" >
                                          {{hall.id}}
                                        </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                        <div class="mr-2">
                                           {{hall.name}}
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
  import createhall from './create-hall.vue'
  export default {
    name: "hallindex",
    components: {
    AdminLayout,
    createhall
},

   methods:{
    ...mapActions('hall',['index']),
   },
    created() {
        this.index()

    },
    
    computed:mapGetters('hall', {allhalls: "allhalls"}),
   
    
}
  </script>