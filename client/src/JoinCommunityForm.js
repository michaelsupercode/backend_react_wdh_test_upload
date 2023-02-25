import { useState } from "react";

function fetchJoinCommunity(name, username) {
    return fetch("http://localhost:9000/newUser", {
        method: 'POST',
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username }) 
      })
}

const JoinCommunityForm = (props) => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    const joinCommunity = (event) => {
        event.preventDefault() 

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
            <button onClick={joinCommunity}>Join Now!</button>
        </form>
    );
}
 
export default JoinCommunityForm;