<template>
     <form @submit.prevent="add" class="mb-2 mt-4">
        <div v-if="successMessage" class="success-message text-purple-900 darek:text-gray-100">{{ successMessage }}</div>
        <input type="name"  placeholder="Hall name"  
          style="width:250px;border-radius:6px;
		  border-width:2px;border-color:#340b56;padding-left:20px;"     
          v-model="name" name="name" >
        <button type="submit" class="text-white bg-violet-400 hover:bg-violet-200"
         style="width:250px;height:40px; color:#340b56;border-radius:6px;
          border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
          padding-right:4px; margin-left:20px;">Create</button>
     </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "createhall",
    data() {
        return {
            starthall:"",
            endhall:"",
            successMessage:""
        }
    },
    methods:{
        ...mapActions('hall',['store']),
        add(){
            if (this.name.trim().length == 0 ) {
                return
            }
            const hall = {
                'name': this.name,
            }
            this.store(hall)
            this.name=""
            this.successMessage = 'hall Created Successfully!'
        }
    }
}
</script>