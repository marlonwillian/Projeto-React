import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import FilterPlataform from "../FilterPlataform";

function Card({ id, title, price, color, img }) {
  return (
    <section className={styles.section}>
      <Link className={styles.link} to={`/jogo/${id}`}>
        <div className={styles.card} style={{ backgroundColor: color }}>
          <img
            src={img}
            alt="Capa"
            className={styles.cover}
          />
          <span className={styles.title}>
            {`${title}`}
          </span>
          <div className={styles.div_plataforms}>
            <FilterPlataform fontsize="7px" id={`${id}`} />
          </div>
          <button className={styles.btn}>
            <span className={styles.discount}>-50%</span>
            <span>{ `${price}` }</span>
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </Link>
    </section>
  );
}

export default Card;
