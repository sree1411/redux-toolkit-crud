import { createSlice } from '@reduxjs/toolkit'
import { userList } from '../Data' 

export const counterSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
      addUser :(state,action)=>{
        const newUser = action.payload;
         state.push(newUser);
      },
      updateuser :(state,action)=>{
       const {name,id,email} = action.payload
       let cu = state.find((x)=>x.id == id)
       if(cu){
           cu.name = name
           cu.email = email
       } 
      },
      deleteUser :(state,action)=>{
        const {id} = action.payload
        let cu = state.find((x)=>x.id == id)
        if(cu){
            return state.filter((x)=>x.id !== id)
        }
      }
  }
})


export const { addUser,updateuser,deleteUser} = counterSlice.actions

export default counterSlice.reducer