import { NavLink } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    return (
        <nav className="container navbar navColor mt-2 d-flex">
            <NavLink to="/">
                <button className="btn btn-danger mx-2">Inicio</button>
            </NavLink>

            <NavLink to="/category/microphone">
                <button className="btn btn-danger mx-2">Micrófonos</button>
            </NavLink>

            <NavLink to="/category/headphones">
                <button className="btn btn-danger mx-2">Auriculares</button>
            </NavLink>

            <NavLink to="/category/console">
                <button className="btn btn-danger mx-2">Consolas</button>
            </NavLink>

            <NavLink to="/category/console">
                <img src="https://i.imgur.com/JRRWMsq.png" alt="carrito de compras" />
            </NavLink>
        </nav>
    );

}