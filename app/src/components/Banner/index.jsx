import styles from "./Banner.module.css";

function Banner({ children, img, height, bgposition, margintop}) {
    return (
        <section 
            className={styles.banner}
            style={{backgroundImage: `url('${ img }')`, height: height, backgroundPosition: bgposition, marginTop: margintop}}
        >  
            { children }
        </section>
    );  
}

export default Banner;