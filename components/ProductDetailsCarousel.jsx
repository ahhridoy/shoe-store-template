import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <Image width={160} height={150} alt="img" src="/p2.png" />
        <Image width={160} height={150} alt="img" src="/p3.png" />
        <Image width={160} height={150} alt="img" src="/p4.png" />
        <Image width={160} height={150} alt="img" src="/p5.png" />
        <Image width={160} height={150} alt="img" src="/p6.png" />
        <Image width={160} height={150} alt="img" src="/p7.png" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
