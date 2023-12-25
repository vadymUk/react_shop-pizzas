import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./WaterCardItem.module.css";
import { TiTick } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import Modal from "react-modal";
import WindowWater from "../../ModalsWindows/WindowWaterCardonAdd/WindowWater";

const WaterCardItem = ({ imageUrl, title, price, id }) => {
    const { cart } = useSelector((state) => state.cart);
    const added = cart.some((el) => el.id === id);
    const [openWaterWind, setOpenWaterWind] = useState(false);
    return (
        <>
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
                    {!added ? (
                        <button
                            className={styles.add}
                            onClick={() => setOpenWaterWind(true)}
                        >
                            <TiPlus
                                color='#FFF'
                                size='36px'
                            />
                        </button>
                    ) : (
                        <button
                            className={styles.add}
                            onClick={() => setOpenWaterWind(true)}
                        >
                            <TiTick
                                color='#FFF'
                                size='36px'
                            />
                        </button>
                    )}
                </div>
            </div>
            <Modal
                className='windowCart'
                closeTimeoutMS={1000}
                onRequestClose={() => {
                    setOpenWaterWind(false);
                }}
                isOpen={openWaterWind}
                ariaHideApp={false}
            >
                {
                    <WindowWater
                        setOpenWaterWind={setOpenWaterWind}
                        imageUrl={imageUrl}
                        title={title}
                        price={price}
                        id={id}
                    />
                }
            </Modal>
        </>
    );
};

export default WaterCardItem;
