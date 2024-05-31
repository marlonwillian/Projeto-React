import styles from "./GiftButton.module.css";

function GiftButton() {
  return (
    <>
      <div className={styles.price}>
        R$ 50,00
      </div>
      <div className={styles.price}>
        R$ 100,00
      </div>
      <div className={styles.price}>
        R$ 300,00
      </div>
      <div className={styles.price}>
        R$ 350,00
      </div>
      <div className={styles.price}>
        R$ 400,00
      </div>
      <div className={styles.price}>
        R$ 500,00
      </div>
    </>
  );
}

export default GiftButton;