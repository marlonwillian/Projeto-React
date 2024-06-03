import styles from "./Container.module.css";

function Container({ children, color, background, marginTop, paddingBottom, paddingTop,bordertop }) {
    return (
        <section className={styles.container} 
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