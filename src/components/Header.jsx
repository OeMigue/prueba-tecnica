import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
function Header() {
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  let navigate = useNavigate();
  function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <header className="header">
      <h2 className="header-usuario">{usuarioLogueado.nombre}</h2>
      <nav className="header-nav">
        <Link className="header-nav-item" to="">
          Home
        </Link>
        <Link className="header-nav-item" to="/home/productos">
          Productos
        </Link>
        <Link className="header-nav-item" to="/home/clientes">
          Clientes
        </Link>
        <Link className="header-nav-item" to="/home/crear-producto">
          Crear Producto
        </Link>
        <button
          onClick={cerrarSesion}
          className="header-nav-item"
          type="button"
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;
