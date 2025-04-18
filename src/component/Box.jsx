import { useContext } from "react"
import "../App"
import gameContext from "../store/Context";

const Box=({ind})=>{
    const {arr, setArr, isXTurn, setIsXTurn} = useContext(gameContext);
    const handleClick=()=>{
        let newArr = [...arr];
        newArr[ind] = isXTurn? "X" : "O";
        setArr(newArr);
        setIsXTurn(!isXTurn);
    }
    return (
        <div onClick={handleClick} className="box">{arr[ind]}</div>
    )
}

export default Box;