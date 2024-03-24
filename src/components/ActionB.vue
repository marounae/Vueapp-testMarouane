<template>
      <div class="flex flex-col justify-between sm:flex-row items-center gap-5 text-black">
            <!-- field button one -->
            <div class="flex gap-4">
              <button href="#" :class="{bb : ActiveAdd}"  class="rounded-md shadow-lg font-medium border-solid border border-white px-3.5 py-2.5 text-sm text-black  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-bg b "
              @click="Switcher">
                <span aria-hidden="true">+</span> Add Task
              </button>
              <button href="#" class="a rounded-md font-medium border-solid border border-white px-3.5 py-2.5 text-sm text-black shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-bg">Filter</button>
            </div>
        
            <!-- field button two -->
            <div class="flex items-center gap-4">
              <!-- icon users -->
              <div class="flex gap-4 items-center">
                <div href="#" class="flex items-start gap-4 overflow-hidden  shadow-[#00000050]">
                        <!-- users -->
                        <div class="relative flex h-[60px] w-[60px] items-center justify-center">
                              <input type="checkbox" id="radio" name="gender" value="userNumber" v-model="nameUser" class="peer z-10 h-full w-full cursor-pointer opacity-0" />
                              <div class="absolute -z-10 h-full w-full scale-0 rounded-full bg-gray-200 duration-500 peer-checked:scale-[100%]">
                                    
                              </div><img src="../assets/user/Group 41599.svg" alt="" class="absolute" >
                              
                                    
      
                           </div>
                           <!-- users 2 -->
                        <div class="relative flex h-[60px] w-[60px] items-center justify-center">
                              <input type="checkbox" id="radio" name="gender" value="userNumber" v-model="nameUser" class="peer z-10 h-full w-full cursor-pointer opacity-0" />
                              <div class="absolute -z-10 h-full w-full scale-0 rounded-full bg-gray-200 duration-500 peer-checked:scale-[100%]">
                                    
                              </div><img src="../assets/user/Letter R for Business Logo.svg" alt="" class="absolute" >
                              
                                    
      
                           </div><!-- users 2 -->
                           <div class="relative flex h-[60px] w-[50px] items-center justify-center">
                                 <input type="checkbox" id="radio" name="gender" value="userNumber" v-model="nameUser" class="peer z-10 h-full w-full cursor-pointer opacity-0" />
                                 <div class="absolute -z-10 h-full w-full scale-0 rounded-full bg-gray-200 duration-500 peer-checked:scale-[100%]">
                                       
                                 </div><img src="../assets/user/Black and White Minimalist Aesthetic Initial A Star Font Logo.svg" alt="" class="absolute" >      
         
                              </div>
                  
                  
                  
    
                 <!-- fin users -->
                </div>
              </div>
              <button href="#" class="rounded-md justify-center shadow-lg font-medium border-solid border border-white px-3.5 py-2.5 text-sm text-black  hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-bg">
                <span class="fa-solid fa-share-nodes w-10"></span> Share
              </button>
            </div>
            
            
          </div>
</template>

<script>
    import '@fortawesome/fontawesome-free/css/all.css';


export default {
      name:'ActionB',
      data(){
            return{
                  ActiveAdd:false,
                  users:[{nameU:'UserY',path:"../assets/user/Black and White Minimalist Aesthetic Initial A Star Font Logo.svg"},
                        {nameU:'UserR',path:"../assets/user/Letter R for Business Logo.svg"},
                        {nameU:'noUser',path:"../assets/user/Group 41599.svg"}
                        ]
            }
      },
      methods:{
            Switcher(){
                  this.ActiveAdd = !this.ActiveAdd
                  this.$emit('takeV',this.ActiveAdd)
            },
      }

}
</script>

<style>
.b {
	width: 120px;
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
</style>