<template>
      
            <!-- field button one -->
            <div class="flex gap-6">
              <button href="#" :class="{bb : ActiveAdd}"  class="rounded-md shadow-lg  font-medium border-solid border border-white px-3.5 py-2.5 text-sm text-black  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-bg b "
              @click="Switcher">
                <span aria-hidden="true">+</span> Add Task
              </button>

              
              <div class="relative selector z-10" >
               
                <button @click="toggleF()" type="button"    class="a rounded-md font-medium border-solid border border-white px-3.5 py-2.5 text-sm text-black shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-bg">
                  Filter
                </button>
                   <ul v-if=filteropen class="flex justify-center gap-1 shadow-lg  items-center w-60 h-20 bg-gray-300 rounded-lg shadow-lg  absolute top-0 left-0 mt-10  border  border-gray-200">
                   <div v-for="item in harditem">
                   
                    <input  :value=item @click="filterhard(item)" class="text-center text-xs w-16 h-6 place-content-center cursor-pointer hover:bg-gray-100" />

                   </div>
                        <!-- <input  value='Meduim'  class="text-center text-xs w-16 h-6 place-content-center cursor-pointer hover:bg-gray-100" />
                        <input  value='Low'  class="text-center text-xs w-16 h-6 place-content-center cursor-pointer hover:bg-gray-100" />
                        <input  value='High'  class="text-center	 text-xs w-16 h-6 place-content-center   cursor-pointer hover:bg-gray-100" /> -->

              
                  

                          </ul>
               
              </div>
            </div>
        
            <!-- field button two -->
            <div class="flex items-center gap-4">
              <!-- icon users -->
              <div class="flex gap-4 items-center">
                <div href="#" class="flex items-start gap-4 overflow-hidden  shadow-[#00000050]">

                           <!-- users 2 -->
                        <div v-for="(team,i) in this.team" class="relative flex h-[60px] w-[60px] items-center justify-center">
                              <input type="checkbox" id="radio" name="gender"  :value="team.nameU" v-model="userS"     class="peer z-10 h-full w-full cursor-pointer opacity-0"  />
                              <div class="absolute -z-10 h-full w-full scale-0 rounded-full bg-gray-200 duration-500 peer-checked:scale-[100%]" >                </div>
                              <div class="absolute h-full w-4/5 bg-center bg-no-repeat" :class="team.nameU"></div>
                           </div>   
                                       <!-- test -->

                                      
    
                 <!-- fin users -->
                </div>
              </div>
              <button href="#" class="rounded-md justify-center shadow-lg font-medium border-solid border border-white px-3.5 py-2.5 text-sm text-black  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-bg">
                <span class="fa-solid fa-share-nodes w-10"></span> Share
              </button>
            </div>
            
            
</template>

<script>
    import '@fortawesome/fontawesome-free/css/all.css';


export default {
      name:'ActionB',
      props:['team'],
      emits: ['takeV'], 
      data(){
            return{
              harditem:['Medium','High','Low'],
              filteropen:false,
                userS:[],
                  nameUser:this.team,
                  ActiveAdd:false,
                  users:[{nameU:'UserY',path:"../assets/user/Black and White Minimalist Aesthetic Initial A Star Font Logo.svg"},
                        {nameU:'UserR',path:"../assets/user/Letter R for Business Logo.svg"},
                        {nameU:'noUser',path:"../assets/user/Group 41599.svg"}
                        ]
            }
      },
      methods:{
            Switcher(){
             console.log(this.team)
                  this.ActiveAdd = !this.ActiveAdd
                  this.$emit('takeV',this.ActiveAdd)

                               
            },
            toggleF(){
              this.filteropen = !this.filteropen
            },
            filterhard(itemH){
              this.$store.commit('FilterHard', itemH);

            },
      //       FilterUser(par){
      //           this.nameUser = par
      //               this.$store.commit('FilterUser',this.nameUser)
      // }
          
      },
        watch: {
              userS(newValue, oldValue) {
                  // Trigger the FilterUser mutation whenever userS changes
                  this.$store.commit('FilterUser', newValue);
              },
        },
      computed:{
          
      }

}
</script>

<style>
.b {
	width: 133px;
	height: 42px;
	padding: 12px 26px 12px 24px;
	border-radius: 10px;
    }
.bb{
      background: #5E6FE130;
}
    
.a {
      width: 100px;
	height: 42px;
	padding: 12px 26px 12px 24px;
	border-radius: 10px;
}
.logos {
	width: 20%;
}
.user{
width:120px;
border-radius: 50%;
border: solid gray 2px;



}
.UserY{
      background-image:url('../assets/user/Black\ and\ White\ Minimalist\ Aesthetic\ Initial\ A\ Star\ Font\ Logo.svg') ;
  }
    .UserR{
      background-image:url('../assets/user/Letter\ R\ for\ Business\ Logo.svg') ;
    }
    .noUser{
      background-image:url('../assets/user/Group\ 41599.svg') ;

    }
</style>