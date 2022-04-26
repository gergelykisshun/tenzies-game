import React from 'react'

const Die = ({die, holdFn}) => {
    const {value, id, isHeld} = die;

    console.log(isHeld);

    const dieStyle = {
        backgroundColor: isHeld ? '#59E391' : '#fff'
    }

  return (
    <div style={dieStyle} onClick={() => holdFn(id)} className='die'>
        {value}
    </div>
  )
}

export default Die;