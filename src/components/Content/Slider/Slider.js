import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from "./Slider.module.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div className={styles.slider}>
                <img
                    className={styles.img}
                    src='./img/slider_img_1.jpg'
                    alt='slider_img1'
                />
            </div>
            <div className={styles.slider}>
                <img
                    className={styles.img}
                    src='./img/slider_img_1.jpg'
                    alt='slider_img1'
                />
            </div>
            <div className={styles.slider}>
                <img
                    className={styles.img}
                    src='./img/slider_img_1.jpg'
                    alt='slider_img1'
                />
            </div>
        </Slider>
    );
}
