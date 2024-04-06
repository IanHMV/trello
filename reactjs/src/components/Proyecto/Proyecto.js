import AppBar from "../AppBar/AppBar";
import BoardBar from "../BoardBar/BoardBar";
import BoardContent from "../BoardContent/BoardContent";
import "./proyecto.scss";

function Proyecto() {
  return (
    <div className="trello-master">

      <AppBar />
      <BoardBar />
      <BoardContent />

    </div>
  );
}

export default Proyecto;
