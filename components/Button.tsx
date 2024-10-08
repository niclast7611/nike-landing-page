import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  iconUrl?: string;
};

const Button = ({ label, iconUrl }: Props) => {
  return (
    <button className="flex justify-center items-center gap2 font-montserrat px-7 py-4 border text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt={label}
          className="ml-2 rounded-full"
          width={20}
          height={20}
        />
      )}
    </button>
  );
};

export default Button;
