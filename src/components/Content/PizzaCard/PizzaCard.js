import { useSelector } from "react-redux";
import PizzaCardItem from "../PizzaCardItem/PizzaCardItem";
import styles from "./PizzaCard.module.css";

const PizzaCard = ({ pizzasRef }) => {
    const pizzas = useSelector((state) => state.card.pizzas);

    return (
        <section
            className={styles.card}
            ref={pizzasRef}
        >
            {pizzas.map((obj) => (
                <PizzaCardItem
                    key={obj.id}
                    id={obj.id}
                    imageUrl={obj.imageUrl}
                    title={obj.title}
                    price={obj.price}
                />
            ))}
        </section>
    );
};

export default PizzaCard;
