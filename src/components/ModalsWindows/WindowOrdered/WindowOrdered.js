import React from "react";
import styles from "./WindowOrdered.module.css";

const WindowOrdered = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>СПАСИБО ЗА ПОКУПКУ!</p>
            <p className={styles.descr}>
                Наш менеджер свяжется с Вами в ближайшее время!
            </p>
            <img
                className={styles.img}
                src='./img/intersect.png'
                alt='pizza'
            />
        </div>
    );
};

export default WindowOrdered;
