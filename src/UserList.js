import { useEffect } from "react";

const UserList = (props) => {

    useEffect(() => {
        fetch("http://localhost:9000/users")
        .then((response) => response.json())
        .then((usersData) => {
            props.setUsers(usersData)
        })
    }, []) // dependency array


    return (
        <div>
            <h1>Our react.js Teufelsrochen community:</h1>
            {props.users.map(u => <div key={u.id}>
                <p>{u.name} ({u.username})</p>
            </div>)}
        </div>
    );
}
 
export default UserList;