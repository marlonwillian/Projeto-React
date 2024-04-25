import styles from "./SearchCard.module.css";

function SearchCard() {
    return (
        <div className={styles.searchCard}>
            <div className={styles.searchGame}>
                <img 
                    src="https://4kwallpapers.com/images/wallpapers/marvels-spider-man-2560x1440-11609.jpeg" 
                    alt="título do jogo"
                />
                <div className={styles.info}>
                    <span className={styles.title}>Marvel's Spider-Man 2</span>
                    <span className={styles.price}>R$ 349,00</span>
                </div>
                <hr/>
            </div>
            <div className={styles.searchGame}>
                <img 
                    src="https://4kwallpapers.com/images/wallpapers/marvels-spider-man-2560x1440-11609.jpeg" 
                    alt="título do jogo"
                />
                <div className={styles.info}>
                    <span className={styles.title}>Marvel's Spider-Man 2</span>
                    <span className={styles.price}>R$ 349,00</span>
                </div>
            </div>
        </div>
    );
}

export default SearchCard;