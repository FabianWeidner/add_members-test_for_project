import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  const [newUser, setNewUser] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setNewUser((prevUser) => {
      return [
        ...prevUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={newUser} />
    </div>
  );
}

export default App;
