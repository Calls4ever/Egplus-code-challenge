
const UserTable=(props)=>{
    return(
        <tr className='table-row'>
            <td>
                <div>
                    <a href="#"onClick={()=>props.handleUserInModal(props.userIndex)}>
                    {props.user.name.title +" "+props.user.name.first +" "+props.user.name.last}
                    </a>
                </div>
            </td>
            <td>
                <div>{new Date(props.user.dob.date).toDateString()}</div>
            </td>
            <td>
                <div>{props.user.location.state}</div>
            </td>
            <td>
                <div>{props.user.location.country}</div>
            </td> 
        </tr>
    )
}
export default UserTable