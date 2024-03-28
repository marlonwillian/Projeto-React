import styles from "./Banner.module.css";

function Banner({ children, img }) {
    return (
        <section 
            className={styles.banner}
            style={{backgroundImage: `url('${ img }')`}}
        >  
            { children }
        </section>
    );  
}

export default Banner;