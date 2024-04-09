import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";
import { UserPlaceHolder } from "../../api/api";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";

export default function Lazy() {
  const [users, setUsers] = useState([]); //Estado para almacenar los usuarios
  const [loading, setLoading] = useState(false); //Estado para indicar si se está cargando
  const [page, setPage] = useState(1); //Estado para el número de página
  const [hasMore, setHasMore] = useState(true); //Estado para indicar si hay más usuarios

  useEffect(() => {
    setLoading(true);
    fetch(`${UserPlaceHolder}?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          // Si no hay más usuarios, establecer hasMore a false
          setHasMore(false);
        } else {
          // Si hay más usuarios, agregarlos a la lista existente
          setUsers([...users, ...data]);
        }
        setLoading(false);
      });
  }, [page]);

  // Función para cargar más usuarios
  const handleLoadMore = () => {
    setPage(page + 1); //Incrementar el número de página
  };

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
      {loading && <p>Loading...</p>}
      {/* Mostrar mensaje cuando no hay más usuarios */}
      {!loading && !hasMore && <p>No hay más usuarios.</p>}
      {/* Deshabilitar el botón cuando no hay más usuarios */}
      {!loading && hasMore && (
        <button onClick={handleLoadMore} disabled={loading}>
          Cargar más usuarios
        </button>
      )}
    </>
  );
}
