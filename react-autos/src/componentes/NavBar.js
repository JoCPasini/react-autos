import React from 'react'

import autos from '../data/autos.json'

export const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a className="nav-link" href="/">HOME <span className="sr-only"></span></a>
                        </li>
                        <li class="nav-item active">
                            <a className="nav-link" href="/getAutos">Nuestros Autos <span className="sr-only"></span></a>
                        </li>
                        <li class="nav-item active">
                            <a className="nav-link" href="/">Contacto <span className="sr-only"></span></a>
                        </li>
                        <li class="nav-item active">
                            <a className="nav-link" href="/destacados">Destacados <span className="sr-only"></span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">

            </div>
        </div>
    )
}
export default NavBar;
