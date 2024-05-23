"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, link }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isHoverSupported = window.matchMedia("(hover: hover)").matches;

  return (
    <div
      className={`card relative flex items-end overflow-hidden p-4 w-full text-center text-whitesmoke bg-whitesmoke hover:shadow-lg rounded-lg ${
        isHoverSupported
          ? "md:h-[350px] hover:items-center hover:before:translate-y-[-4%] hover:after:translate-y-[-50%] focus-within:items-center focus-within:before:translate-y-[-4%] focus-within:after:translate-y-[-50%]"
          : ""
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full before"></div>
      <div className="absolute top-0 left-0 w-full h-full after"></div>
      <div className="content relative flex flex-col items-center w-full p-4 transition-transform z-10">
        <div className="title text-lg font-bold leading-tight">{title}</div>
        <div className="copy font-serif text-lg italic leading-snug opacity-100 transform translate-y-0">
          {description}
        </div>
        <Link
          href={link}
          target="_blank"
          className="btn cursor-pointer mt-6 px-6 py-3 text-xs font-bold tracking-wide uppercase text-white bg-brand-200 border-none hover:bg-opacity-75 focus:outline-dashed focus:outline-yellow-400 focus:outline-offset-3 rounded-full"
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default Card;
