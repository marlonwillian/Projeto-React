import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import FilterPlataform from "../FilterPlataform";
import CartButton from "../CartButton";

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
            <FilterPlataform fontsize="7px" id={`${id}`} onlylogo="true" nintendosize="20px" steamsize="20px"/>
          </div>
          <CartButton margintop="30px" price={price}/>
        </div>
      </Link>
    </section>
  );
}

export default Card;
