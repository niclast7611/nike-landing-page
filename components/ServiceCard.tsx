import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  imgUrl: string;
  subtext: string;
};

const ServiceCard = ({ label, imgUrl, subtext }: Props) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 ">
      <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
        <Image src={imgUrl} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
