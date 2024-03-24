<template>
  <Navbar />
  <div class="m-10 mt-2">
     <ActionB @takeV="manageSwitcher"/> 
  </div>
  <div class="flex sm:flex-wrap justify-center h-screen ">
     <Cards :SH="this.SHvalue"/>
  </div>
  
  
</template>

<script>
import Navbar from './Navbar.vue';
import ActionB from './ActionB.vue';
import Cards from './Cards.vue';
export default {
      name:"Index",
      data(){
            return{
                  SHvalue : null,
            }
      },
      components:{
            Navbar,
            ActionB,
            Cards
      },
      methods:{

            // SH = show hide parameter
            manageSwitcher(SH){
                  this.SHvalue = SH
            }
      }

}
</script>

<style>

</style>