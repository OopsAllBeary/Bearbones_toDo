import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Navigation = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggle = () => {
        setMenuOpen(!menuOpen);
    }

    const menu = [
        // ROUTER
    ];

    return (
        <nav>
            {/* <div className='nav'>

            </div> */}
            <Outlet />
        </nav>
    )
}

export default Navigation