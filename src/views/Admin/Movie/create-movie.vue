<template>
  <AdminLayout>
     <!-- This is an example component -->
    <div class="max-w-6xl h-screen mx-auto m-4 ">

        <form @submit.prevent="add" class="mb-2 mt-4" enctype="multipart/form-data">
            <div class="relative z-0 mb-6 w-full group">
                <label for="name" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                <input type="text" name="name" class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <label for="description" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                <textarea  name="description" id="description"  style="height:100px;width:100%;"
                  class="block  py-2.5 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" required ></textarea>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <label for="video" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Trailer</label>
                    <input type="text" name="video" value="https://www.youtube.com/embed/" 
                    class="block py-2.5 mt-8 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                </div>
                <div class="relative z-0 mb-6 mt-7 w-full group">
                    <label for="image" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                    <input type="file" name="image" id="image" class="block py-2.5 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" placeholder=" " required />
                </div>             
                <div class="relative z-0 mb-6 w-full group">
		          <select name="hall_id" id="hall_id"
                   class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                   dark:bg-purple-900 bg-transparent
                   border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                   dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                   focus:ring-0 focus:border-violet-600 peer" placeholder=" " required >
		         	<option value selected disabled>Select Hall</option>
                    <option   v-for="hall in halls" :key="hall.id" value="{{hall.id}}">
                       {{ hall.name}}
                    </option>
                 </select>
		        </div>
                <div class="relative z-0 mb-6 w-full group">
		          <select name="type" id="type"
                   class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                   dark:bg-purple-900 bg-transparent
                   border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                   dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                   focus:ring-0 focus:border-violet-600 peer" placeholder=" " required >
		         	<option value selected disabled>Select Type</option>
                    <option   value="{{2D}}">
                       2D
                    </option>
                    <option   value="{{3D}}">
                       3D
                    </option>
                 </select>
		        </div>
                    
                <div class="relative z-0 mb-6 w-full group">
		          <select name="showing_type" id="showing_type"
                   class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                   dark:bg-purple-900 bg-transparent
                   border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                   dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                   focus:ring-0 focus:border-violet-600 peer" placeholder=" " required >
		         	<option value selected disabled>Select showing_type</option>
                    <option>
                       Now Showing
                    </option>
                    <option>
                       Up Coming
                    </option>
                 </select>
		        </div>
                <div class="relative z-0 mb-6 w-full group">
		          <select name="genre" id="genre"
                   class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                   dark:bg-purple-900 bg-transparent
                   border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                   dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                   focus:ring-0 focus:border-violet-600 peer"  required >
		         	<option value selected disabled>Select Genre</option>
                    <option   v-for="genre in genres" :key="genre.id" value="{{genre.id}}">
                       {{ genre.name}}
                    </option>
                 </select>
		        </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <label for="from" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">From..</label>
                    <input type="date"  name="from" id="from" class="block py-2.5 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"  required />
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <label for="to" class="absolute text-md text-purple-500 dark:text-purple-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">To..</label>
                    <input type="date"  name="to" id="to" class="block py-2.5 px-0 w-full text-md text-purple-900 bg-transparent border-0 border-b-2 border-purple-300 appearance-none dark:text-white dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer"  required />
                </div>
                <div class="relative z-0 mb-6 w-full group">
		          <select name="starttime" id="starttime"
                   class="block py-2.5 px-0 w-full text-md text-purple-900 dark:text-purple-200 
                   dark:bg-purple-900 bg-transparent
                   border-0 border-b-2 border-purple-300 appearance-none dark:text-white 
                   dark:border-purple-600 dark:focus:border-violet-500 focus:outline-none
                   focus:ring-0 focus:border-violet-600 peer"  required >
		         	<option value selected disabled>Select Starttime</option>
                    <option   v-for="time in times" :key="time.id" value="{{time.id}}">
                       {{ time.starttime}}
                    </option>
                 </select>
		        </div> 
                <div class="flex justify-end ">
                 <button type="submit" class="mt-8 mr-8 text-white bg-violet-700 hover:bg-violet-800 
                  focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-md  sm:w-auto  
                  text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                  style="width:350px; height:60px;">Create</button>
                </div>

            </div>
           
        </form>

    
    </div>

  </AdminLayout>
   
</template>

<script>
import { mapActions , mapGetters} from 'vuex';
import AdminLayout from '@/Layouts/AdminLayout.vue';
export default {
    name: "createmovie",
    components:{
        AdminLayout,
    },
    data() {
        return {
            
        }
    },
    methods:{
        ...mapActions('time',['store']),
    //     add(){
    //         if (this.starttime.trim().length == 0 || this.endtime.trim().length == 0) {
    //             return
    //         }
    //         const time = {
    //             'starttime': this.starttime,
    //             'endtime': this.endtime,
    //         }
    //         this.store(time)
    //         this.starttime=""
    //         this.endtime=""
    //         this.successMessage = 'Time Created Successfully!'
    //     }
    // 
    }
}
</script>