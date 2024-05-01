import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import NintendoIcon from "../NintendoIcon";
import SearchGames from "../SearchGames";
import jogos from "../../json/games.json";
import GameList from "../GameList";
import { useCartContext } from "../../context/Cart";

function Header({ console, color, colorScrolled, shadow }) {
    // Hook para Scroll
    const [scrolled, setScrolled] = useState(false);

    // Hook para pesquisas
    const [showSearch, setSearch] = useState(false);
    const [searchText, setSearchText] = useState("");

    // Hook para menus
    const [showComponent, setComponent] = useState(false);

    // context
    const { inCart } = useCartContext()

    function searchBar() {
        return <input 
                    type="search"
                    placeholder="Buscar" 
                    className={`
                        ${styles.searchBar} 
                        ${showSearch ? styles.show : styles.hide}
                    `}
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                />
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
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} style={{ backgroundColor: scrolled ? colorScrolled : color, boxShadow: shadow }}>
            <nav className={styles.nav1}>
                <Link to="/"><i class="fa-solid fa-house"></i></Link>
            </nav>
            <nav className={styles.nav}>
                <a className={styles.a_con} onClick={() => setComponent(!showComponent)}>
                    <i style={{ marginRight: "10px" }}>
                        {console}
                    </i>
                    <span className={styles.seta}>
                        <i className={`fa-solid fa-chevron-down ${showComponent ? "fa-fade" : ""}`}></i>
                    </span>
                    <nav 
                        className={`
                            ${styles.consoles} 
                            ${showComponent ? styles.down : styles.up}
                        `}>
                        <Link to="/playstation" className={styles.ps_link}><i class="fa-brands fa-playstation"></i> PlayStation</Link>
                        <Link to="/nintendo" className={styles.ni_link}><NintendoIcon marginBottom="2"/> Nintendo</Link>
                        <Link to="/xbox" className={styles.xb_link}><i class="fa-brands fa-xbox"></i> Xbox</Link>
                    </nav>
                </a>
                <a>
                    {
                        showSearch ?
                            <i>
                                {searchBar()}
                                <i class="fa-solid fa-caret-left" style={{ cursor: "pointer" }} onClick={() => setSearch(false)}></i>
                                <SearchGames 
                                    jogos={jogos} 
                                    text={searchText} 
                                />
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
                <a className={styles.a_cart}>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span className={styles.quantidade}>0</span>
                    <nav 
                        className={`
                            ${styles.cart} 
                            
                        `}
                    >   
                        { 
                            <GameList 
                                jogos={inCart} 
                                arrow="false" 
                                width="400px" 
                                height="300px"/> 
                        }
                    </nav>
                    {/* <div className={styles.resumo}>
                        
                    </div> */}
                </a>
            </nav>
        </header>
    );
}

export default Header;
