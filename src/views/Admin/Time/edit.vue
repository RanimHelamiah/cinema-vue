<template>
    <admin-layout>
        <form @submit.prevent="edit" class=" m-16 ml-48" :time="time">
            <div v-if="successMessage" class="success-message text-purple-900 dark:text-gray-100">{{ successMessage }}</div>
            <input type="time"
             style="width:250px;border-radius:6px;
             border-width:2px;border-color:#340b56;"     
             v-model="this.starttime"  name="starttime" ref="{{starttime}}">
            <input type="time"
             style="width:250px;border-radius:6px;
             border-width:2px;border-color:#340b56; margin-left:10px;"
             v-model="this.endtime" name="endtime" ref="{{endtime}}">
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

export default {
    name: "edittime",
    props: ["time"],
    components:{ AdminLayout },
    
    data() {
        return {

            starttime:this.starttime,
            endtime:this.endtime,
            successMessage:""
        }
    },
    methods:{
        ...mapActions('time',['update']),
        edit() {
             console.log( this.starttime)

             let starttime = time.starttime
             let endtime = time.endtime
            
        if (this.starttime.trim().length == 0 || this.endtime.trim().length == 0) {
          return
        }
        const time = {
            id: this.id,
            starttime: this.starttime,
            endtime: this.endtime,
            successMessage :'Time Updated Successfully!',
        };
        this.update(time);
      },
    },    
}


</script>