<template>
    <div class="carousel ">
        <slot></slot>

        
         <button @click="next" class="next" >
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" 
            class="bi bi-chevron-right" 
            viewBox="0 0 16 16"> 
            <path fill-rule="evenodd" 
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0
             .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646
              2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
         </button>

         <button @click="prev"  class="prev" >
            <svg 
            xmlns="http://www.w3.org/2000/svg"  
            fill="currentColor" class="bi bi-chevron-left" 
            viewBox="0 0 16 16"> 
            <path fill-rule="evenodd" 
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 
            5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 
            0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
         </button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods : {
        next(){
            this.$emit('next')
        },
        prev(){
            this.$emit('prev')

        },
    }
}
</script>

<style>
.next{
        position: absolute;
        width:50px;
        height:40px;
        top: calc(50% - 20px);
        border: none;
        right:0;
        outline: none;
        cursor: pointer;
        color: aliceblue;
    }
    .prev{
        position: absolute;
        width:50px;
        height:40px;
        top: calc(50% - 20px);
        border: none;
        left:0;
        outline: none;
        cursor: pointer;
        color: aliceblue;

    }
    
  .car{
    width:100%;
    height:500px;
     position: relative;
     overflow: hidden;
 }

</style>