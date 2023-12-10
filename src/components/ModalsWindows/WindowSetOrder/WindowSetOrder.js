import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./WindowSetOrder.module.css";

const WindowSetOrder = ({ closeSetOrder, comeBack, sumbitForm }) => {
    const { cart, totalPrice } = useSelector((state) => state.cart);
    const [activeLeftButton, setactiveLeftButton] = useState(true);
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [adress, setAdress] = useState("");
    const [radio, setRadio] = useState("наличными");
    const [descr, setDescr] = useState("");
    const [activeRightButton, setactiveRightButton] = useState(false);

    const objOrdered = {
        name,
        tel,
        adress,
        radio,
        descr,
    };
    console.log(objOrdered);

    const clickLeftButton = () => {
        setactiveLeftButton(true);
        setactiveRightButton(false);
    };
    const clickRightButton = () => {
        setactiveLeftButton(false);
        setactiveRightButton(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div
                    className={styles.backToCart}
                    onClick={comeBack}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 40 40'
                        fill='none'
                    >
                        <path
                            d='M19.9538 2.49142C29.6507 2.47346 37.4976 10.2985 37.5124 20.0008C37.5273 29.6969 29.6679 37.4883 19.8616 37.4984C10.4007 37.5086 2.51008 29.6047 2.49758 20.1047C2.48352 10.3703 10.2749 2.50939 19.9538 2.49142ZM19.9413 34.9984C28.2523 35.0203 34.9765 28.3367 35.0109 20.0203C35.0452 11.8133 28.328 5.02267 20.146 4.99221C11.7984 4.96174 5.01867 11.6305 4.99758 19.893C4.97726 28.2274 11.6538 34.9766 19.9413 34.9984Z'
                            fill='black'
                        />
                        <path
                            d='M14.2837 21.2461C14.4438 21.4141 14.5376 21.5172 14.636 21.6157C16.7001 23.6766 18.768 25.7352 20.8282 27.8C21.5688 28.543 21.3149 29.668 20.3501 29.95C19.8532 30.0953 19.4298 29.9469 19.0696 29.5852C18.2704 28.7821 17.468 27.9821 16.6673 27.1813C14.6134 25.1282 12.5587 23.0758 10.5056 21.0219C9.81649 20.3328 9.81102 19.6657 10.4891 18.9875C13.3337 16.1414 16.1821 13.2985 19.0235 10.4492C19.3829 10.0883 19.7915 9.91018 20.2923 10.0242C21.1774 10.225 21.5524 11.2836 20.9993 12.0039C20.9048 12.1274 20.7884 12.2344 20.6782 12.3446C18.6696 14.3508 16.6602 16.3563 14.6501 18.361C14.5493 18.4617 14.436 18.5508 14.3563 18.7453C14.4876 18.7453 14.6196 18.7453 14.7509 18.7453C19.3352 18.7453 23.9204 18.7453 28.5048 18.7461C28.661 18.7461 28.8196 18.7383 28.9727 18.7641C29.6001 18.8711 30.0516 19.4532 30.0087 20.0828C29.9665 20.6977 29.4634 21.1977 28.8384 21.2422C28.7087 21.2516 28.5782 21.2461 28.4477 21.2461C23.9024 21.2461 19.3563 21.2461 14.811 21.2461C14.6657 21.2461 14.5227 21.2461 14.2837 21.2461Z'
                            fill='black'
                        />
                    </svg>
                    <p className={styles.text}>ВЕРНУТЬСЯ В КОРЗИНУ</p>
                </div>
                <div className={styles.buttonsDeliver}>
                    <button
                        className={
                            activeLeftButton
                                ? styles.buttonActiveLeft
                                : styles.buttonLeft
                        }
                        onClick={clickLeftButton}
                    >
                        Доставка
                    </button>
                    <button
                        className={
                            activeRightButton
                                ? styles.buttonActiveRight
                                : styles.buttonRight
                        }
                        onClick={clickRightButton}
                    >
                        Самовывоз
                    </button>
                </div>
                <form
                    className={styles.formWrapper}
                    onSubmit={sumbitForm}
                >
                    <div className={styles.wrapperContent}>
                        <div className={styles.wrapperLeftContent}>
                            <div className={styles.name}>
                                <label htmlFor='name'>ФИО </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    value={name}
                                    required
                                />
                            </div>
                            <div className={styles.tel}>
                                <label htmlFor='tel'>Номер телефона: </label>
                                <input
                                    type='tel'
                                    name='tel'
                                    id='tel'
                                    onChange={(e) => {
                                        setTel(e.target.value);
                                    }}
                                    value={tel}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.wrapperRightContent}>
                            {!activeRightButton ? (
                                <div className={styles.adress}>
                                    <label htmlFor='adress'>
                                        Адрес доставки:
                                    </label>
                                    <input
                                        type='text'
                                        name='adress'
                                        id='adress'
                                        onChange={(e) => {
                                            setAdress(e.target.value);
                                        }}
                                        value={adress}
                                        required
                                    />
                                </div>
                            ) : (
                                <div className={styles.wrapperAdress}>
                                    <p className={styles.titleAdress}>
                                        Заказ можно забрать по адресу:
                                    </p>
                                    <p className={styles.descrAdress}>
                                        г. Павлоград, ул. Днипровская 418/1а
                                    </p>
                                </div>
                            )}
                            <div className={styles.wrapperRadio}>
                                <label className={styles.titleRadio}>
                                    Способ оплаты:
                                </label>
                                <label
                                    className={styles.radioLeftLabel}
                                    htmlFor='radioLeft'
                                >
                                    <input
                                        className={styles.radioLeft}
                                        type='radio'
                                        name='payment'
                                        id='radioLeft'
                                        required
                                        defaultChecked='checked'
                                        onClick={() => {
                                            setRadio("наличными");
                                        }}
                                    />
                                    наличными
                                </label>
                                <label
                                    className={styles.radioRightLabel}
                                    htmlFor='radioRight'
                                >
                                    <input
                                        className={styles.radioRight}
                                        type='radio'
                                        id='radioRight'
                                        value='оплата картой'
                                        name='payment'
                                        onClick={() => {
                                            setRadio("оплата картой");
                                        }}
                                        required
                                    />
                                    оплата картой
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapperTextArea}>
                        <label htmlFor='coment'>Комментарий к заказу:</label>

                        <textarea
                            id='coment'
                            name='descr'
                            onChange={(e) => {
                                setDescr(e.target.value);
                            }}
                            value={descr}
                        ></textarea>
                    </div>

                    <div className={styles.wrapperCheckbox}>
                        <input
                            type='checkbox'
                            id='subscribeNews'
                            name='subscribe'
                            required
                        />
                        <label htmlFor='subscribeNews'>
                            Я принимаю условия пользовательского соглашения
                        </label>
                    </div>
                    <div className={styles.wrapperTotal}>
                        <p className={styles.count}>
                            Всего товаров: {cart.length}
                        </p>
                        <p className={styles.price}>
                            Общая стоимость: {totalPrice} грн
                        </p>
                    </div>
                    <div className={styles.sumbit}>
                        <button type='submit'>заказать</button>
                    </div>
                </form>
            </div>
            <div
                className={styles.wrapperClose}
                onClick={closeSetOrder}
            >
                <div className={styles.close}>&times;</div>
            </div>
        </div>
    );
};

export default WindowSetOrder;
