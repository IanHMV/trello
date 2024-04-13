import AppBar from "../AppBar/AppBar";
import BoardBar from "../BoardBar/BoardBar";
import BoardContent from "../BoardContent/BoardContent";
import "./Proyecto.scss";

function Proyecto({ correoUsuario }) {
  return (
    <div className="trello-master">

      <AppBar />
      <BoardBar correoUsuario={correoUsuario} />
      <BoardContent />

    </div>
  );
}

export default Proyecto;
