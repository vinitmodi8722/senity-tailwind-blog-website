/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FooterBottomType, FooterType } from "../../../lib/sanity/types";

const FooterSection = ({
  data,
  footerbottomdata,
}: {
  data: FooterType[];
  footerbottomdata: FooterBottomType[];
}) => {
  return (
    <div className="flex justify-center  mt-5">
      <div className="bg-black/90 dark:bg-yellow-300/80 h-[475px] w-[1440px] mb-10 rounded-2xl text-white dark:text-black">
        <div className="flex justify-center">
          <div className=" flex justify-center ">
            {data.map((item, index) => (
              <div key={index}>
                <div className="flex justify-center mt-[65px] text-4xl font-semibold">
                  {item.title}
                </div>
                <div className="flex justify-center mt-4 w-[850px] text-center font-normal">
                  {item.titletext}
                </div>

                <div className="flex justify-center mt-6  rounded-md">
                  <div className="flex items-center bg-white text-black w-[383px] h-[53px] rounded-md">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="py-2 border-b-[1px] w-[950px] ml-2 border-black focus:outline-none bg-transparent placeholder-opacity-50 text-black"
                    />
                    <div className="flex justify-end w-full mr-2">
                      <button className="h-[37px] w-[94px] rounded-md bg-black/90 text-white font-semibold  transition duration-300">
                        {item.btn.label}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  {item.sociallogolink.map((socialItem, index) => (
                    <div key={index} className="mx-2">
                      <a
                        href={socialItem.sociallogolink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <img
                          src={socialItem.sociallogo.asset.url}
                          alt="logo"
                          className="h-[25px] w-[25px] mt-4"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[100px] box-border border-t-2">
          {footerbottomdata.map((item, index) => (
            <div
              key={index}
              className="flex justify-center gap-[400px] mt-[20px] font-semibold"
            >
              <div className="">{item.leftsidetext}</div>
              <div className="underline">{item.centertextlink}</div>
              <div className="">
                <span>
                  {item.rightsidetext.slice(
                    0,
                    Math.floor(item.rightsidetext.length / 1.6)
                  )}
                </span>
                <span className="underline">
                  {item.rightsidetext.slice(
                    Math.floor(item.rightsidetext.length / 1.6)
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
