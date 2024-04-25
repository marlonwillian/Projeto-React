import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import MenuConsoles from "../MenuConsoles";

function Header({ console, color, shadow }) {
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setSearch] = useState(false);
    const [showComponent, setComponent] = useState(false);

    function searchBar() {
        return <input type="text" className={
            showSearch ? styles.show : styles.hide
        } />
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} style={{ backgroundColor: color, boxShadow: shadow }}>
            <nav className={styles.nav1}>
                <Link to="/"><i class="fa-solid fa-house"></i></Link>
            </nav>
            <nav className={styles.nav}>
                {
                    showComponent ?
                        <a className={styles.a_con} onClick={() => setComponent(false)}>
                            <i style={{ marginRight: "10px" }}>
                                {console}
                            </i>
                            <span className={styles.seta} >
                                <i className="fa-solid fa-chevron-down fa-fade"></i>
                            </span>
                            <MenuConsoles className={styles.menu}/>
                        </a>
                        :
                        <a className={styles.a_con} onClick={() => setComponent(true)}>
                            <i style={{ marginRight: "10px" }}>
                                {console}
                            </i>
                            <span className={styles.seta}>
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                            
                        </a>
                }
                <a>
                    {
                        showSearch ?
                            <i>
                                {searchBar()}
                                <i class="fa-solid fa-x" style={{ cursor: "pointer" }} onClick={() => setSearch(false)}></i>
                            </i>
                            :
                            <i>
                                {searchBar()}
                                <i class="fa-solid fa-magnifying-glass" style={{ cursor: "pointer" }}
                                    onClick={() => { setSearch(true) }}
                                ></i>
                            </i>
                    }
                </a>
                <a className={styles.a_pc}>
                    <span><i class="fa-solid fa-chevron-down"></i></span> PC
                </a>
            </nav>
            <nav className={styles.nav3}>
                <Link to="https://github.com/marlonwillian" target="_blank"><i class="fa-solid fa-user"></i></Link>
            </nav>
        </header>
    );
}

export default Header;
