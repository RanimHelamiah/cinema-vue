<template>
  <AdminLayout>
    <div class="overflow-x-auto ">
        <div class="flex justify-end bg-gray-100 dark:bg-purple-900 m-4 lg:flex  md:flex ">
            <router-link to="/Movie/create">
                <button name="new"  class="bg-purple-200 dark:bg-violet-900 m-4 mr-8 text-3xl text-purple-900 dark:text-purple-200  
                  font-semibold p-3 border-2 border-purple-900 dark:border-purple-200 rounded-lg 
                  hover:text-purple-400 outline-none exact ">Add New Movie</button>
            </router-link>
        </div>
        <div class="overflow-x-auto min-w-screen min-h-screen bg-gray-100 flex m-4 justify-center bg-gray-100 
          dark:bg-purple-900 overflow-hidden lg:flex  md:flex ">
        
            <div class="w-full lg:w-5/6">
                <div class="bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto rounded-lg ">
                        <thead>
                            <tr class="bg-violet-900 dark:bg-violet-300  uppercase text-md leading-normal text-purple-200 dark:text-purple-900">
                                <th class="py-3 px-6 text-left">Name</th>
                                <th class="py-3 px-6 text-left">Type</th>
                                <th class="py-3 px-6 text-center">Genre</th>
                                <th class="py-3 px-6 text-center">Hall</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                       <tbody class="text-purple-900 dark:text-gray-200 text-md font-light" 
                          :key="movie.id" v-for="movie in allmovies" >
                          <!-- // v-for="(post, index) in posts" :key="index"> -->
                            <tr class="border-b border-gray-200 hover:bg-purple-500">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="mr-2" >
                                          {{movie.name}}
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <div class="mr-2">
                                           {{movie.type}}
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center" v-for="genre in allmovies.genres" :key="genre.id">
			   	                        <div class="mr-2"  >
                                           {{genre.name}}
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                        {{movie.hall.name}}
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <div class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-6 mr-2 transform hover:text-purple-300 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
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
  export default {
    name: "movieindex",
    components: {
    AdminLayout,
},

   methods:{
    ...mapActions('movie',['index','loadgenres']),
    loadgenres() {
    this.genres = true;
    axios.get("api/genre")
    .then(({ data }) => {
      this.genres = data;
      this.loading = false;
    })
    .catch((error) => {
      console.log(error);
    });
    }, 

   },
    created() {
        this.index()

    },
    
    computed:mapGetters('movie', {allmovies: "allmovies"}),
   
    
}
  </script>