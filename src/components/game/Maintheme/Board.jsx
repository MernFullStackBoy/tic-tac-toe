import Squares from "./Squares"

const Board = ({ squares, onClick }) => {
    return (
        <div>
            {squares.map((square, index) => (
                <Squares key={index} value={square} onPlay={() => onClick(index)} />
            ))}
        </div>
    )
}

export default Board