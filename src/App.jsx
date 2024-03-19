import { BrowserRouter } from "react-router-dom"
import Index from "./components/route/Index"
import Game from "./components/game/Maintheme/Game"

const App = () => {
  return (
    <BrowserRouter>
      <div className=" max-w-[400px] h-[100vh] mx-auto ">
        <Index />
      </div>
    </BrowserRouter>
  )
}

export default App