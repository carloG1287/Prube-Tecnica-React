import { Link } from "react-router-dom";
import "../../Styles/Home.css";

const Home = () => {
  // Renderiza los botones para navegar a las diferentes páginas
  return (
    <div className="Buttons">
      <Link to="/alluser">
        <button className="Button_Styled">
          Boton hacia la pagina de todos los usuarios
        </button>
      </Link>
      <Link to="/lazy">
        <button className="Button_Styled">
          Boton hacia la pagina de los usuarios cargando de manera lenta
        </button>
      </Link>
      <Link to="/search">
        <button className="Button_Styled">
          Boton hacia la pagina de los usuarios por filtro
        </button>
      </Link>
    </div>
  );
};

export default Home;
