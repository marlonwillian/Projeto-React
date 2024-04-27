import styles from "./Banner.module.css";

function Banner({ children, img, height, bgposition, bgcolor, margintop, paddingtop, borderradius, textalign}) {
    return (
        <section 
            className={styles.banner}
            style={{
                backgroundImage: `url('${ img }')`, 
                height: height, 
                backgroundPosition: bgposition, 
                backgroundColor: bgcolor, 
                marginTop: margintop,
                paddingTop: paddingtop,
                borderRadius: borderradius,
                textAlign: textalign
            }}
        >  
            { children }
        </section>
    );  
}

export default Banner;