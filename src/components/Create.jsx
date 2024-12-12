import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/counterSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('')
    
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const users  = useSelector((state)=>state.users)

  const handleSubmit = (e)=>{
     e.preventDefault()
     dispatch(addUser({id:users[users.length-1].id+1,name,email}))
     navigate('/')

  }


  return (
    <div>
        <div className="container">
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label>Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  name='name' className="form-control" id="name" aria-describedby="emailHelp"/>
  </div>
  
  <div className="mb-3">
    <label>Email address</label>
    <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}  name='email' className="form-control" id="email" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
  )
}

export default Create