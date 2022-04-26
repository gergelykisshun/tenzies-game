import React, {useEffect, useState} from 'react';
import Die from './components/Die/Die';
import { nanoid } from 'nanoid';

const App = () => {

  const allNewDice = () => {
    return new Array(10).fill(0).map((num) => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }));
  };

  const [diceArr, setDiceArr] = useState(allNewDice());
  const [gameWon, setGameWon] = useState(false);

  const rollNewDice = () => {
    setDiceArr(prevDice => prevDice.map(die => die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}));
  };

  useEffect(() => {
    console.log('ran');
    if(diceArr.every(die => die.isHeld) && diceArr.map(die => die.value).filter(dieValue => diceArr[0] === dieValue)){
      setGameWon(prev => !prev);
    }
  }, [diceArr]);

  const holdFn = (id) => {
    setDiceArr(prev => {
      return prev.map(die => {
        if (die.id === id) {
          return {
            ...die,
            isHeld: !die.isHeld
          };
        } else {
          return die;
        }
      });
    })

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
            {diceArr.map(die => <Die holdFn={holdFn} key={die.id} die={die}/>)}
          </div>
          <button className='roll-btn' onClick={rollNewDice}>{gameWon ? 'You win!' :' Roll'}</button>
        </div>
      </div>
    </main>
  )
}
export default App;
