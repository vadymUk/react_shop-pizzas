import styles from "./PizzaCardItem.module.css";
// import { TiTick } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

const PizzaCardItem = ({ imageUrl, title, price }) => {
    return (
        <div className={styles.card_wrapper}>
            <img
                className={styles.card_image}
                src={imageUrl}
                alt='pizza'
            />
            <div>
                <h2 className={styles.card_title}>{title}</h2>
                <p className={styles.card_desc}>
                    Томатный соус, моцарелла, горгонзола, крем, пармезан.
                </p>
                <div className={styles.wrapper_footer}>
                    <p className={styles.card_price}>{price} грн</p>
                    <button className={styles.add}>
                        <TiPlus
                            color='#FFF'
                            size='36px'
                        />
                    </button>
                    {/* <button className={styles.add_click}>
                    <TiTick />
                </button> */}
                </div>
            </div>
        </div>
    );
};

export default PizzaCardItem;
