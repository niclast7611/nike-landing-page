import clsx from "clsx";
import Image from "next/image";
import React from "react";

type Props = {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
};

const Button = ({
  label,
  iconUrl,
  backgroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white",
  fullWidth,
}: Props) => {
  return (
    <button
      className={clsx(
        "flex justify-center items-center gap2 font-montserrat px-7 py-4 border text-lg leading-none  rounded-full ",
        backgroundColor,
        borderColor,
        textColor,
        fullWidth && "w-full"
      )}
    >
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
