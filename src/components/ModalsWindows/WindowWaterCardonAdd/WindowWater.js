import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice/cartSlice";
import styles from "./WindowWater.module.css";

const WindowWater = ({ setOpenWaterWind, imageUrl, title, price, id }) => {
    const dispatch = useDispatch();
    const average = useRef(null);
    const big = useRef(null);
    const [totalPriceWater, setTotalPriceWater] = useState("24");

    const waterItemCart = {
        id,
        imageUrl,
        title,
        price,
        count: 1,
    };
    const addWaterToCart = () => {
        if (average.current.checked) {
            waterItemCart.price = average.current.value;
        } else if (big.current.checked) {
            waterItemCart.price = big.current.value;
        } else {
            waterItemCart.price = "24";
        }
        dispatch(addToCart(waterItemCart));
        setOpenWaterWind(false);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.title}>Напиток</p>
                <p className={styles.name}>{title}</p>
            </div>
            <div className={styles.main}>
                <img
                    src={imageUrl}
                    alt='water'
                />
                <div className={styles.smallSize}>
                    <label htmlFor='small'>Обьем 0.5л</label>
                    <input
                        id='small'
                        type='radio'
                        name='size'
                        defaultChecked
                        onClick={() => {
                            setTotalPriceWater("24");
                        }}
                    />
                    <p>24 грн</p>
                </div>
                <div className={styles.averageSize}>
                    <label htmlFor='average'>Обьем 1л</label>
                    <input
                        ref={average}
                        id='average'
                        type='radio'
                        name='size'
                        value='38'
                        onClick={() => {
                            setTotalPriceWater("38");
                        }}
                    />
                    <p>38 грн</p>
                </div>
                <div className={styles.bigSize}>
                    <label htmlFor='big'>Обьем 2л</label>
                    <input
                        ref={big}
                        id='big'
                        type='radio'
                        name='size'
                        value='46'
                        onClick={() => {
                            setTotalPriceWater("46");
                        }}
                    />
                    <p>46 грн</p>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Стоимость: {totalPriceWater} грн</p>
                <button onClick={addWaterToCart}>добавить в корзину</button>
            </div>
            <div
                className={styles.wrapperClose}
                onClick={() => {
                    setOpenWaterWind(false);
                }}
            >
                <div className={styles.close}>&times;</div>
            </div>
        </div>
    );
};

export default WindowWater;
