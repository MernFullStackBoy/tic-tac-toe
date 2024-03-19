import { Link } from "react-router-dom"

const DarkWho = () => {
    return (
        <div className=" w-[100%] h-[633px] bg-dark p-[20px] ">
            <h1 className=" text-center text-[40px] text-yellow-400 ">DarkWho is your player</h1>
            <div className=" flex justify-center items-center mt-[100px] gap-[20px] ">
                <Link to='/darkmainplay'>
                    <div className=" w-[100px] h-[100px] bg-white text-green-500 rounded-[20px] flex justify-center items-center text-[50px] ">X</div>
                </Link>
                or
                <Link to='/darkmainplay'>
                    <div className="w-[100px] h-[100px] bg-white text-green-500 rounded-[20px] flex justify-center items-center text-[50px]">O</div>
                </Link>
            </div>
        </div>
    )
}

export default DarkWho