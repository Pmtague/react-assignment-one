import React, { useState } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
  const [username, setUsername] = useState({
    users: [
      {username: 'Jim'},
      {username: 'Jane'},
      {username: 'Joseph'},
    ]
  })

  const changeHandler = (event) => {
    setUsername({
      users: [
        {username: event.target.value},
        {username: 'Jane'},
        {username: 'Joseph'},
      ]
    })
  }

  return (
    <div className="App">
      <UserInput changed={changeHandler} user={username.users[0].username}/>
      <UserOutput user={username.users[0].username}/>
      <UserOutput user={username.users[1].username}/>
      <UserOutput user={username.users[2].username}/>
    </div>
  );
}

export default App;
