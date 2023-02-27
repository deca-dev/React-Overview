import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS  } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'


function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return //? Si existe un simbolo en esa posición o hay un ganador no deja jugar
    //? Actualizar board
    const newBoard = [...board] //copia de board porque no se puede mutar props o estado
    newBoard[index] = turn
    setBoard(newBoard)
    //? Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //? guardar partida en localstorage
    window.localStorage.setItem('board',JSON.stringify(newBoard) )
    window.localStorage.setItem('turn', newTurn)
    //? Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)//? Revisar si hay ganador
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) { //Si se han hecho todos los movimientos posibles y no hay ganador significa empate
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((_, index) => { //? _ es la primera posición
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {/*  Sección para mostrar quién ganó */}
      <WinnerModal
      resetGame = {resetGame}
      winner = {winner}
      />
    </main>
  )
}

export default App
