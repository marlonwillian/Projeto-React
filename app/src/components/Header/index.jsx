import Menu from "../Menu";
import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function abrirMenu() {
    console.log('funciona')
    return <Menu>
        <h1>menu</h1>
    </Menu>
}

function Header() {
    return (
        <header className={styles.header}>
            <h2>Nome</h2>
            <nav className={styles.nav}> 
                <a onMouseOver={abrirMenu}><i class="fa-solid fa-gamepad"></i> Consoles</a>
                <a><i class="fa-solid fa-magnifying-glass"></i> Pesquisa</a>
                <a><i class="fa-solid fa-computer"></i> PC</a>
            </nav>
            <nav className={styles.nav2}> 
                <Link to="https://github.com/marlonwillian" target="_blank"><i class="fa-solid fa-user"></i></Link>
            </nav>
        </header>
    );
}

export default Header;
