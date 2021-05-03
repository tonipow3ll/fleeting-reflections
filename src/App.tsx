import React, { useState } from 'react';

import { createExpirationTime, createId } from '../src/utils/expiration';
import { NewThoughtForm } from './components/Form';
import { Thought } from './components/Main';
import Header from './components/Hero'
import FooterNav from './components/Footer'
import 'bulma/css/bulma.css'


import '@fontsource/roboto';
import './App.css';



function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: createId(),
      text: 'Thoughts will appear here, they will dissapear after about 10 seconds',
      expiresAt: createExpirationTime()
    },
  ]);
//  { id: number; text: string; expiresAt: number; }
   const addThought = (thought:any) => {
     setThoughts(prev => [thought, ...prev])
   }
   const removeThought = (thoughtIdToRemove: number) => {
     setThoughts((thoughts) =>
     thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
     );
   };
  return (
    <div className="App thescream">
    <Header />

     
    <NewThoughtForm addThought={addThought}/>
    <ul>
      {thoughts.map((thought) => (
        <Thought key={thought.id} thought={thought} removeThought={removeThought} />
      ))}
    </ul>
        <FooterNav />
    </div>
  );
}

export default App;
