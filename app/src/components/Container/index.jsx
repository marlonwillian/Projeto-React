import styles from "./Container.module.css";

function Container({ children, color, background, marginTop, paddingTop,bordertop }) {
    return (
        <section className={styles.container} 
            style={{
                backgroundColor: color, 
                background: background, 
                marginTop: marginTop, 
                paddingTop: paddingTop, 
                borderTop: bordertop
            }}>  
            { children }
        </section>
    );  
}

export default Container;