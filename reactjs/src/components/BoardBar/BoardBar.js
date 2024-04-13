import './BoardBar.scss';

const BoardBar = ({correoUsuario}) => {
    
    return(
        <nav className="navbar-board">
            <h2 className="text-center">Bienvenido usuario {correoUsuario}</h2>
        </nav>
    )
}

export default BoardBar;