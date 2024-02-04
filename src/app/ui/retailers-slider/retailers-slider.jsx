"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import styles from "./retailers-slider.module.css";

import data from "../../data/retailers.json";

export default function RetailersSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Autoplay]}
        className={styles.swiper}
      >
        {data.map(({ id, name, image, website }) => (
          <SwiperSlide className={styles.swiperSlide} key={id}>
            <Link href={website} target="_blank" rel="noopener noreferrer">
              <Image
                src={image}
                width={100}
                height={100}
                alt={name}
                className={styles.logo}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
