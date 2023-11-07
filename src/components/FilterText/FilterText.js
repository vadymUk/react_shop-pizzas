import classNames from "classnames";
import styles from "./FilterText.module.css";

const FilterText = ({
    isActiveFilter,
    setisActiveFilter,
    isActiveFilterTextPizza,
    setisActiveFilterTextPizza,
    isActiveFilterTextWater,
    setisActiveFilterTextWater,
}) => {
    const onClickFilterTextPizza = () => {
        setisActiveFilterTextPizza(true);
        setisActiveFilter(false);
        setisActiveFilterTextWater(true);
    };

    const onClickFilterTextWater = () => {
        setisActiveFilterTextPizza(false);
        setisActiveFilter(true);
        setisActiveFilterTextWater(false);
    };
    return (
        <section className={styles.section_filterText}>
            <ul className={styles.wrapper_filterText}>
                <li
                    onClick={onClickFilterTextPizza}
                    // className={classNames(
                    //     isActiveFilterTextPizza
                    //         ? styles.filterTextActive
                    //         : styles.filterText
                    // )}
                    className={classNames(styles.filterText, {
                        [styles.filterTextActive]: isActiveFilterTextPizza,
                    })}
                >
                    Пиццы
                </li>
                <li
                    onClick={onClickFilterTextWater}
                    className={classNames(
                        isActiveFilterTextWater
                            ? styles.filterText
                            : styles.filterTextActive
                    )}
                >
                    Напитки
                </li>
            </ul>
        </section>
    );
};

export default FilterText;
