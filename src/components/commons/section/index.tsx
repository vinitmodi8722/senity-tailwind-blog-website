import React from "react";
import { SectionType } from "../../../../lib/sanity/types/page";
import HomeHeroSection from "@/components/homeHeroSection";

interface SectionProps {
  data: SectionType;
  slug: string;
  hasFooterBannerBackGround: boolean;
}

const Section: React.FC<SectionProps> = ({
  data,
  slug,
  hasFooterBannerBackGround,
}) => {
  switch (data._type) {
    case "homeHeroSection":
      return <HomeHeroSection />;
    default:
      return null;
  }
};

export default Section;
