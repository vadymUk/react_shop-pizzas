import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./WindowCart.module.css";
import {
    minusItem,
    plusItem,
    totalPricePlus,
    totalPriceMinus,
    removeItem,
} from "../../../redux/slice/cartSlice";

const WindowCart = ({ closeCart, isOpenSetOrder }) => {
    const dispatch = useDispatch();

    const { cart, totalPrice } = useSelector((state) => state.cart);
    const plusCount = (id) => {
        dispatch(plusItem(id));
        dispatch(totalPricePlus());
    };

    const minusCount = (id, price) => {
        dispatch(minusItem(id));
        dispatch(totalPriceMinus(price));
    };

    const removeItemCart = (id, price, count) => {
        dispatch(removeItem(id));
        dispatch(totalPriceMinus(price * count));
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul className={styles.headerContent}>
                    <li className={styles.name}>КОРЗИНА</li>
                    <li className={styles.content}>Название</li>
                    <li className={styles.content}>Кол-во</li>
                    <li className={styles.content}>Цена</li>
                </ul>
                {cart.map((obj) => (
                    <ul
                        className={styles.cartItems}
                        key={obj.id}
                    >
                        <li>
                            <img
                                className={styles.img}
                                src={obj.imageUrl}
                                alt='pizza'
                            />
                        </li>
                        <li>
                            <h3 className={styles.title}>{obj.title}</h3>
                            <span className={styles.additionalOptions}>
                                {obj.border}
                            </span>
                        </li>
                        <li className={styles.count}>
                            <span
                                className={styles.minus}
                                onClick={
                                    obj.count !== 1
                                        ? () => minusCount(obj.id, obj.price)
                                        : null
                                }
                            >
                                -
                            </span>
                            {obj.count}
                            <span
                                className={styles.plus}
                                onClick={() => plusCount(obj.id)}
                            >
                                +
                            </span>
                        </li>
                        <li className={styles.price}>{obj.price} грн</li>
                        <li
                            className={styles.remove}
                            onClick={() =>
                                removeItemCart(obj.id, obj.price, obj.count)
                            }
                        >
                            &times;
                        </li>
                    </ul>
                ))}
                <div className={styles.wrapperCountPrice}>
                    <p className={styles.count}>
                        Всего товаров:{" "}
                        {cart.reduce((sum, obj) => {
                            return sum + obj.count;
                        }, 0)}
                    </p>
                    <p className={styles.price}>
                        Общая стоимость: {totalPrice} грн
                    </p>
                </div>
                <div className={styles.wrapperButtons}>
                    <button
                        className={styles.buttonLeft}
                        type='button'
                        onClick={closeCart}
                    >
                        продолжить покупки
                    </button>
                    <button
                        className={styles.buttonRight}
                        type='button'
                        onClick={cart.length ? isOpenSetOrder : null}
                    >
                        оформить заказ
                    </button>
                </div>
            </div>
            <div
                className={styles.wrapperClose}
                onClick={closeCart}
            >
                <div className={styles.close}>&times;</div>
            </div>
        </div>
    );
};

export default WindowCart;
