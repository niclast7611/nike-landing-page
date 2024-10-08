import React from "react";
import ServiceCard from "./ServiceCard";

export const services = [
  {
    imgURL: "/icons/truck-fast.svg",
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: "/icons/shield-tick.svg",
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: "/icons/support.svg",
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          label={service.label}
          imgUrl={service.imgURL}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
};

export default Services;
