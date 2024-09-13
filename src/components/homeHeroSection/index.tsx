/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HomeHeroSectionType } from "../../../lib/sanity/types";

const HomeHeroSection = ({ data }: { data: HomeHeroSectionType[] }) => {
  return (
    <div className="">
      {data.map((item, index) => (
        <article
          key={index}
          className="flex flex-col items-start justify-end relative h-[85vh] mx-10 bg-cover bg-center rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${item.bgimage.asset.url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-0"></div>

          <img
            alt={item.title}
            decoding="async"
            className="absolute inset-0 w-full h-full object-center object-cover -z-10"
            src={item.bgimage.asset.url}
          />

          <div className="w-3/4 p-16 flex flex-col items-start justify-center z-10 text-white">
            {item.btn && (
              <a
                className="inline-block py-3 px-10 bg-black/60 text-white rounded-full capitalize font-semibold border border-white hover:scale-105 transition-all ease duration-200 text-base"
                href="#"
              >
                {item.btn.label}
              </a>
            )}

            <a className="mt-6 group" href={`/blogs/${item.title}`}>
              <h1 className="font-bold capitalize text-4xl text-white">
                <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50  dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                  {item.title}
                </span>
              </h1>
            </a>

            <p className="mt-4 text-xl text-white">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default HomeHeroSection;
