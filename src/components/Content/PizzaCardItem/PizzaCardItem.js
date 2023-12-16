import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import styles from "./PizzaCardItem.module.css";
import { TiTick } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import WindowPizza from "../../ModalsWindows/WindowPizzaCardOnAdd/WindowPizza";
import WindowAddToCart from "../../ModalsWindows/WindowAddToCart/WindowAddToCart";

const PizzaCardItem = ({ imageUrl, title, price, id }) => {
    const { cart } = useSelector((state) => state.cart);
    const added = cart.some((el) => el.id === id);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isOpenAddedToCart, setIsOpenAddedToCart] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const closeAddedToCart = () => {
        setIsOpenAddedToCart(false);
    };
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
                    {!added ? (
                        <button
                            className={styles.add}
                            onClick={openModal}
                        >
                            <TiPlus
                                color='#FFF'
                                size='36px'
                            />
                        </button>
                    ) : (
                        <button className={styles.add}>
                            <TiTick
                                color='#FFF'
                                size='36px'
                            />
                        </button>
                    )}
                </div>
            </div>
            <Modal
                closeTimeoutMS={1000}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                {
                    <WindowPizza
                        setModalIsOpen={setModalIsOpen}
                        setIsOpenAddedToCart={setIsOpenAddedToCart}
                        closeModal={closeModal}
                        id={id}
                        imageUrl={imageUrl}
                        title={title}
                        price={price}
                    />
                }
            </Modal>

            <Modal
                className='containerAddedToCart'
                closeTimeoutMS={1000}
                isOpen={isOpenAddedToCart}
                onRequestClose={closeAddedToCart}
                ariaHideApp={false}
            >
                {<WindowAddToCart />}
            </Modal>
        </div>
    );
};

export default PizzaCardItem;
