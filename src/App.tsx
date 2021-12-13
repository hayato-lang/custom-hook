import React from 'react';
import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "はやと",
  email: "aggerenrique@yahoo.co.jp",
  address: "アース"
};

function App() {
  return (
    <div className="App">
      <UserCard user={user}/>
    </div>
  );
}

export default App;
