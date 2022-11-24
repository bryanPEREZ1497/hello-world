import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
export default () => {
    let activeClassName = "active";
    return (
        <nav className="navbar">
            <ul
            >
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                        to='/'>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                        to='/contact'>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                        to='/about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                        to='/tarea'>
                        Tarea
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

