import './App.css';
//used react hooks
import {useEffect, useState} from 'react'
// used two components, the table row and modal
import UserTable from './components/UserTable'
import UserDetailsModal from './components/UserDetailsModal'
function App() {

let url='https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo'
const [users, setUsers]=useState([])
const [modalToggle, setModalToggle]= useState(false)
const [userInModal, setUserInModal]=useState(0)

useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    setUsers(data.results)
  })
 
},[])

// we get data of current user from UserTable Component and this make sure 
//to render current user when clicked on a user from the table, by keeping
//track of user's index from users array
const handleUserInModal = (userIndex)=>{
  setModalToggle(true)
  setUserInModal(users[userIndex])
  console.log(userIndex)
}
//for closing and opening of the modal
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
        {/* when there user clicks on a user, then UserDetailsModal renders */}
        {modalToggle && <UserDetailsModal 
        handleModalToggle={handleModalToggle}
        user={userInModal}
        />}
      </section>
      
    </div>
  );
}

export default App;
