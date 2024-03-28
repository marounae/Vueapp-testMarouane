  <template>
      <!-- card 1 -->
      <div class="flex-1  w-auto m-2" v-if="delAction['card1']">
        <!-- card title -->
        <div class="flex   justify-between m-4 mb-4">
          <div class="flex   w-16">
            <img src="../assets/Icon.svg" alt="" class="z-0" /><input  value="To do" ref="change" :disabled="enabel ? disabled : ''"/>      
          </div>
          <div class="flex">
            <button  v-if="!isOpen['card1']" v-on:click="saveName">
              ➕
           </button>
            <div class="flex relative" @click="toggleDropdown('card1')">
              
              <button class="w-4 mt-1 m-2"><img src="../assets/P.png" alt=""></button>
            
              <div v-if="isOpen['card1']" class="dropdown-menu mt-2">
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="renameTask"><img src="../assets/edit.png" alt="" class="w-4 mr-1"> Rename</button>
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="deleteTask('card1')"><img src="../assets/delete-Icon.svg" alt=""  class="w-4 mr-1"> Delete</button>
              </div>
            </div>
          </div>
        </div>   
        <form @submit.prevent="addtask">
            <!-- fin type  card -->
            <div class="rounded-2xl bg-gray-50  text-center ring-1 ring-inset ring-gray-900/5  h-96  scrollign">
                <div class="mx-auto max-w-xs p-3">
                    <div v-if="this.SH"  class="bg-white rounded-lg  px-1 py-1 flex flex-col justify-around shadow-md">
                        <div class="flex flex-row  content-center gap-1 rounded-md py-1 px-1">
                            <!-- checkbox for the task if it's finish or not (I used the style tags) -->
                            <div class="place-content-center">
                                <label class="containe">
                                    <input type="checkbox" v-model="checkdone">
                                    <div class="checkmark"></div>
                                </label>
                            </div>
                            <input type="text" class="bg-inherit focus:outline-none pl-1 font-medium  border-opacity-0" placeholder="Write a task name" v-model="taskname"/>
                        </div>
                        <div class='container flex flex-row m-5 mt-7 z-0'>
                            <select :class="this.nameLogo" class="p-1 users"  v-model="user" @change="farbenuser()">
                              <option value="noUser" class="font-medium text-2xl"></option>
                                <option value="UserY" class="font-medium text-2xl">Y</option>
                                <option value="UserR" class="font-medium text-2xl">R</option>
                            </select>
                            <div class="w-8 relative m-2">
                                <input type="datetime-local" class="C" v-model="daten">
                            </div>
                        </div>
                    </div>
                    <!-- show content -->
                    <div v-for="(task,index) in Showing" :key="index" class="max-w-md mx-auto mt-4 bg-white rounded-lg px-1 py-1 flex flex-col justify-around shadow-md">
                        <div class="flex flex-row justify-start gap-1 rounded-md py-1 px-1">
                            <!-- content -->
                            <div class="mt-1">
                                <label class="containe">
                                    <input type="checkbox" :checked="task.done">
                                    <div class="checkmark"></div>
                                </label>
                            </div> 
                            <form @submit.prevent="updatedes(index)">
                            <div class="ml-2 text-left">
                                <h1 class="bg-inherit focus:outline-none pl-1 font-bold text-xl  border-opacity-0">{{task.nameTask}}</h1>
                                
                      
                                <div class="flex"><p class="font-medium">dicription {{index}}<button type="button" v-on:click="updateAccepted"><img src="../assets/edit.png" class="w-4 h-4"></button> </p>
                                </div>
                                <textarea class="text-xs w-52  text-justify" v-model="des[index]"  :disabled="up ? disabled: ' '"  ref="inputElement" ></textarea>
                                <button type="submit" v-if="up">✔️</button>

                                <div class="relative selector" >
                                  <button @click="toggleDropdownO(task.nameTask)" type="button"   class="bg-black  text-white px-2 py-1 m-2 rounded-lg shadow-md focus:outline-none Low" >
                                    {{ selectedOption[task.nameTask] || 'Medium' }}
                                  </button>
                                     <ul v-if=selectO[task.nameTask] class="w-44 h-32 rounded-lg shadow-lg  absolute top-0 left-0 mt-10 bg-white border  border-gray-200   ">
                                          <li  v-for="(option, index) in options" :key="index" @click="selectOption(option,task.nameTask,index)"  class="flex   place-content-center py-2 px-4 cursor-pointer hover:bg-gray-100 option"><p :style="{background : option.color}" class="shadow-lg rounded-lg   w-16  h-7  ">{{ option.name }}</p></li>
                                    </ul>
                                 
                                </div>
                   
                                <div class="flex flex-row items-center">
                                    <div class="w-8 h-8" :class="task.user"></div>
                                    <p class="mx-2">-</p>
                                    <p class="mx-2 max-w-xs">{{ task.date }}</p>
                                </div>
                            </div>
                          </form>
                          
                        </div>
                        
                    </div>  
                </div>
            </div>
            <div class="flex flex-col justify-center">
                <button type="submit">➕ Add task</button>
            </div>
        </form>
    </div>
    
      <!-- card 2 -->
      <div class="flex-1  w-auto m-2" v-if="delAction['card2']">
        <!-- card title -->
          <div class="flex   justify-between m-4 mb-4">
          <div class="flex   w-16">
            <input  value="In Progress" :disabled="enabel ? disabled : ''"/>      
          </div>
          <div class="flex">
                <button v-if="!isOpen['card2']" v-on:click="saveName">
                                ➕
                </button>
            <div class="flex relative" @click="toggleDropdown('card2')">
              
              <button class="w-4 mt-1 m-2"><img src="../assets/P.png" alt=""></button>
            
              <div v-if="isOpen['card2']" class="dropdown-menu mt-2">
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="renameTask"><img src="../assets/edit.png" alt="" class="w-4 mr-1"> Rename</button>
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="deleteTask('card2')"><img src="../assets/delete-Icon.svg" alt=""  class="w-4 mr-1"> Delete</button>
              </div>
            </div>
          </div>
        </div>    
          <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset  ring-gray-900/5  h-3/4">
            <div class="mx-auto max-w-xs px-8">
              </div>
          </div>
          <div class="flex flex-col justify-center">
            <button type="submit">➕ Add task</button>
        </div>
      </div>
      <!-- card 3 -->
      <div class="flex-1  w-auto m-2" v-if="delAction['card3']">
        <!-- card title -->
        <div class="flex   justify-between m-4 mb-4">
          <div class="flex   w-16">
            <input  value="Review" :disabled="enabel ? disabled : ''"/>      
          </div>
          <div class="flex">
              <button v-if="!isOpen['card3']" v-on:click="saveName">
                              ➕
              </button>
            <div class="flex relative" @click="toggleDropdown('card3')">
              
              <button class="w-4 mt-1 m-2"><img src="../assets/P.png" alt=""></button>
            
              <div v-if="isOpen['card3']" class="dropdown-menu mt-2">
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="renameTask"><img src="../assets/edit.png" alt="" class="w-4 mr-1"> Rename</button>
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="deleteTask('card3')"><img src="../assets/delete-Icon.svg" alt=""  class="w-4 mr-1"> Delete</button>
              </div>
            </div>
          </div>
        </div>    
          <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 h-3/4">
            <div class="mx-auto max-w-xs px-8">
            </div>
          </div>
          <div class="flex flex-col justify-center">
            <button type="submit">➕ Add task</button>
        </div>
      </div>
      <!-- card 4 -->
      <div class="flex-1  w-auto m-2" v-if="delAction['card4']">
        <!-- card title -->
        <div class="flex   justify-between m-4 mb-4">
          <div class="flex   w-16">
            <input  value="Completed" ref="change" :disabled="enabel ? disabled : ''"/>      
          </div>
          <div class="flex">
            <button v-if="!isOpen['card4']" v-on:click="saveName">
                            ➕
                        </button>
            <div class="flex relative" @click="toggleDropdown('card4')">
              
              <button class="w-4 mt-1 m-2"><img src="../assets/P.png" alt=""></button>
            
              <div v-if="isOpen['card4']" class="dropdown-menu mt-2">
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="renameTask('card4')"><img src="../assets/edit.png" alt="" class="w-4 mr-1"> Rename</button>
                <button class="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="deleteTask('card4')"><img src="../assets/delete-Icon.svg" alt=""  class="w-4 mr-1"> Delete</button>
              </div>
            </div>
          </div>
        </div>    
          <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 h-3/4">
            <div class="mx-auto max-w-xs px-8">
            </div>
            <div class="flex flex-col justify-center">
              <button type="submit">➕ Add task</button>
          </div>  
          </div>
          
      </div>


  </template>

  <script>
  export default {
      name:'Cards',
      data(){
        return{
          options:[{name:'Medium',color:'coral'},{name:'Low',color:'blueviolet'},{name:'High',color:"brown"}],
          selectedOption:{},
          selectO:{},
          delAction:{
            'card1':true,
        'card2':true,'card3':true,'card4':true
          },
          isOpen:{'card1':false,
        'card2':false,'card3':false,'card4':false},
        enabel:false,
        des:[],
        up:false,
          uti:[],
          checkdone:null,
          taskname:'',
          daten:'',
          position:'To do',
          obj:{},
          obj2:{},
            nameLogo:'',
            user:'',
            users:[{nameU:'UserY',path:"../assets/user/Black\ and\ White\ Minimalist\ Aesthetic\ Initial\ A\ Star\ Font\ Logo.svg"},
                  {nameU:'UserR',path:"../assets/user/Letter\ R\ for\ Business\ Logo.svg'"},
                  {nameU:'noUser',path:"../assets/user/Group\ 41599.svg"}
                ]
        }
      },
      props:['SH'],
      methods:{
        farbenuser(){
        this.obj = this.users.find(item => item.nameU === this.user)
        this.nameLogo = this.obj.nameU

        },
        toggleDropdownO(id){
            console.log(this.$store.state.Fog)

            this.selectO[id] = !this.selectO[id]
        },
        toggleDropdown(id) {
          
       
      
                                  this.isOpen[id] = !this.isOpen[id];

        },
        
        selectOption(option,name,i) {
          this.$store.commit('hardLe',{id:i,hard:option.name,nameT:name})
          this.selectO[name] = false
          this.selectedOption[name] = option.name
          
        },
        deleteTask(i){
          this.delAction[i] = !this.delAction[i];
        },
      addtask(){
        this.$store.commit('Addtask',this.addobj)
        this.obj2 = this.users.find(item => item.nameU === this.user)
        if(!this.uti.includes(this.obj)){
          this.uti.push(this.obj2)
        }
        this.$emit('setTeam',this.uti)  
        this.$store.commit('notFilter');

      },
      updateAccepted(){
        this.up = !this.up
      },
      updatedes(par){
        this.$store.commit('deschange',{id:par,description:this.des[par]})
        this.updateAccepted()
        
      },
      renameTask(){
        this.enabel = true
       
  //       this.$nextTick(() => {
  //   if (this.$refs.change) {
  //     this.$refs.change.focus();
  //   }
  // });
      },
       saveName(){
          this.enabel = false
        }

    },
    computed:{
      Showing(){
      return this.$store.state.filterUser
    },

    addobj(){
        this.des = this.Showing.map(task => 'Try the AI text Generator,A Tool For Content Creation.It Leverage A');
console.log(this.$store.state)

      return  {nameTask:this.taskname,
              description:'Try the AI text Generator,A Tool For Content Creation.It Leverage A',
              user:this.user,
              date:this.daten,
              position:'To do',
              done:this.checkdone,
              hard:'',
              }
    }
    
    
  
    
    },
    

  }
  </script>

  <style>
  /* style the check task if it's done */

  
  *{
  color:rgba(0, 0, 0, 0.642);
  }
  .containe input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }
    
    .containe {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    user-select: none;
    }
    
    
    .checkmark {
    position: relative;
    top: 1px;
    left: 0;
    height: 2.3em;
    width: 2.3em;
    background-color: #ccc;
    border-radius: 50%;
    transition: .4s;
    }
    
    .checkmark:hover {
    box-shadow: inset 17px 17px 16px #b3b3b3,
            inset -17px -17px 16px #ffffff;
    }
    
    .containe input:checked ~ .checkmark {
    box-shadow: none;
    background-color: limegreen;
    transform: rotateX(360deg);
    }
    
    .containe input:checked ~ .checkmark:hover {
    box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
    }
    
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }
    
    .containe input:checked ~ .checkmark:after {
    display: block;
    }
    
    .containe .checkmark:after {
    left: 0.96em;
    top: 0.7em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    box-shadow: 0.1em 0.1em 0em 0 rgba(0,0,0,0.3);
    transform: rotate(45deg);
    }
    /* User option style  */

    
        select.users {
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 40px;
        border:1px gray solid;
        border-radius: 50%;
        text-align: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: inherit;
        }
        select.users:focus
        {
          border: none;
          outline: none;
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
         
       

        /* date time */

        input[type="datetime-local"]::-webkit-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      display: block;
      background: url("../assets/Calendar.svg") no-repeat;
      background-size: contain; 
      width: 25px;
      height:25px;
      border-width: thin;
        }
          input[type="datetime-local"]::-webkit-calendar-picker-indicator {
              position: absolute;
              left: 12%;
            }
            input.C::-webkit-datetime-edit-fields-wrapper {
              visibility: hidden;
              color: white;
              position: relative;
              left: 30%;
            }
            input.C{
              width: 40px;
            }
            input:focus{
              outline: none;
            }
            .scrollign::-webkit-scrollbar {
              display: none;
          }
          .scrollign{
            overflow-y: auto;
          }
          

  </style>