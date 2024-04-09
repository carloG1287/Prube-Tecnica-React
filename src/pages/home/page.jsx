import { Link } from "react-router-dom";
import "../../Styles/Home.css";

const Home = () => {
  // Renderiza los botones para navegar a las diferentes páginas
  return (
    <>
      <h1 className="Title">Bienvenido a la pagina de usuarios</h1>
      <h2 className="Subtitle">
        Aqui podras ver la informacion de los usuarios de la API
      </h2>
      <div className="Buttons">
        <p>En este boton podras ver todos los usuarios de la API</p>
        <Link to="/alluser">
          <button className="Button_Styled">
            Boton hacia la pagina de todos los usuarios
          </button>
        </Link>
        <p>
          En este boton podras ver los usuarios de la API de 5 en 5 de manera
          limitada
        </p>
        <Link to="/lazy">
          <button className="Button_Styled">
            Boton hacia la pagina de los usuarios limitados
          </button>
        </Link>
        <p>
          En este boton podras ver los usuarios de la API filtrados por nombre
        </p>
        <Link to="/search">
          <button className="Button_Styled">
            Boton hacia la pagina de los usuarios por filtro
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
