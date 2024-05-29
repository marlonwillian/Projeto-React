import styles from "./Category.module.css";

function Category({ title, children }) {
    return(
        <section className={styles.category}>
            <h2><span className={styles.line}>.</span>{title}</h2>
            <div>
                { children }
            </div>
        </section>
    );
}

export default Category;