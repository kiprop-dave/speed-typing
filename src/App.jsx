import React from 'react';
import useGame from './hooks/useGame';

import './App.css'

function App() {

  const {textRef,
    isTimeRunning,
    handleChange,
    wordCount,
    text,
    timeRemaining,
    startGame} = useGame(30)

  return(
    <div>
      <h1>How fast can you type?</h1>
      <h4 className='sample'>Sample Text: I wish I was the monster you think I am. I wish I had enough
         poison for the whole pack of you. I would gladly give my life to watch you 
         all swallow it. I will not give my life for Joffrey's murder. And I know I'll get no justice here, so I will let the gods decide my fate.
          I demand a trial by combat!</h4>
      <textarea value={text} onChange ={handleChange} disabled ={!isTimeRunning}
      ref = {textRef}/>
      <h3>Time Remaining: {timeRemaining} seconds</h3>
      <button onClick={() =>startGame()} disabled ={isTimeRunning}>START</button>
      <h3>Word Count: {wordCount}</h3>
    </div>
  )
}

export default App
