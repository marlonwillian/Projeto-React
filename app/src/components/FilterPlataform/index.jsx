import styles from "./FilterPlataform.module.css";
import jogo from "../../json/playstation.json";

function FilterPlataform( {fontsize, marginbottom}) {
    const consoles = ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'Nintendo Switch', 'PC'];
    
    function filterPlataform(index) {
        return jogo[7].console.filter(jogo => jogo.console === consoles[index])
    }

    return (
        filterPlataform().map(plataform => plataform == "PS5" ?
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "psfont", color: "black", backgroundColor: "white", borderRadius: "5px", marginTop: "10px"}}>
                {plataform}
        </span>
        : plataform == "PS4" ?
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "psfont", color: "white", backgroundColor: "black", border: "0.1px solid white", borderRadius: "5px", marginTop: "10px"}}>
                {plataform}
        </span>
        : plataform == "XBOX X|S" ?
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "xboxfont", color: "white", backgroundColor: "green", borderRadius: "2px", marginTop: "10px"}}>
                <span><i class="fa-brands fa-xbox"></i> {plataform}</span>
        </span> : plataform == "XBOX" ?
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "xboxfont", color: "white", backgroundColor: "green", borderRadius: "2px", marginTop: "10px"}}>
                <span><i class="fa-brands fa-xbox"></i> {plataform} <span style={{fontSize: fontsize, fontFamily: "arial", fontWeight: "500"}}>ONE</span></span>
        </span> : plataform == "Nintendo" ?
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "nintendofont", fontWeight: "100", color: "white", backgroundColor: "red", padding: "10x"}}>
                <span className={styles.nintendo}>{plataform}</span>
        </span> : plataform == "STEAM" ?
        <span
            className={styles.plataform}
            style={{fontSize: fontsize, fontFamily: "steamfont", color: "white", backgroundColor: "#132239", border: "0.1px solid white"}}>
                <span><i class="fa-brands fa-steam"></i> {plataform}</span>
        </span> : <span></span>)
    );
}

export default FilterPlataform;