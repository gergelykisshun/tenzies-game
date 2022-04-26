import React, {useState} from 'react';
import Die from './components/Die/Die';

const App = () => {
  const allNewDice = () => {
    return new Array(10).fill(0).map(num => Math.ceil(Math.random() * 6));
  };

  const [diceArr, setDiceArr] = useState(allNewDice());

  const rollNewDice = () => {
    setDiceArr(allNewDice());
  };

  return (
    <main className='section-container'>
      <div className='game-container'>
        <div className='game-area'>
          <h1>
            Tenzies
            <p>
              Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
          </h1>
          <div className='dice-container'>
            {diceArr.map(die => <Die value={die}/>)}
          </div>
          <button className='roll-btn' onClick={rollNewDice}>Roll</button>
        </div>
      </div>
    </main>
  )
}
export default App;
