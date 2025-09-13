
import {create} from "zustand"

import {persist} from "zustand/middleware"

// export const usePlanner = create((set)=>({
//     tasks:[],
//     addTask:(payload)=>set((state)=>({ // pehle se kya h woh state me milega bcz when i m adding a new task previous task got delete
//        tasks:[...state.task,payload] //2. we r doing state.task bcz task is in the state if we want previous data as it is ...state.task
       
       

//        // 1. we want to update tasks so first we have to write tasks and under tasks has a array so we give [] in the tasks  and put the data ie payload which is  coming from addTask
//     })) 
    
    // by default zustand give a set function to update the state.here state is tasks . in set function we put arrow function like that ()=>() and under this () we put object like this ({}) so set become like this set(()=>({}))
        
        
        
        //console.log(payload) // payload is a simply data which we get after submitting
    

// }))

// this fine but when we r loading the page data vanish to make it store we need persist .In persist it will take two object one is set and other is object .The above code is fine but we want o use persist so i m showing here so u can understand easily

export const usePlanner=create(persist( //i said earlier persist take two things
    (set)=>({   // here one is set
        tasks:[],
        addTask:(payload)=>set((state)=>({
            tasks:[...state.tasks,payload]


        })),
        deleteTask:(id)=>set((state)=>({
           tasks:state.tasks.filter((task)=>task.id!==id)
        })),
        updateStatus:(id,status)=>set((state)=>({
           tasks:state.tasks.filter((task)=>{
             if(task.id===id)
                task.status=status
                
             return task;

           })
        })),
        deleteAllTask:()=>set(()=>({
            tasks:[]
        }))

    }),
    {name:"planner"} // here planner is a key for local storage 
    
    // other is a object whuch states that in which name u have to save in local storage  .payload and set i have not explained here bcz i explained in the above rest is fine i can use persist in the above thing which is commented but i want ot make clear so i m writting twice same thing
))