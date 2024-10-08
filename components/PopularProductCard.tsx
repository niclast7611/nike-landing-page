import Image from "next/image";
import React from "react";

type Props = {
  product: {
    imgURL: string;
    name: string;
    price: string;
  };
};

const PopularProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image src={product.imgURL} alt={product.name} width={280} height={280} />

      <div className="mt-8 flex justify-start gap-2.5 ">
        <Image src={"/icons/star.svg"} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {product.name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal">
        {product.price}
      </p>
    </div>
  );
};

export default PopularProductCard;
