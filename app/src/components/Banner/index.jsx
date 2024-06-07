import styles from "./Banner.module.css";

function Banner({ children, img, height, bgposition, bgcolor, margintop, paddingtop, borderradius, textalign, isHome, isCarrossel}) {
    return (
        <section 
            className={
                `${styles.banner} 
                ${
                      isHome ? styles.bannerHome 
                    : isCarrossel ? styles.bannerCarrossel
                    : ""
                }`
            }
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