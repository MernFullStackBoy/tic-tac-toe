const Squares = ({ value, onPlay }) => {
    return (
        <button className=" w-[80px] m-[10px] rounded-[20px] text-[40px] text-green-500 h-[80px] border-[2px] border-yellow-500 " onClick={onPlay}>{value}</button>
    )
}

export default Squares