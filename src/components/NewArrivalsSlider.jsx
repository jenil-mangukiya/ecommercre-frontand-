import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Com.css";

// Import images
import image1 from '../img/ba_1.jpg';
import image2 from '../img/WhatsApp Unknown 2023-02-07 at 11.53.13/WhatsApp Image 2023-02-07 at 11.37.22 (7).jpeg';
import image3 from '../img/WhatsApp Unknown 2023-02-07 at 11.53.13/WhatsApp Image 2023-02-07 at 11.37.23.jpeg';
import image4 from '../img/ba_4.jpg';
import image5 from '../img/WhatsApp Unknown 2023-02-07 at 11.53.13/watch.jpg';

const products = [
  { id: 1, name: "Earrings", image: image1 },
  { id: 2, name: "Necklaces", image: image2 },
  { id: 3, name: "Rings", image: image3 },
  { id: 4, name: "Bracelets", image:  image4 },
  { id: 5, name: "Watch", image:  image5 },
];

const NewArrivalsSlider = () => {
  return (
    <div className="slider-container">
      <h2 className="title">New Arrivals</h2>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <img
              className="uniform-size"
                src={product.image}
                alt={product.name}
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />
              <h3>{product.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivalsSlider;
