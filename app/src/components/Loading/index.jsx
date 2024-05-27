import { useEffect, useState } from "react";
import styles from "./Loading.module.css";

function Loading({ opacity, height }) {
  const [display, setDisplay] = useState("flex")

  useEffect(() => {
    setTimeout(() => setDisplay("none"), 2000)
  }, [opacity]);

  return (
    <div 
      className={styles.container} 
      style={{ opacity: opacity, display: display, height: height}}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;