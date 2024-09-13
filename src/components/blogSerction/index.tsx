/* eslint-disable @next/next/no-img-element */

import React from "react";
import { RecentPostType } from "../../../lib/sanity/types";

const BlogSerction = ({ data }: { data: RecentPostType[] }) => {
  return (
    <div className="  pl-[125px] pr-[125px] mt-[235px]">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center ">
            <h2 className="text-4xl font-semibold mb-[40px] dark:text-white">
              {item.title}
            </h2>
            <a
              href="#"
              className="text-purple-600 text-xl mb-5 underline dark:text-yellow-300"
            >
              {item.seemore}
            </a>
          </div>
          <div className="grid grid-cols-3 gap-[60px] mt-8">
            {item.blog.map((blogItem, blogIndex) => (
              <div
                key={blogIndex}
                className="bg-white dark:bg-transparent group"
              >
                <img
                  src={blogItem.image.asset.url}
                  alt="blog"
                  className="w-[378px] h-[283px] object-cover rounded-2xl bg-transparent"
                />
                <div className="p-4">
                  <span className="text-purple-600 dark:text-yellow-300 font-semibold uppercase text-sm">
                    {blogItem.type}
                  </span>
                  <h3 className="text-[18px] dark:text-white font-semibold mt-2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-500 dark:from-accentDark/50  dark:to-accentDark/50 bg-[length:0px_5px] group-hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                      {blogItem.blogtitle}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{blogItem.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSerction;
