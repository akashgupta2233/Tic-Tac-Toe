import Box from "./Box";
import "../App"

const Board = () => {
  return (
    <div className="board" >
      <div className="container text-center">
        <div className="row rr">
          <div className="col"><Box ind={0} /></div>
          <div className="col"><Box ind={1} /></div>
          <div className="col"><Box ind={2} /></div>
        </div>
        <div className="row rr">
          <div className="col"><Box ind={3} /></div>
          <div className="col"><Box ind={4} /></div>
          <div className="col"><Box ind={5} /></div>
        </div>
        <div className="row rr">
          <div className="col"><Box ind={6} /></div>
          <div className="col"><Box ind={7} /></div>
          <div className="col"><Box ind={8} /></div>
        </div>
      </div>
    </div>
  );
};

export default Board;