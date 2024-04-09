import React from "react";
import { useState } from "react";
//aqui vengo a importar el componente Filters que es el que tiene los filtros de busqueda mediante un select
export function Filters({ onchange }) {
  const handleChangeName = (event) => {
    onchange((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  return (
    <section>
      <div>
        <label htmlFor="name">Nombre:</label>
        {/*Aqui creo un select con los nombres de los usuarios que se pueden filtrar*/}
        <select id="name" onChange={handleChangeName}>
          <option value="all">Todos</option>
          <option value="Leanne Graham">Leanne Graham</option>
          <option value="Ervin Howell">Ervin Howell</option>
          <option value="Clementine Bauch">Clementine Bauch</option>
          <option value="Patricia Lebsack">Patricia Lebsack</option>
          <option value="Chelsey Dietrich">Chelsey Dietrich</option>
          <option value="Mrs. Dennis Schulist">Mrs. Dennis Schulist</option>
          <option value="Kurtis Weissnat">Kurtis Weissnat</option>
          <option value="Nicholas Runolfsdottir V">
            Nicholas Runolfsdottir V
          </option>
          <option value="Glenna Reichert">Glenna Reichert</option>
          <option value="Clementina DuBuque">Clementina DuBuque</option>
        </select>
      </div>
    </section>
  );
}
