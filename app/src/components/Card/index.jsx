import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id, title }) {

  // const { favorite, addFavorite } = useFavoriteContext()
  // const isFavorite = favorite.some((fav) => fav.id === id)
  // const icone = !isFavorite ? iconFavorite : unfavorite

  return (
    <section className={styles.section}>
      <Link className={styles.link} to={`/assistir/${id}`}>
        <div className={styles.card}>
          <img src={`https://i.ytimg.com/vi/${id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjiySFcj2ANPuhxMzgYaonZFtBUw`}
          alt="Capa" className={styles.cover} />
          <p className={styles.card}>{`${title}`}</p>
          <h7>logo das plataformas</h7>
          <br/>
          <h7>botão de compra e preço</h7>
          {/* <img src={`https://i.ytimg.com/vi/${id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjiySFcj2ANPuhxMzgYaonZFtBUw`} alt="Capa" className={styles.cover} /> */}
        </div> 
      </Link>
      {/* <figure className={styles.icon} onClick={() => addFavorite({id})}>
        <img src={icone} alt="favorito"/>
      </figure> */}
    </section>  
  );
}

export default Card;
