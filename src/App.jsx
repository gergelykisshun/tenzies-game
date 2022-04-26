import React from 'react';
import Die from './components/Die/Die';

const App = () => {

  return (
    <main className='section-container'>
      <div className='game-container'>
        <div className='game-area'>
          <div className='dice-container'>
            {new Array(10).fill('0').map(die => <Die value={Math.ceil(Math.random() * 6)}/>)}
          </div>
        </div>
      </div>
    </main>
  )
}
export default App;
