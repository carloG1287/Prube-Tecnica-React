import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
import { UserPlaceHolder } from "../../api/api";
//aqui me traigo el componente header que tiene dentro un Filter para que pueda manipular los filtros de busqueda
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export default function Search() {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    name: "all",
  });

  // Función para filtrar la lista de usuarios
  const filterUsers = (users) => {
    return users.filter((user) => {
      //aqui digo que si el filtro es all o el nombre del usuario es igual al filtro de busqueda me devuelva el usuario
      return filters.name === "all" || user.name === filters.name;
    });
  };

  useEffect(() => {
    fetch(UserPlaceHolder)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  // Filtra la lista de usuarios según los filtros seleccionados
  const filteredUsers = filterUsers(users);

  return (
    <>
      {/*Aqui renderizo el componente Header y le paso la funcion setFilters definiendola en 
      changeFilters para que pueda manipular los filtros de busqueda*/}
      <Header changeFilters={setFilters} />
      <div>
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <Link to="/">
        <button className="Button_Styled">
          Boton hacia la pagina de inicio
        </button>
      </Link>
    </>
  );
}
