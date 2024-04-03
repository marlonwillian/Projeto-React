import styles from "./Footer.module.css";

function Footer({ color }) {
    return (
        <footer className={styles.footer} style={{backgroundColor: color}}><h1>Footer</h1></footer>
    );
}

export default Footer;
