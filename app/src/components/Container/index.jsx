import styles from "./Container.module.css";

function Container({ children, color }) {
    return (
        <section className={styles.container} style={{backgroundColor: color}}>  
            { children }
        </section>
    );  
}

export default Container;