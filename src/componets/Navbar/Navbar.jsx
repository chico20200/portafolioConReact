import React from "react";
import styles from "./Navbar.module.css"
export const Navbar = () =>{
    return(
        <div>
            <nav className={styles.navbar}>
                <a href="/" className={styles.title}>PORTAFOLIO</a>
                <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                        <li><a href="" >INICIO</a></li>
                        <li><a href="">ESTUDIOS</a></li>
                        <li><a href="">HERRAMIENTAS</a></li>
                        <li><a href="">DEPORTES</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}