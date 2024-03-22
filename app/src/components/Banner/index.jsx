import styles from "./Banner.module.css";

function Banner({ children }) {
    return (
        <section className={styles.banner}>  
            { children }
        </section>
    );  
}

export default Banner;