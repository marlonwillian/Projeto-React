import styles from "./Category.module.css";

function Category({ title, children }) {
    return(
        <section className={styles.category}>
            <h2>{title}</h2>
            <div>
                { children }
            </div>
        </section>
    );
}

export default Category;