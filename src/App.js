import './App.css';
import {useEffect, useState} from 'react'

import UserTable from './components/UserTable'
import UserDetailsModal from './components/UserDetailsModal'
function App() {

let url='https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo'
const [users, setUsers]=useState([])
const [modalToggle, setModalToggle]= useState(false)
const [userInModal, setUserInModal]=useState(0)
// let userInModal=0
useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    setUsers(data.results)
  })
 
},[])


const handleUserInModal = (userIndex)=>{
  setModalToggle(true)
  setUserInModal(users[userIndex])
  console.log(userIndex)
}
const handleModalToggle=()=>{
  setModalToggle(!modalToggle)
}

  return (
    <div>
      <section className="container">
        <table className="table">
          <tr className='table-row'>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>State</th>
            <th>Country</th>
          </tr>
          {users.map(user=>
          <UserTable 
          user={user} 
          userIndex={users.indexOf(user)}
          handleUserInModal={handleUserInModal}
          />
          )}
        </table>
        {modalToggle && <UserDetailsModal 
        handleModalToggle={handleModalToggle}
        user={userInModal}
        />}
      </section>
      
    </div>
  );
}

export default App;
