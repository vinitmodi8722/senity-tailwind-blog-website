import React from "react";
import { NavLinkType } from "../../../../lib/sanity/types";
import DarkmodeSection from "@/components/darkmodeSection";

const NavbarSection = ({ data }: { data: NavLinkType[] }) => {
  return (
    <div className="flex justify-center fixed top-5 items-center left-[50%] right-[50%] z-50">
      {data.map((navLink, navIndex) => (
        <div key={navIndex} className="flex">
          <div className="border-[1px] bg-white/75 border-black flex h-[50px]  justify-center items-center rounded-full gap-4 font-semibold w-[290px] py-3 px-8">
            {navLink.links.map((linkItem, linkIndex) => (
              <div key={linkIndex}>
                <a href={linkItem.link}>{linkItem.label}</a>
              </div>
            ))}
            <div className="flex justify-center w-full h-full items-center">
              <DarkmodeSection />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarSection;
