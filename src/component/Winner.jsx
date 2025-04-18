import { useContext } from "react"
import gameContext from "../store/Context"


const Winner=({ID})=>{
    const {setArr, setWinner} = useContext(gameContext);
    const handlePlayAgain=()=>{
        setArr(Array(9).fill(null));
        setWinner(null);
    }
    return(
        <div className="py-5">
      <div className="col-lg-6 mx-auto">
      <h1 className="display-5 fw-bold text-white">{ID} WON </h1>

        <p className="fs-5 mb-4"> A Simple Tic Tac Toe Game </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" onClick={handlePlayAgain} className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Play Again</button>
        </div>
      </div>
    </div>
    )
}

export default Winner;