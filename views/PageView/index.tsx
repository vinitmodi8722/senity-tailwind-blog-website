import { Page } from "../../lib/sanity/types/page";
import SectionView from "@/components/commons/sectionView";

export interface PageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: Page;
  slug: string;
}

export default function PageView(props: PageViewProps) {
  const { preview, loading, page, slug } = props;
  const { layoutProps } = page || {};

  return <></>;
}
