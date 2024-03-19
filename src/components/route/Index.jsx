import { Route, Routes } from "react-router-dom"
import MainDash from "../game/MainDash"
import Who from "../game/Maintheme/Who"
import Game from "../game/Maintheme/Game"
import DarkWho from "../game/Darktheme/DarkWho"
import Darkgame from "../game/Darktheme/Darkgame"
import LightWho from "../game/Lighttheme/LightWho"
import Lightgame from "../game/Lighttheme/LightGame"

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainDash />} />
                <Route path="/who" element={<Who />} />
                <Route path="/light" element={<LightWho />} />
                <Route path='/mainplay' element={<Game />} />
                <Route path='/dark' element={<DarkWho />} />
                <Route path='/darkmainplay' element={<Darkgame />} />
                <Route path='/lightmainplay' element={<Lightgame />} />
            </Routes>
        </div>
    )
}

export default Index