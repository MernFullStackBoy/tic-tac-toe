import React from 'react'
import { Link } from 'react-router-dom'
import Themes from './Themes'

const MainDash = () => {
    return (
        <div className=' bg-main w-[100%] flex flex-col p-[10px] items-center h-[100vh] '>
            <h2 className=' font-semibold text-[30px] '>Welcome To</h2>
            <h1 className=' font-bold text-[50px] text-red-500 '>Tic Tac Toe</h1>
            <Link to="/who">
                <button className=' w-[200px] h-[50px] bg-yellow-400 rounded-[20px] transition animate-bounce mt-[50px] shadow-[0_7px_2px_1px_red] drop-shadow-[0_0_20px_red] '>Start Game</button>
            </Link> <br />
            or

            <span className=' text-[20px] mt-[20px] text-yellow-400 font-semibold '>Select Theme</span>
            <Themes />
        </div>
    )
}

export default MainDash