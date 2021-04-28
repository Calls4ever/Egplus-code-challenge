const UserDetailsModal=(props)=>{
    return(
        <div>
            <div>
                <img src={props.user.picture.large}></img>
                <h3>email: {props.user.email}</h3>
                <h3>Phone: {props.user.phone}</h3>
                <h3>Cell: {props.user.cell}</h3>
            </div>
        </div>
    )
}
export default UserDetailsModal