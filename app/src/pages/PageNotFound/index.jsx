import styles from "./PageNotFound.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <Header console="Consoles"/>
      <Banner
        img="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak73k92o47ko75/5de9d8bc4ffeabb209ec67ab3721ea281da5cd05.jpg"
        height="100vh"
        bgposition="right"
      >
        <div className={styles.content}>
          <div className={styles.lostText}>
            <h1 className={styles.title}>Se perdeu?!</h1>
            <h3 className={styles.description}>Você foi tão longe que acabou chegando em Los Santos. <br/>Volte para a página inicial.</h3>
            <Link to="/"><button className={styles.button}>Página inicial</button></Link><br/>
            <span>
              <span style={{fontWeight: "300"}}>DE </span>
              <Link to="/jogo/8" style={{textDecoration: "none", color: "white"}}><span style={{fontWeight: "bold"}}>GRAND THEFT AUTO V</span></Link>
            </span>
          </div>
        </div>
      </Banner>
    </>
  );
}

export default PageNotFound;