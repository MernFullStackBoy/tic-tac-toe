import DarkSquares from "./Darksquares"

const DarkBoard = ({ squares, onClick }) => {
    return (
        <div>
            {squares.map((square, index) => (
                <DarkSquares key={index} value={square} onPlay={() => onClick(index)} />
            ))}
        </div>
    )
}

export default DarkBoard