import { useContext, useEffect, useState } from 'react'
import './App.css'
import gameContext, { GameContextProvider } from './store/Context'
import Winner from './component/Winner';
import Board from './component/Board';

function App() {
  
  const {winner} = useContext(gameContext);

  return (
    <div>
       {winner!==null? <Winner ID={winner} /> : <Board/> }
       </div>
  )
}

export default App
