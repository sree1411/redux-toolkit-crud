import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../features/counterSlice'
 

const Home = () => {
 
const users  = useSelector((state)=>state.users)

const dispatch = useDispatch()

const handleDelete = (id)=>{
   dispatch(deleteUser({id}))
}


  return (
       <>
       <Link to='/create'> Create the user</Link>
    <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,i)=>(
                    <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`} className='btn btn-primary'> Edit </Link>
                         <button onClick={()=>handleDelete(user.id)}> delete</button>
                    </td>
        
                    </tr>
                ))
            }
          
             
        </tbody>
        </table>
          
       
       </>
  )
}

export default Home