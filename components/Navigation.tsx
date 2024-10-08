import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Navigation = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href={"/"}>
          <Image
            src="/images/header-logo.svg"
            alt="logo"
            width={130}
            height={29}
          />
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="font-montserrat leading-normal text-slate-gray"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Image
            src="/icons/hamburger.svg"
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
