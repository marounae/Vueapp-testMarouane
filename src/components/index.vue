<template>

<div :class="dark">
      <Navbar @dark="darkmode" />
      <div class="m-10 mt-2">
            <div class="input flex flex-col justify-between sm:flex-row items-center gap-5 text-black">
                       <ActionB :team="this.team" @takeV="manageSwitcher" /> 
        </div>
        <div class="flex flex-wrap justify-center h-full card">
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

.darkmode {
      height: 230vh;
      background: linear-gradient(to right ,#352f44c6,#5c5470bb ,#B9B4C7);
}
  .darkmode input{
      background: none;
      color: #B9B4C7;
  }
  .darkmode .scrollign{
      background: #bab9b958;
  }
  .darkmode button:hover{
      background: #c7c8cc75;
  }
  .darkmode .scrollign > div div{
      color: #3C3633;
  }
  


  
</style>