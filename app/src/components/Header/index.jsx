import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={styles.header}>
            <h2>Nome</h2>
            <nav className={styles.nav}> 
                <Link to="/">Link 1</Link>
                <Link to="/">Link 2</Link>
                <Link to="/">Link 3</Link>
            </nav>
        </header>
    );
}

export default Header;
