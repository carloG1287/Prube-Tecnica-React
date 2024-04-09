import { Filters } from "./Filters";
// aqui exporto el componente Header que ve el estado "changeFilters" que tiene dentro un Filter para que pueda manipular los filtros de busqueda
export function Header({ changeFilters }) {
  return (
    <div>
      <h1>Busqueda de Usuario</h1>
      {/*Aqui renderizo el componente Filters y le paso la funcion changeFilters definiendola en onchange*/}
      <Filters onchange={changeFilters} />
    </div>
  );
}
