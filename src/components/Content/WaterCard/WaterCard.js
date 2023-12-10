import { useSelector } from "react-redux";
import WaterCardItem from "../WaterCardItem/WaterCardItem";
import styles from "./WaterCard.module.css";

const WaterCard = () => {
    const waters = useSelector((state) => state.card.waters);

    return (
        <section className={styles.card}>
            {waters.map((obj) => (
                <WaterCardItem
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

export default WaterCard;
