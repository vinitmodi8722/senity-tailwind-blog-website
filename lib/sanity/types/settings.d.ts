import { ButtonType, CustomImageType, IconLabelLinkType, LabelLinkType, RichTextType, TitleContentButtonType } from "./common";
import { LinkType } from "./linkType";

export interface NavItemsType {
  _type: "navItem";
  title?: string;
  link?: LinkType;
}
export interface HeaderType {
  _type: "header";
  logo?: CustomImageType;
  navItems: NavItemsType[];
  cta: ButtonType
}
export interface FooterLinksType {
  _type: "footerLinkBlock";
  title?: string;
  select?: "labelLinks" | "iconLabelLinks"
  labelLinks?: LabelLinkType[];
  iconLabelLinks?: IconLabelLinkType[]
  cta?: ButtonType
}
export interface BottomFooterLinkType {
  _type: "bottomFooterLink";
  label?: string;
  popUpData?: TitleContentButtonType
}
export interface FooterType {
  _type: "footer";
  logo?: CustomImageType
  content?: RichTextType
  footerLinks: FooterLinksType[];
  bottomDescription?: string
  bottomFooterLinks?: BottomFooterLinkType[]
}

export type MetaAttributeType = {
  _type: "metaAttribute";
  attributeKey?: string;
  attributeType?: string;
  attributeValueString?: string;
  attributeValueImage?: CustomImageType;
};

export type OpenGraphType = {
  _type: "openGraph";
  title: string;
  description: string;
  image: CustomImageType;
};

export type Twitter = {
  _type: "twitter";
  handle?: string;
  site?: string;
  cardType?: string;
};

export type MetaTagType = {
  _type: "metaTag";
  metaAttributes?: MetaAttributeType[];
};

export type SeoType = {
  _type?: "seo";
  metaDescription?: string;
  additionalMetaTags?: MetaTagType[];
  metaTitle?: string;
  openGraph?: OpenGraphType;
  twitter?: Twitter;
};
