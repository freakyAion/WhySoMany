import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useUnit } from 'effector-react'
import { $counter, increase, decrease } from './store/counter'

import Counter from './components/counter'
import CounterButtons from './components/counterButton'

function App() {

  const counter = useUnit($counter);

  function Add() {
      increase();
  }
  function nAdd() {
      decrease();
  }

  increase.watch(() => {console.log("Something's going up. Scary")})
  decrease.watch(() => {console.log("Something's going !up. Scary")})

  return (
    <>
      <h1>Counter</h1>
      <Counter value={counter}/>
      <CounterButtons add={Add} nadd={nAdd}/>
    </>
  )
}

export default App
