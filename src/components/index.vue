<template>

<div :class="dark">
      <Navbar @dark="darkmode" />
      <div class="m-10 mt-2">
            <div class="flex flex-col justify-between sm:flex-row items-center gap-5 text-black">
                       <ActionB :team="this.team" @takeV="manageSwitcher" /> 
        </div>
        <div class="flex sm:flex-wrap justify-center h-screen ">
            <Cards :SH="this.SHvalue" @setTeam="setusers"/>
        </div>
      </div>
        
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
                  dark:'',
                  team:[],
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
            },
            setusers(uti){
                  this.team = uti
                  
            },
            darkmode(val){
                  this.dark = val
            }
      }

}
</script>

<style>
.darkmode{
background: gray;
}
</style>