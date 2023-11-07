/* eslint-disable jsx-a11y/anchor-is-valid */

import styles from "./Header.module.css";
import Burger from "../Burger/Burger";
import CartMob from "../Cartmob/CartMob";

const Header = ({ open, setOpen, deliverRef, pizzasRef }) => {
    const handleDeliverClick = () => {
        deliverRef.current.scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    };

    const handlePizzasClick = () => {
        pizzasRef?.current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };

    return (
        <header>
            <nav className={styles.container_header}>
                <ul className={styles.content_left}>
                    <li>
                        <a href='#'>
                            <img
                                className={styles.logo}
                                src='./img/logo.png'
                                alt='logotyp'
                            />
                        </a>
                    </li>
                </ul>
                <ul className={styles.content_right}>
                    <li>
                        <a
                            className={styles.text_header}
                            onClick={handlePizzasClick}
                        >
                            Пиццы
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.text_header}
                            onClick={handleDeliverClick}
                        >
                            Доставка
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.text_tel_header}
                            href='tel:+38066XXXXXXX'
                        >
                            +38 (066) XXX XX XX
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='50'
                                height='50'
                                viewBox='0 0 50 50'
                                fill='none'
                            >
                                <g clipPath='url(#clip0_162_1026)'>
                                    <path
                                        d='M23.4375 0C24.4795 0 25.5205 0 26.5625 0C26.6875 0.0273438 26.8115 0.0703125 26.9385 0.0800781C30.8311 0.371094 34.4756 1.48828 37.7959 3.53223C44.249 7.50488 48.2246 13.2197 49.6172 20.6914C49.7861 21.5986 49.875 22.5215 50.001 23.4375C50.001 24.4795 50.001 25.5205 50.001 26.5625C49.9609 26.8828 49.916 27.2031 49.8818 27.5244C49.3467 32.4697 47.5547 36.9053 44.3984 40.751C40.4736 45.5342 35.4531 48.5039 29.3545 49.6133C28.4307 49.7812 27.4941 49.873 26.5635 50C25.5215 50 24.4805 50 23.4385 50C22.8281 49.9248 22.2168 49.8594 21.6084 49.7734C16.9961 49.1172 12.8535 47.3604 9.25293 44.3994C4.47266 40.4697 1.49609 35.4561 0.388672 29.3564C0.220703 28.4316 0.12793 27.4941 0 26.5625C0 25.5205 0 24.4795 0 23.4375C0.0390625 23.1172 0.0830078 22.7979 0.118164 22.4766C0.696289 17.1807 2.69922 12.498 6.23145 8.50586C10.1162 4.11621 14.9541 1.38574 20.7412 0.376953C21.6348 0.22168 22.5391 0.124023 23.4375 0ZM25.0459 10.5703C25.0449 10.6279 25.0439 10.6865 25.043 10.7441C22.9766 10.7441 20.9102 10.707 18.8447 10.7559C17.1807 10.7959 15.5859 11.1855 14.1807 12.1309C11.832 13.709 10.8232 16.042 10.7686 18.7568C10.6846 22.9199 10.7158 27.0869 10.7627 31.251C10.7812 32.8799 11.2021 34.4414 12.1289 35.8174C13.709 38.165 16.041 39.1738 18.7559 39.2295C22.9189 39.3145 27.0859 39.3027 31.25 39.2314C33.5322 39.1924 35.5928 38.4404 37.1826 36.6924C38.6133 35.1201 39.1953 33.207 39.2422 31.1416C39.3193 27.7256 39.3262 24.3076 39.3301 20.8906C39.3311 19.8838 39.2559 18.874 39.1562 17.8711C38.7695 13.9912 35.998 11.1768 32.1143 10.8545C29.7666 10.6602 27.4023 10.6592 25.0459 10.5703Z'
                                        fill='white'
                                        fillOpacity='0.6'
                                    />
                                    <path
                                        d='M25.001 36.8135C22.8389 36.752 20.6728 36.7461 18.5156 36.6162C15.4473 36.4317 13.4844 34.5557 13.4004 31.4785C13.2832 27.124 13.3174 22.7627 13.4043 18.4063C13.4414 16.5195 14.3017 14.9561 16.0527 14.0303C17.0371 13.5098 18.1201 13.3193 19.2129 13.3184C23.3115 13.3145 27.4121 13.2705 31.5068 13.4004C34.543 13.4971 36.5166 15.458 36.5976 18.4961C36.7129 22.835 36.7109 27.1807 36.5967 31.5195C36.5176 34.5225 34.5273 36.4063 31.5371 36.6201C30.4512 36.6983 29.3603 36.7256 28.2715 36.7471C27.1816 36.7676 26.0918 36.752 25.0019 36.752C25.0019 36.7715 25.001 36.792 25.001 36.8135ZM32.3662 24.9883C32.3574 20.917 29.0849 17.6445 25.0137 17.6338C20.9307 17.6231 17.625 20.9277 17.6338 25.0098C17.6426 29.0772 20.918 32.3545 24.9873 32.3652C29.0674 32.377 32.375 29.0703 32.3662 24.9883ZM34.3789 17.3389C34.3799 16.3945 33.6299 15.6318 32.6894 15.6211C31.7207 15.6094 30.9492 16.3682 30.9482 17.333C30.9473 18.2822 31.6914 19.0391 32.6347 19.0498C33.6045 19.0606 34.3779 18.3018 34.3789 17.3389Z'
                                        fill='white'
                                        fillOpacity='0.6'
                                    />
                                    <path
                                        d='M24.9941 20.2158C27.627 20.2129 29.7754 22.3506 29.7842 24.9814C29.793 27.6348 27.6357 29.792 24.9824 29.7842C22.3545 29.7764 20.2139 27.625 20.2168 24.9941C20.2188 22.3643 22.3643 20.2188 24.9941 20.2158Z'
                                        fill='white'
                                        fillOpacity='0.6'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_162_1026'>
                                        <rect
                                            width='50'
                                            height='50'
                                            fill='white'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <svg
                            className={styles.cart}
                            width='50'
                            height='50'
                            viewBox='0 0 50 50'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <circle
                                cx='25'
                                cy='25'
                                r='25'
                                fill='#FF4E00'
                            />
                            <g clipPath='url(#clip0_123_229)'>
                                <path
                                    d='M39.8605 23.5654C39.7234 24.0301 39.5593 24.4786 39.1996 24.8296C38.8117 25.2082 38.3467 25.4206 37.7959 25.4932C37.6711 26.3602 37.5463 27.2194 37.4239 28.0789C37.0855 30.4516 36.7495 32.8249 36.4087 35.1976C36.3319 35.7331 36.2674 36.2722 36.1498 36.7993C35.866 38.0707 34.8319 38.9482 33.5311 39.0568C33.4156 39.0664 33.2992 39.0688 33.1831 39.0688C27.8233 39.0694 22.4638 39.0679 17.104 39.0703C15.9859 39.0709 15.0997 38.6428 14.4829 37.6945C14.1511 37.1842 14.0707 36.5974 13.9741 36.0163C13.405 32.5942 12.8374 29.1721 12.2686 25.75C12.256 25.6741 12.2347 25.5994 12.2269 25.5646C11.8672 25.4173 11.512 25.3144 11.2012 25.135C10.6162 24.7972 10.2508 24.2653 10.1854 23.5954C10.1257 22.9822 10.1098 22.3558 10.1638 21.7429C10.2712 20.5195 11.2165 19.7068 12.4837 19.6837C12.8803 19.6765 13.2772 19.6732 13.6735 19.6864C13.8631 19.6927 13.9945 19.6309 14.1277 19.4971C16.8334 16.7848 19.5445 14.0779 22.2514 11.3668C22.5595 11.0584 22.8958 10.8739 23.3413 11.0122C24.0001 11.2168 24.2404 11.9989 23.809 12.5365C23.7367 12.6268 23.6521 12.7075 23.5702 12.7894C21.3679 14.9929 19.1659 17.1961 16.9615 19.3975C16.8874 19.4716 16.7926 19.5247 16.7074 19.5877C16.723 19.6111 16.7383 19.6345 16.7539 19.6579C22.2475 19.6579 27.7411 19.6579 33.2737 19.6579C33.1882 19.5649 33.1228 19.4881 33.0517 19.417C30.829 17.1931 28.6066 14.9689 26.3818 12.7471C26.1562 12.5218 25.9729 12.2848 25.9753 11.9455C25.978 11.5501 26.1517 11.2552 26.4991 11.0758C26.8594 10.8895 27.2107 10.9312 27.5326 11.1754C27.6322 11.251 27.7192 11.3437 27.808 11.4325C30.49 14.1136 33.1729 16.7941 35.8501 19.48C35.9995 19.63 36.1462 19.69 36.3559 19.6876C36.8485 19.6816 37.345 19.669 37.8334 19.7203C38.8507 19.8268 39.5728 20.494 39.808 21.4867C39.8212 21.5422 39.8428 21.5953 39.8602 21.6496C39.8605 22.2883 39.8605 22.927 39.8605 23.5654ZM35.8324 25.4965C35.6794 25.4965 35.575 25.4965 35.4706 25.4965C33.0424 25.4965 30.6145 25.4965 28.1863 25.4962C28.0606 25.4962 27.9343 25.4971 27.8095 25.4863C27.3754 25.4482 27.0328 25.1293 26.9599 24.7024C26.8525 24.0727 27.3043 23.5666 27.9877 23.566C30.4447 23.563 32.902 23.5648 35.359 23.5648C36.0652 23.5648 36.7714 23.5615 37.4776 23.5666C37.7257 23.5684 37.9075 23.4868 37.9165 23.2189C37.9306 22.8034 37.9279 22.387 37.9174 21.9715C37.912 21.7576 37.7884 21.6346 37.5652 21.6307C37.4686 21.6289 37.3717 21.6277 37.2751 21.6277C29.0911 21.6277 20.9074 21.6277 12.7234 21.6277C12.646 21.6277 12.5686 21.6256 12.4912 21.6286C12.1807 21.6415 12.0814 21.7378 12.0742 22.0567C12.067 22.3759 12.0715 22.6951 12.0724 23.0143C12.0739 23.4874 12.1528 23.5648 12.6337 23.5648C15.7003 23.5651 18.7669 23.5648 21.8332 23.5651C21.9397 23.5651 22.0465 23.5615 22.1524 23.569C22.7203 23.6095 23.1229 24.1102 23.0416 24.6718C22.9657 25.195 22.5781 25.4953 21.958 25.4959C19.4911 25.498 17.0245 25.4968 14.5576 25.4968C14.4448 25.4968 14.332 25.4968 14.1892 25.4968C14.2837 26.0692 14.3707 26.6011 14.4592 27.133C14.9536 30.097 15.4519 33.0601 15.9403 36.025C16.0801 36.8734 16.3699 37.1371 17.23 37.1371C22.5022 37.1371 27.7741 37.1371 33.0463 37.1371C33.1333 37.1371 33.2206 37.1401 33.3073 37.1353C33.8572 37.1053 34.2055 36.7975 34.2937 36.2545C34.3555 35.8729 34.4074 35.4898 34.462 35.1073C34.8016 32.7349 35.1412 30.3625 35.4799 27.9898C35.5963 27.1783 35.7097 26.3662 35.8324 25.4965Z'
                                    fill='white'
                                />
                                <path
                                    d='M24.0247 31.297C24.0247 30.3685 24.0193 29.44 24.0268 28.5115C24.0322 27.8443 24.4546 27.4207 25.0621 27.4507C25.4677 27.4708 25.8262 27.7555 25.9243 28.1497C25.9564 28.2796 25.9702 28.4173 25.9705 28.5514C25.9735 30.3988 25.975 32.2459 25.9711 34.0933C25.9696 34.771 25.5655 35.2006 24.9643 35.1847C24.5194 35.1727 24.1429 34.87 24.0643 34.4269C24.0244 34.2007 24.0277 33.9652 24.0265 33.7342C24.022 32.9218 24.0247 32.1094 24.0247 31.297Z'
                                    fill='white'
                                />
                                <path
                                    d='M18.2104 31.2862C18.2107 30.3481 18.2035 29.4097 18.2128 28.4716C18.2203 27.7351 18.8578 27.2656 19.5097 27.5059C19.8658 27.6373 20.0791 27.8947 20.1325 28.2733C20.1499 28.3972 20.1538 28.5238 20.1538 28.6492C20.155 30.4288 20.1568 32.2087 20.1517 33.9883C20.1511 34.1791 20.1397 34.3801 20.0806 34.5589C19.9357 34.9996 19.492 35.2447 19.0213 35.176C18.568 35.1097 18.2248 34.7185 18.2146 34.2169C18.2014 33.5497 18.2104 32.8822 18.2101 32.2147C18.2101 31.9054 18.2101 31.5958 18.2104 31.2862Z'
                                    fill='white'
                                />
                                <path
                                    d='M31.7866 31.3132C31.7866 32.2612 31.792 33.2089 31.7845 34.1569C31.7794 34.7938 31.3438 35.2153 30.7459 35.1829C30.3079 35.1592 29.9386 34.8304 29.8687 34.3951C29.8504 34.2811 29.8435 34.1641 29.8435 34.0486C29.842 32.2303 29.8402 30.4117 29.8456 28.5934C29.8462 28.4128 29.8639 28.2217 29.9245 28.0534C30.0811 27.6172 30.538 27.3775 30.9988 27.4606C31.4431 27.541 31.7713 27.9217 31.7818 28.4113C31.7956 29.0494 31.7863 29.6881 31.7866 30.3262C31.7869 30.6556 31.7869 30.9844 31.7866 31.3132Z'
                                    fill='white'
                                />
                            </g>
                            <defs>
                                <clipPath id='clip0_123_229'>
                                    <rect
                                        width='30'
                                        height='30'
                                        fill='white'
                                        transform='translate(10 10)'
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                </ul>
                <Burger
                    open={open}
                    setOpen={setOpen}
                />
                <CartMob />
            </nav>
        </header>
    );
};

export default Header;
