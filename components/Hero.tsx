"use client";

import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import ShoeCard from "./ShoeCard";

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const shoes = [
  {
    thumbnail: "/images/thumbnail-shoe1.svg",
    bigShoe: "/images/big-shoe1.png",
  },
  {
    thumbnail: "/images/thumbnail-shoe2.svg",
    bigShoe: "/images/big-shoe2.png",
  },
  {
    thumbnail: "/images/thumbnail-shoe3.svg",
    bigShoe: "/images/big-shoe3.png",
  },
];

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState<string>(shoes[0].bigShoe);
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconUrl="/icons/arrow-right.svg" />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoeImage}
          alt="Shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
