import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice/cartSlice";

import styles from "./WindowPizza.module.css";

const WindowPizza = ({
    closeModal,
    id,
    title,
    price,
    imageUrl,
    setIsOpenAddedToCart,
    setModalIsOpen,
}) => {
    const dispatch = useDispatch();

    const [borderPizza, setBorderPizza] = useState("");
    const [orderPrice, setOrderPrice] = useState(price);

    const sizeM = useRef(null);
    const sizeL = useRef(null);

    const [isActivFirstRadio, setIsActivFirstRadio] = React.useState(false);
    const [isActivSecondRadio, setIsActivSecondRadio] = React.useState(false);

    const onClickFirstRadio = () => {
        setIsActivSecondRadio(false);
        setIsActivFirstRadio(true);
        setBorderPizza("+сосисочный бортик");
    };

    const onClickSecondRadio = () => {
        setIsActivFirstRadio(false);
        setIsActivSecondRadio(true);
        setBorderPizza("+сырный бортик");
    };

    const onClickButtonAddCart = () => {
        const size = sizeM?.current?.checked
            ? sizeM?.current?.value
            : sizeL?.current?.value;

        const cart = {
            id,
            title,
            price: orderPrice,
            imageUrl,
            size,
            border: borderPizza,
            count: 1,
        };
        setIsOpenAddedToCart(true);
        setModalIsOpen(false);
        dispatch(addToCart(cart));
        const timer = setTimeout(() => setIsOpenAddedToCart(false), 2000);
        return () => clearTimeout(timer);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.headerContent}>
                    <div className={styles.leftContent}>
                        <div className={styles.wrapperTitle}>
                            <h3 className={styles.title}>Пицца</h3>
                            <h2 className={styles.name}>{title}</h2>
                        </div>
                        <div className={styles.pizzaWrapper}>
                            <img
                                className={styles.pizza}
                                src={imageUrl}
                                alt='pizza'
                            />
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.radioWrapper}>
                            <div className={styles.leftRadio}>
                                <p className={styles.leftRadioContent}>
                                    Размер M
                                </p>
                                <input
                                    className={styles.radioButton}
                                    ref={sizeM}
                                    type='radio'
                                    id='choice1'
                                    name='size'
                                    value='Размер M'
                                    onClick={() => {
                                        setOrderPrice(price - 30);
                                    }}
                                />
                                <label
                                    className={styles.leftRadioContent}
                                    htmlFor='choice1'
                                >
                                    Ø 35 см <br /> {price - 30} грн
                                </label>
                            </div>
                            <div className={styles.rightRadio}>
                                <p className={styles.rightRadioContent}>
                                    Размер L
                                </p>
                                <input
                                    className={styles.radioButton}
                                    ref={sizeL}
                                    type='radio'
                                    id='choice2'
                                    name='size'
                                    value='Размер L'
                                    defaultChecked
                                    onClick={() => {
                                        setOrderPrice(price);
                                    }}
                                />
                                <label
                                    className={styles.rightRadioContent}
                                    htmlFor='choice2'
                                >
                                    Ø 45 см <br /> {price} грн
                                </label>
                            </div>
                            <div className={styles.rightRadio}></div>
                        </div>
                        <div className={styles.footerRightContent}>
                            <div className={styles.titleFooter}>Добавить:</div>
                            <div
                                className={
                                    !isActivFirstRadio
                                        ? styles.circle
                                        : styles.activeRadio
                                }
                                onClick={onClickFirstRadio}
                            >
                                сосисочный бортик +30 грн
                            </div>
                            <div
                                className={
                                    !isActivSecondRadio
                                        ? styles.circle
                                        : styles.activeRadio
                                }
                                onClick={onClickSecondRadio}
                            >
                                сырный бортик +30 грн
                            </div>
                            <p className={styles.info}>
                                Если у Вас есть аллергия на какие-либо
                                ингридиенты,сообщите пожалуйста менеджеру при
                                оформлении заказа.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.price}>
                        Стоимость: {orderPrice} грн
                    </div>
                    <button
                        className={styles.button}
                        type='button'
                        onClick={onClickButtonAddCart}
                    >
                        добавить в корзину
                    </button>
                </div>
            </div>
            <div
                className={styles.wrapperClose}
                onClick={closeModal}
            >
                <div className={styles.close}>&times;</div>
            </div>
        </div>
    );
};

export default WindowPizza;
