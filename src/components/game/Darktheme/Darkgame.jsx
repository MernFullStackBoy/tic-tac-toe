import React, { useState } from 'react'
import { calculate } from "../../help/calculate"
import DarkBoard from './DarkBoard'
import { Link } from 'react-router-dom'

const Darkgame = () => {

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
        <div className=' w-[100%] h-[633px] flex justify-center flex-col items-center bg-dark '>
            <div className=' w-[300px] h-[300px] rounded-[20px] bg-white '>
                <DarkBoard squares={his[num]} onClick={handleCLick} />
            </div>
            <br /><br />
            <Link to="/">
                <h3 className=' text-[30px] font-semibold '>{winner ? "Winner: " + winner + " Main Menu" : "Next Player: " + xO}</h3>
            </Link>
        </div>
    )
}

export default Darkgame