import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
// Importa la URL de la API para obtener usuarios de manera global
import { UserPlaceHolder } from "../../api/api";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";

// URL de la API para obtener usuarios pero usare la api como una constante global importandola desde api.js
//const UserPlaceHolder = 'https://jsonplaceholder.typicode.com/users';

export default function Lazy() {
  // Estado para almacenar la lista de usuarios
  const [users, setUsers] = useState([]);
  // Estado para controlar si se está cargando más datos
  const [loading, setLoading] = useState(false);
  // Estado para representar la página actual de datos que se cargarán
  const [page, setPage] = useState(1);

  // Efecto que se ejecuta cuando cambia la página
  useEffect(() => {
    setLoading(true); // Establece el estado de carga a true
    // Realiza la solicitud a la API con la página actual y un límite de resultados
    fetch(`${UserPlaceHolder}?_page=${page}&_limit=5`) // Cambia el límite según tus necesidades
      .then((res) => res.json()) // Convierte la respuesta a JSON
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data]); // Agrega los nuevos usuarios al estado
        setLoading(false); // Establece el estado de carga a false una vez que se completa la carga
      });
  }, [page]); // Se ejecuta cada vez que cambia la página

  // Efecto que se ejecuta para detectar el desplazamiento
  useEffect(() => {
    // Función que maneja el desplazamiento
    function handleScroll() {
      // Verifica si el usuario ha llegado al final de la página y no hay carga en progreso
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1); // Incrementa la página para cargar más datos
      }
    }

    window.addEventListener("scroll", handleScroll); // Agrega un listener de evento de desplazamiento
    // Elimina el listener cuando el componente se desmonta para evitar fugas de memoria
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]); // Se ejecuta cuando cambia el estado de carga

  // Renderiza los usuarios y muestra un indicador de carga si se están cargando más datos
  return (
    <>
      <Link to="/">
        <button className="Button_Styled">
          Boton hacia la pagina de inicio
        </button>
      </Link>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {loading && <p>Loading...</p>}{" "}
      {/* Muestra un mensaje de carga si se está cargando más datos */}
    </>
  );
}
