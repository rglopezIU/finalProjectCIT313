import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";


const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={isOpen ? "isOpen" : ""}>
                <button onClick={() => setIsOpen(!isOpen)}>&#8801;</button>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Events">Events</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Menu;