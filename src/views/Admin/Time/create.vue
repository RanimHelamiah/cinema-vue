<template>
     <form @submit.prevent="add" class="mb-2 mt-4">
        <div v-if="successMessage" class="success-message text-purple-900">{{ successMessage }}</div>
        <input type="time"  placeholder="write the starttime"  
          style="width:250px;border-radius:6px;
		  border-width:2px;border-color:#340b56;"     
          v-model="starttime" >
        <input type="time"  placeholder="write the endtime"
          style="width:250px;border-radius:6px;
		  border-width:2px;border-color:#340b56; margin-left:10px;"
          v-model="endtime">
        <button type="submit" class="text-white bg-violet-400 hover:bg-violet-200"
         style="width:250px;height:40px; color:#340b56;border-radius:6px;
          border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
          padding-right:4px; margin-left:20px;">Create</button>
     </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "createtime",
    data() {
        return {
            starttime:"",
            endtime:"",
            successMessage:""
        }
    },
    methods:{
        ...mapActions('time',['store']),
        add(){
            if (this.starttime.trim().length == 0 || this.endtime.trim().length == 0) {
                return
            }
            const project = {
                'starttime': this.starttime,
                'endtime': this.endtime,
            }
            this.store(project)
            this.starttime=""
            this.endtime=""
            this.successMessage = 'Time Created Successfully!'
        }
    }
}
</script>