import Image from "next/image";
import React from "react";

type Props = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover"
        height={120}
        width={120}
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

      <div className="mt-3 flex justify-center ">
        <Image
          src={"/icons/star.svg"}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
