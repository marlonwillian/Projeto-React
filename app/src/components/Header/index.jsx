import Menu from "../Menu";
import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header( { console, color, shadow } ) {
    return (
        <header className={styles.header} style={{backgroundColor: color, boxShadow: shadow}}>
            <nav className={styles.nav1}> 
                <Link to="/"><i class="fa-solid fa-house"></i></Link>
            </nav>
            <nav className={styles.nav}> 
                <a className={styles.a_con}>
                    {console} <span className={styles.seta}><i class="fa-solid fa-chevron-down"></i></span>
                    <nav className={styles.consoles}>
                        <Link to="/playstation" className={styles.ps_link}><i class="fa-brands fa-playstation"></i> PlayStation</Link>
                        <Link to="/nintendo" className={styles.ni_link}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.04 20.4H7.12c-.93 0-1.82-.4-2.48-1.04C4 18.7 3.6 17.81 3.6 16.88V7.12c0-.93.4-1.82 1.04-2.48C5.3 4 6.19 3.62 7.12 3.62h2.92zM7.12 2A5.12 5.12 0 0 0 2 7.12v9.76C2 19.71 4.29 22 7.12 22h4.53V2zM5.11 8c0 1.04.84 1.88 1.89 1.88c1.03 0 1.87-.84 1.87-1.88S8.03 6.12 7 6.12c-1.05 0-1.89.84-1.89 1.88m12.5 3c1.11 0 2.01.89 2.01 2c0 1.12-.9 2-2.01 2c-1.11 0-2.03-.88-2.03-2c0-1.11.92-2 2.03-2m-.73 11A5.12 5.12 0 0 0 22 16.88V7.12C22 4.29 19.71 2 16.88 2h-3.23v20z"/></svg> Nintendo</Link>
                        <Link to="/xbox" className={styles.xb_link}><i class="fa-brands fa-xbox"></i> Xbox</Link>
                    </nav>
                </a>
                <a><i class="fa-solid fa-magnifying-glass"></i></a>
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
