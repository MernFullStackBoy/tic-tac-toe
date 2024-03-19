import React, { useState } from 'react'
import { calculate } from "../../help/calculate"
import Board from './Board'

const Game = () => {

    const [his, setHis] = useState([Array(9).fill(null)])

    const [num, setNum] = useState(0)

    const [xIsNext, setXisNext] = useState(true)

    const winner = calculate(his[num])

    const xO = xIsNext ? "X" : "O"

    function handleCLick(i) {
        const history = his.slice(0, num + 1)
        const current = history[num]
        const squares = [...current]

        if (winner || squares[i]) return

        squares[i] = xO
        setHis([...history, squares])
        setNum(history.length)
        setXisNext(prev => !prev)
    }

    return (
        <div className=' w-[100%] h-[633px] flex justify-center flex-col items-center bg-main '>
            <div className=' w-[300px] h-[300px] rounded-[20px] bg-white '>
                <Board squares={his[num]} onClick={handleCLick} />
            </div>
            <br /><br />
            <h3 className=' text-[30px] font-semibold '>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </div>
    )
}

export default Game