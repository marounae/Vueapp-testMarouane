<template>
    <!-- card 1 -->
    <div class="flex-1 max-w-xs m-2">
          <!-- card title -->
          <div class="flex justify-between m-8 mb-4">
                <div class="flex flex-row justify-around w-16	 "><span><img src="../assets/Icon.svg" alt=""></span> To-Do</div>
                <div>➕</div>
          </div>
          <!-- fin type  card -->
          <div  class="rounded-2xl bg-gray-50  text-center ring-1 ring-inset ring-gray-900/5  h-3/4">
            <div class="mx-auto max-w-xs p-3">

                <div v-if="this.SH"  class="w-auto  bg-white rounded-lg border-t-8 border-green-400 px-1 py-1 flex flex-col justify-around shadow-md">
                      <div class="flex flex-row  content-center gap-1 rounded-md py-1 px-1">
                            <!-- checkbox for the task if it's finish or not (I used the style tags) -->
                            <div class="place-content-center">
                                  <label class="containe">
                                        <input type="checkbox"  >
                                        <div class="checkmark"></div>
                                  </label>
                            
                            </div>

                            <input type="text" class="bg-inherit focus:outline-none pl-1 font-medium  border-opacity-0" placeholder="Write a task name"/>
                      </div>

                      <div class='flex flex-row m-5 mt-7 z-0'>
                        <select :class="this.nameLogo" class="p-1"  v-model="user" @change="farbenuser()">
                            <option value="noUser" class="font-medium text-2xl"></option>
                            <option value="UserY" class="font-medium text-2xl">Y</option>
                            <option value="UserR" class="font-medium text-2xl">R</option>
                        </select>
                        

                        <div class="w-8 relative m-2">
                            <input type="datetime-local" class="C">
                        </div>
                </div>

            </div>        
        </div>
        </div>
    </div>
    <div class="flex-1 max-w-xs m-2">
        <div class="flex justify-between m-8 mb-4">
            <div> In Progress</div>
            <div>➕</div>
        </div>
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset  ring-gray-900/5  h-3/4">
          <div class="mx-auto max-w-xs px-8">
             </div>
        </div>
    </div>
    <!-- card 3 -->
    <div class="flex-1 max-w-xs m-2">
        <div class="flex justify-between m-8 mb-4">
            <div>Review</div>
            <div>➕</div>
        </div>
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 h-3/4">
          <div class="mx-auto max-w-xs px-8">
          </div>
        </div>
    </div>
    <!-- card 4 -->
    <div class="flex-1 max-w-xs m-2">
        <div class="flex justify-between m-8 mb-4">
            <div>Completed</div>
            <div>➕</div>
        </div>
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 h-3/4">
          <div class="mx-auto max-w-xs px-8">
          </div>
        </div>
    </div>


</template>

<script>
export default {
    name:'Cards',
    data(){
      return{
        obj:{},
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

    }

}
</script>

<style>
/* style the check task if it's done */
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
  top: 0;
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

  option{
      background-color: white;
      }
      select {
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 40px;
      border:2px gray solid;
      border-radius: 50%;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: inherit;
      }
      select:focus
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
		width: 30px;
		height: 30px;
		border-width: thin;
        width: 120%;
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


</style>