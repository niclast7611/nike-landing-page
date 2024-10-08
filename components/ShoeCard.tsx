"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
  imgUrl: {
    thumbnail: string;
    bigShoe: string;
  };
  changeBigShoeImage: (bigShoe: string) => void;
  bigShoeImage: string;
};

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }: Props) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={clsx(
        "border-2 rounded-xl cursor-pointer max-sm:flex-1",
        bigShoeImage === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      )}
      onClick={() => handleClick()}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imgUrl.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
