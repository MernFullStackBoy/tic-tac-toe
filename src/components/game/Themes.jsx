import { Link } from "react-router-dom"

const Themes = () => {
  return (
    <div className=" flex gap-[20px] mt-[40px] ">
        <Link to="/dark">
            <div className=" w-[130px] h-[200px] text-center bg-dark ">Dark</div>
        </Link>
        <Link to="/light">
            <div className="w-[130px] h-[200px] text-center bg-light">Light</div>
        </Link>
    </div>
  )
}

export default Themes