import styles from "./WaterCardItem.module.css";
// import { TiTick } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

const WaterCardItem = ({ imageUrl, title, price }) => {
    return (
        <div className={styles.card_wrapper}>
            <img
                className={styles.card_image}
                src={imageUrl}
                alt='cola'
            />
            <div className={styles.wrapper_footer}>
                <p className={styles.card_price}>
                    <span>{title}</span> <br /> от {price} грн
                </p>
                <button className={styles.add}>
                    <>
                        <TiPlus
                            color='#FFF'
                            size='36px'
                        />
                    </>
                </button>
                {/* <div className={styles.add_click}>
                    <TiTick />
                </div> */}
            </div>
        </div>
    );
};

export default WaterCardItem;
