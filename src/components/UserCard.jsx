import React from "react";
import "../Styles/UserCard.css";
// Definición del componente UserCard
function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="Background">
        <div className="user-name">
          {/* Aqui se renderiza el nombre del usuario usando la propiedad name del objeto user */}
          <h2>{user.name}</h2>
        </div>
      </div>
      <h3>
        <strong>Informacion de Contacto</strong>
      </h3>
      <div className="CardInfo">
        <div>
          <p>
            <strong>Telefono:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>Direccion:</strong> {user.address.street},{" "}
            {user.address.suite}, {user.address.city}
          </p>
          <p>
            <strong>Codigo Postal:</strong>
            {user.address.zipcode}
          </p>
        </div>
        <div>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Compañia:</strong>
            {user.company.name}
          </p>
          <p>
            <strong>Lema:</strong>
            {user.company.catchPhrase}
          </p>
          <p>
            <strong>Servicios:</strong>
            {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
