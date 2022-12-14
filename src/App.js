import React, {useState, useRef} from 'react'
import  './App.css'

export default function App() {
  const [value, setValue] = useState('')
  // const [op, setop] = useState()
  const buttonRef = useRef()

  const handleClick = (e)=>{
    let concatValue
    e.preventDefault();
    // setValue()
    // console.log(e.target.value);
    // setValue(e.target.value)
    // const replaceValue = value.replace(e.target.value)
    concatValue = '' + value + e.target.value 

    // concatValue = value===0? null: '' + value + e.target.value

    console.log(concatValue);
    setValue(concatValue)
    // setValue(buttonRef.current.value)

  }

  const handleEmpty = () => {
    setValue('')
  }

  const handleBack = ()=>{
    // console.log(Math.floor(value/10))
    const filteredValue = value.toString().slice(0, -1)
    setValue(filteredValue)
    // setValue('')
  }
  var addValue ;



const handleEqualTo = () =>{
  console.log('value', value)

  try{
    setValue(eval(value))
  }
  catch{
    setValue('Error')
  }
  // setValue(eval(value))

}

  return (
    <div>
    <div className="container">
      <div><input type="text" value={value} ref = {buttonRef}></input></div>
      <div className="calc">
        <button id='1' onClick = {handleClick} value={'%'}> % </button>
        <button id='2' onClick={handleEmpty}>CE</button>
        <button id='3' onClick={handleEmpty}>C</button>
        <button id='4' onClick = {handleBack}>back</button>
        <button id='5' onClick = {handleClick} value={7}>7</button>
        <button id='6' onClick = {handleClick} value={8}>8</button>
        <button id='7' onClick = {handleClick} value={9}>9</button>
        <button id='8' onClick = {handleClick}value={'*'}>x</button>
        <button id='9' onClick = {handleClick} value={4}>4</button>
        <button id='10' onClick = {handleClick} value={5}>5</button>
        <button id='11' onClick = {handleClick} value={6}>6</button>
        <button id='12' onClick = {handleClick} value={'-'}>-</button>
        <button id='13' onClick = {handleClick} value={1}>1</button>
        <button id='14' onClick = {handleClick} value={2}>2</button>
        <button  id='15' onClick = {handleClick} value={3}>3</button>
        <button id='16' onClick = {handleClick} value={'+'}>+</button>
        <button  id='17' onClick = {handleClick} value={0}>0</button>
        <button id='18' onClick = {handleClick} value={'.'}>.</button>
        <button id='19' onClick = {handleClick}value={'/'}>&divide;</button>
        <button id='20' onClick = {handleEqualTo}>=</button>
      </div>
    </div>
    </div>
  )
}
