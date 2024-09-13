/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FeaturedPostType } from "../../../lib/sanity/types";

const FeaturePostSection = ({ data }: { data: FeaturedPostType[] }) => {
  return (
    <div className="">
      <div className="gap-8 relative  -mb-[110px]">
        {data.map((item, index) => (
          <div key={index} className="relative flex">
            <div>
              <div className="absolute mt-[100px] ml-[110px] font-semibold text-4xl dark:text-white">
                {item.maintitle}
              </div>
              <div className="relative group w-[620px] h-[417px] mt-[200px] ml-[110px] overflow-hidden rounded-xl">
                <img
                  src={item.image.asset.url}
                  alt="image"
                  className=" w-[650px] h-[420px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 rounded-xl"></div>

                <div className="absolute bottom-3 ml-2 p-6 text-white">
                  <span className="inline-block sm:px-10  bg-black/90 rounded-full capitalize font-semibold  border-solid border-white hover:scale-105 transition-all ease duration-200 text-sm sm:text-base px-6 py-1 sm:py-2 !border ">
                    <a href={item.buttonUrl}>{item.buttonText}</a>
                  </span>
                  <h2 className="mt-3 text-2xl font-bold">
                    <span className="bg-gradient-to-r from-accent  to-accent dark:from-accentDark/50  dark:to-accentDark/50 bg-[length:0px_5px] group-hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                      {item.title}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-[205px] ml-[26px] ">
              {item.features.map((item, index) => (
                <div key={index} className="flex group">
                  <div className="h-[195px] w-[195px]  overflow-hidden rounded-xl mb-5">
                    <img
                      src={item.featureImage.asset.url}
                      className="h-[195px] w-[195px] object-cover rounded-xl mb-5 group-hover:scale-105"
                    />
                  </div>
                  <div className="ml-[20px] mt-[33px] w-[380px]">
                    <div className="text-[#7b00d4] uppercase text-xs font-semibold mb-2 dark:text-yellow-300">
                      {item.type}
                    </div>
                    <div className="capitalize font-semibold mb-2 text-xl dark:text-white">
                      <span className="bg-gradient-to-r from-purple-500  to-purple-500 dark:from-accentDark/50  dark:to-accentDark/50 bg-[length:0px_5px] group-hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                        {item.title}
                      </span>
                    </div>
                    <div className="dark:text-gray-300">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePostSection;
