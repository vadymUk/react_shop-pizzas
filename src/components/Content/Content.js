import styles from "./Content.module.css";

const Content = ({ children }) => {
    return <main className={styles.content}>{children}</main>;
};

export default Content;
