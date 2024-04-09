import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
//Como explique antes aqui hice una carpeta que se llama api y dentro de ella un archivo api.js para importar la url de la api
//aqui importo la url de la api para obtener los usuarios de manera global
import { UserPlaceHolder } from "../../api/api";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";

export default function Alluser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(UserPlaceHolder)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <Link to="/">
        <button className="Button_Styled">
          Boton hacia la pagina de inicio
        </button>
      </Link>
      <div>
        {/*Aqui mapeo los usuarios y los muestro en la pagina, como es sin filtros semostraran todos de gracias al componente de User Card*/}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
