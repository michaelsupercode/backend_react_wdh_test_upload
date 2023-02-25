import { useState } from 'react';
import './App.css';
import Counter from './Counter'
import JoinCommunityForm from './JoinCommunityForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <JoinCommunityForm setUsers={setUsers} />
      <UserList users={users} setUsers={setUsers} />
      <Counter/>
    </div>
  );
}

export default App;
