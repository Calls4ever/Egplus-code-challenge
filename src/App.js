import './App.css';
import {useEffect, useState} from 'react'

import UserTable from './components/UserTable'

function App() {

let url='https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo'
const [users, setUsers]=useState([])
useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    setUsers(data.results)
  })
 
},[])
const fetchData = async ()=>{
  let res = await fetch(url)
  let data = await res.json()
  users.push(data.results)
}

  
  
  
  return (
    <div>
      <h1>Hi Thanks for checking in!</h1>
      <div>
        {users.map(user=> <UserTable user={user}/>)}
      </div>
      
    </div>
  );
}

export default App;
