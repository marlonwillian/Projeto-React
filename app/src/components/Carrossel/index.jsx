import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Carrossel.module.css";

function Carrossel() {
    return (
        <div className={styles.div}>
            <Carousel>
                <Carousel.Item interval={6500} color="black">
                    <img
                        src="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/65c516a1bf61460016d58895/xttrolpbdsvlsuzmqiha.jpg"
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item interval={6500}>
                    <img
                        src="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/65f220cc16d02e0014ce6afb/qocgzd6knzmiodmmcktx.jpg"
                        alt="Image Two"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrossel;