import { useEffect } from "react";

const UserList = (props) => {

    useEffect(() => {
        fetch("http://localhost:9000/users")
        .then((response) => response.json())
        .then((usersData) => {
            props.setUsers(usersData)
        })
    }, []) 


    return (
        <div>
            <h1>our simple react.js test community:</h1>
            {props.users.map(u => <div key={u.id}>
                <p>{u.name} ({u.username})</p>
            </div>)}
        </div>
    );
}
 
export default UserList;