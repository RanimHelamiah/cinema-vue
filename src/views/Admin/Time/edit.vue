<template>
    <admin-layout>
        <form @submit.prevent="timeupdate(edittime)" class=" m-16 ml-48">
            <div v-if="successMessage" class="success-message text-purple-900 dark:text-gray-100">{{ successMessage }}</div>
            <input type="time"
             style="width:250px;border-radius:6px;
             border-width:2px;border-color:#340b56;"     
             v-model="edittime.starttime"  name="starttime" >
            <input type="time"
             style="width:250px;border-radius:6px;
             border-width:2px;border-color:#340b56; margin-left:10px;"
             v-model="edittime.endtime" name="endtime">
            <button type="submit" class="text-white bg-violet-400 hover:bg-violet-200"
            style="width:250px;height:40px; color:#340b56;border-radius:6px;
            border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
            padding-right:4px; margin-left:20px;">Update</button>
            
        </form>
        <div class="flex justify-center "> 
          <router-link :to="{ name: 'timeindex'}">
            <button class="text-white bg-violet-400 hover:bg-violet-200"
             style="width:250px;height:40px; color:#340b56;border-radius:6px;
             border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
             padding-right:4px; margin-left:20px;">Cancel</button>
          </router-link>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from '@/Layouts/AdminLayout';
import { mapActions ,mapGetters} from 'vuex';
import { time } from '@/store/modules/time';

export default {
    name: "edittime",
    props: ['timeid'],
  //   props: {
  //   time:Object
  // },
    components:{ AdminLayout },
    
    data() {
        return {

           // time:this.edittime,
            successMessage:""
        }
    },
    methods:{
        ...mapActions('time',['update','edit']),
        timeupdate(edittime) {
        this.update(edittime);
        
      //  this.$router.push({ name: 'indextime' })
        
        

      },
     
    }, 
    created() {
        this.edit(this.timeid)


     },
    
    computed:mapGetters('time', {edittime: "edittime"}),   
}


</script>