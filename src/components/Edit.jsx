import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../features/counterSlice'

const Edit = () => {

  const {id} = useParams()
  
  const users = useSelector((state)=>state.users)
  const exitUser = users.filter((x)=>x.id == id)
  const {name,email} = exitUser[0]
  
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(updateuser({id:id,name:uname,email:uemail}))
    navigate('/')

 }


  return (
        <div>
            <div>
                <div className="container">
                <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Name</label>
                <input type="text" value={uname} onChange={(e)=>setName(e.target.value)}  name='uname' className="form-control" id="uname" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input type="text"  value={uemail} onChange={(e)=>setEmail(e.target.value)}  name='uemail' className="form-control" id="uemail" aria-describedby="emailHelp"/>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
            </form>
                </div>
                </div>
        
    </div>
  
)
}

export default Edit