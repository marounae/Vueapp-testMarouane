import { createStore } from "vuex";
import 'core-js/stable/array'
import { reactive } from "vue";

const store = createStore({
state : {
      users:[{nameU:'UserY',path:"../assets/user/Black\ and\ White\ Minimalist\ Aesthetic\ Initial\ A\ Star\ Font\ Logo.svg"},
      {nameU:'UserR',path:"../assets/user/Letter\ R\ for\ Business\ Logo.svg'"},
      {nameU:'noUser',path:"../assets/user/Group\ 41599.svg"}
    ],
      task:[ 
      ]  ,
      filterUser:[]
      },
mutations:{
      Addtask(state,payload){
            state.task = [...state.task,payload]
            console.log('you use the add store function')
      },
      FilterUser(state,payload) { 
            console.log(payload)
            if(payload.length != 0 ){
                  const us = payload;
            
                  console.log(us.length)
                  const updatedTasks = state.task.filter(item => us.includes(item.user));
                  state.filterUser = updatedTasks   
            } 
            else{
                  state.filterUser =  state.task 
              console.log('enter')
            }
       },
       FilterHard(state,payload){
            console.log(payload)
            if(payload){
                              const updateTask2 = state.task.filter(elm => payload.includes(elm.hard))
                              console.log(updateTask2)
                              state.filterUser = updateTask2
            }

       },
       notFilter(state){
            state.filterUser =  state.task 
            console.log('enter')
       },
            
      deschange(state,payload){     
           const index = payload.id
           
           const upitem = state.task.map((item,num)=>{
            if(index === num){
                  return{
                        ...item,
                        nameTask:state.task[index].nameTask,
                        description:state.task[index].description,
                        user:state.task[index].user,
                        date:payload.description,
                        position:state.task[index].position,
                        done:state.task[index].done,
                  }
                 
            } return {item}
           })
      state.task = upitem
      console.log(state.task)

      },  

      hardLe(state,payload){
            console.log('i do it')
            const val = payload.nameT
            console.log(val)
            const harder = state.task.map((elm,n)=>{
                  if (val === elm.nameTask) {     
                       console.log(n)
                       console.log(elm)

                        return{
                              ...elm,
                        hard:payload.hard                                  
                        }
                        
                        
                  }
                  return{...elm}
                
            })
            console.log(harder)
           state.filterUser = harder
           state.task = harder
     
},
updatePos(state,payload){
     const Pos = payload.Pos
     if(Pos == 'Completed'){
      console.log(Pos)
      const PosUp = state.task.map(item =>{
       if(item.nameTask == payload.N){
             console.log(item)
             return{
                   ...item,
                   position:Pos,
                   done:true,
             }
       }return{...item}
      })
      console.log(PosUp)
      state.filterUser = PosUp
      state.task = PosUp
 

     }
     else{
      console.log(Pos)
      const PosUp = state.task.map(item =>{
       if(item.nameTask == payload.N){
             console.log(item)
             return{
                   ...item,
                   position:Pos,
                   done:false
             }
       }return{...item}
      })
      console.log(PosUp)
      state.filterUser = PosUp
      state.task = PosUp
     }
   

}
      
        
        
        }

      
     
 

})
export default store;

