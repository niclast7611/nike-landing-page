import React from "react";
import PopularProductCard from "./PopularProductCard";

export const products = [
  {
    imgURL: "/images/shoe4.svg",
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: "/images/shoe5.svg",
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: "/images/shoe6.svg",
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: "/images/shoe7.svg",
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Our </span>
          Popular Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product, index) => (
          <PopularProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
