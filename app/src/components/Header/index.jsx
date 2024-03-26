import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={styles.header}>
            <h2>Nome</h2>
            <nav className={styles.nav}> 
                <Link to="/">Consoles</Link>
                <Link to="/">PC</Link>
                <Link to="/">Link 3</Link>
            </nav>
        </header>
    );
}

export default Header;
