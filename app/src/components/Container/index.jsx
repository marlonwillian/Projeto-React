import styles from "./Container.module.css";

function Container({ children, color, background, marginTop, paddingTop }) {
    return (
        <section className={styles.container} style={{backgroundColor: color, background: background, marginTop: marginTop, paddingTop: paddingTop}}>  
            { children }
        </section>
    );  
}

export default Container;