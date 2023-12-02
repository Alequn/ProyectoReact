import { NavLink } from "react-router-dom"

export const NavBar = () => {

    return (
        <nav className="container mt-2 d-flex">
            <NavLink to="/">
                <button className="btn btn-danger mx-2">Inicio</button>
            </NavLink>

            <NavLink to="/gender/male">
                <button className="btn btn-danger mx-2">Hombres</button>
            </NavLink>

            <NavLink to="/gender/female">
                <button className="btn btn-danger mx-2">Mujeres</button>
            </NavLink>

            <NavLink to="/gender/genderless">
                <button className="btn btn-danger mx-2">Sin genero</button>
            </NavLink>
        </nav>
    );

}