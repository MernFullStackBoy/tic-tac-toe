import LightSquares from "./LightSquares"

const LightBoard = ({ squares, onClick }) => {
    return (
        <div>
            {squares.map((square, index) => (
                <LightSquares key={index} value={square} onPlay={() => onClick(index)} />
            ))}
        </div>
    )
}

export default LightBoard