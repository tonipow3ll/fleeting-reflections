import React, { useState } from 'react';
// import ReactDom from 'react-dom';

import { createExpirationTime, createId } from '../src/utils/expiration';
import { NewThoughtForm } from './components/Form';
import { Thought } from './components/Main';
import Footer from './components/Footer';


import '@fontsource/roboto';
import './App.css';



function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: createId(),
      text: 'Thoughts will appear here, they will dissapear after about 10 seconds',
      expiresAt: createExpirationTime()
    },
    {
      id: createId(),
      text: 'Type something in the input box, and hit + to see!',
      expiresAt: createExpirationTime()
    }
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
    <div className="App">
      <header>
        <h1>Fleeting Reflections</h1>
        <h3>Share your thoughts with the ether, nothing here gets saved!</h3>
      </header>
      <main>
    <NewThoughtForm addThought={addThought}/>
    <ul>
      {thoughts.map((thought) => (
        <Thought key={thought.id} thought={thought} removeThought={removeThought} />
      ))}
    </ul>
    </main>
      <Footer />
    </div>
    
  );
}

export default App;
