const UserDetailsModal=(props)=>{
    return(
        <div>
            <div>
                <button onClick={props.handleModalToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                </svg></button>
            
                <img src={props.user.picture.large}></img>
                <h3>email: {props.user.email}</h3>
                <h3>Phone: {props.user.phone}</h3>
                <h3>Cell: {props.user.cell}</h3>
            </div>
        </div>
    )
}
export default UserDetailsModal