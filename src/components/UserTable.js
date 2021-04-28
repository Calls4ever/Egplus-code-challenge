import {useState} from 'react'
import UserDetailsModal from './UserDetailsModal'
const UserTable=(props)=>{
    return(
        <tr>
            <td>
                <a href="#"onClick={()=>props.handleUserInModal(props.userIndex)}>
                    {props.user.name.title +" "+props.user.name.first +" "+props.user.name.last}
                </a>
            </td>
            <td>{props.user.dob.age}</td>
            <td>{props.user.location.state}</td>
            <td>{props.user.location.country}</td> 
        </tr>
    )
}
export default UserTable