import { createContext, useState, useEffect } from "react";

const gameContext=createContext({
    arr:[],
    isXTurn:true,
    winner:null,
    setWinner:()=>{},
    setIsXTurn:()=>{},
    setArr:()=>{},
    checkVictory:()=>{}
});

export default gameContext;

const GameContextProvider=({children})=>{
    const [winner, setWinner] = useState(null);
    const [isXTurn, setIsXTurn] = useState(true)
    const [arr, setArr] = useState(Array(9).fill(null));
    const checkVictory =()=>{
        if(arr[0]==arr[2] && arr[0]==arr[1] && arr[1]==arr[2]){
            return arr[0];
        }
        else if(arr[3]==arr[5] && arr[4]==arr[5] && arr[3]==arr[4]){
            return arr[3];
        }
        else if(arr[6]==arr[8] && arr[6]==arr[7] && arr[7]==arr[8]){
            return arr[6];
        }
        else if(arr[0]==arr[8] && arr[0]==arr[4] && arr[4]==arr[8]){
            return arr[0];
        }
        else if(arr[2]==arr[6] && arr[2]==arr[4] && arr[4]==arr[6]){
            return arr[2];
        }else{
            return null;
        }
    }
    useEffect(()=>{
        setWinner(checkVictory);

      }, [arr])
    return (
        <gameContext.Provider value={{arr, setArr, isXTurn, setIsXTurn, winner, setWinner}} >
            {children}
        </gameContext.Provider>
    )
}

export {GameContextProvider};