import { useState } from "react";

function fetchJoinCommunity(name, username) {
    // RETURN DIE PROMISE VOM FETCH...
    return fetch("http://localhost:9000/newUser", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: { 'Content-Type': 'application/json' },
        // redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({ name, username }) // body data type must match "Content-Type" header
      })
}

const JoinCommunityForm = (props) => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    const joinCommunity = (event) => {
        event.preventDefault() // verhindere dein standard-verhalten aka. Page reload bei form submit

        fetchJoinCommunity(name, username)
        .then((response) => response.json())
        .then((updatedUsersArray) => {
            console.log(updatedUsersArray)
            props.setUsers(updatedUsersArray)
        })
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <br/>
            <label>
                Username:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br/>
            <button onClick={joinCommunity}>Join Teufelsrochen Now!</button>
        </form>
    );
}
 
export default JoinCommunityForm;