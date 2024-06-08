import styles from "./Container.module.css";

function Container({ children, color, background, marginTop, paddingBottom, paddingTop, bordertop, isHome, isCategory}) {
    return (
        <section 
            className={`
                ${styles.container} 
                ${isHome ? styles.homeContainer : isCategory ? styles.categoryContainer : ""}
            `} 
            style={{
                backgroundColor: color, 
                background: background, 
                marginTop: marginTop, 
                paddingBottom: paddingBottom, 
                paddingTop: paddingTop, 
                borderTop: bordertop
            }}>  
            { children }
        </section>
    );  
}

export default Container;