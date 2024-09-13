import { PageBuilderType } from "../../../../lib/sanity/types/page";
import Section from "@/components/commons/section";

export interface SectionViewProps {
  block: PageBuilderType;
  slug: string;
  hasFooterBannerBackGround: boolean;
}
const SectionView: React.FC<SectionViewProps> = ({
  block,
  slug,
  hasFooterBannerBackGround,
}) => {
  const { content } = block || {};

  return (
    Array.isArray(content) &&
    content?.map((item, index) => (
      <Section
        slug={slug}
        data={item}
        key={index}
        hasFooterBannerBackGround={hasFooterBannerBackGround}
      />
    ))
  );
};
export default SectionView;
