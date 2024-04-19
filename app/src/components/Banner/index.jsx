import styles from "./Banner.module.css";

function Banner({ children, img, height, bgposition, bgcolor, margintop}) {
    return (
        <section 
            className={styles.banner}
            style={{backgroundImage: `url('${ img }')`, height: height, backgroundPosition: bgposition, backgroundColor: bgcolor, marginTop: margintop}}
        >  
            { children }
        </section>
    );  
}

export default Banner;