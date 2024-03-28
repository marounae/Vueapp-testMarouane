<template>
      <nav  class="flex  gap-3 text-black py-6 top-0 mb-4 shadow-lg" :class="{dark: checking}">
            <!-- logo -->
            <div class="flex place-items-center gap-6">
                  <i><img src="../assets/logo.svg" alt="" class="logo"></i>
                  <p class=" title1">Beard</p>
            </div>
            <!-- dark mode -->
            <div class="flex gap-3  justify-end flex-1 ml-3  mr-6 ">
                  <label class="relative inline-flex items-center cursor-pointer">
                        <input class="sr-only peer" value="" type="checkbox" v-model="checking" @click="checkdark"/>
                        <div
                          class="w-20 h-11 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                        ></div>
                  </label>                                                          
            </div>
            
      </nav>
</template>

<script>
import { watch } from 'vue'
export default {
name:"Navbar",
data(){
      return{
            checking:false,
            check:''
      }
},
methods:{
      checkdark(){
            if(this.checking){
                  this.check = ''
            }
            else{
                  this.check = 'darkmode'                  

            }
      }
},
watch:{
      checking(newValue,oldValue){
            this.$emit('dark',this.check)
      }

}

}
</script>

<style>
.logo{
      width: 42px;
      height: 42px;
      border: solid 1.8px #fff;
      border-radius: 9px;    
}
   .title1{
      font-weight: 500;
      border-left: 1.5px solid #EBE9F1 ;
      width: 42.08px;
      margin: auto ;
      padding: 2px 15px; 
}
nav{
      padding: 5px 34px ;
}
.dark{
      background-color: #9290c317;
}


</style>