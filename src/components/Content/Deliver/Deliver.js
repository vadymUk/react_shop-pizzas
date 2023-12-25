import styles from "./Deliver.module.css";

const Deliver = ({ deliverRef }) => {
    return (
        <section
            className={styles.container}
            ref={deliverRef}
            id='deliver'
        >
            <div className={styles.wrapper}>
                <div className={styles.leftContent}>
                    <h5 className={styles.title}>Условия доставки</h5>
                    <p className={styles.desc}>
                        Зеленая зона до 350 грн - 40 грн. Зеленая зона от 350
                        грн - бесплатно. <br /> <br /> Оранжевая зона до 500 грн
                        - 70 грн. Оранжевая зона от 500 грн - бесплатно.
                        Предварительный заказ за 2-3 часа. Время доставки: от 30
                        минут *. * Срок выполнения заказа зависит от расстояния
                        и очереди заказов.
                    </p>
                </div>
                <div className={styles.rightContent}>
                    <iframe
                        title='Nowy Tomysl'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19514.08660796544!2d16.11267185145168!3d52.31126944582559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47042ae37b075a01%3A0x5d1524d194e17e84!2zNjQtMzAwINCd0L7QstC40Lkg0KLQvtC80LjRiNC70Yw!5e0!3m2!1suk!2spl!4v1697970172410!5m2!1suk!2spl'
                        style={{
                            border: 0,
                            borderRadius: "30px",
                            width: "100%",
                            height: "100%",
                        }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Deliver;
