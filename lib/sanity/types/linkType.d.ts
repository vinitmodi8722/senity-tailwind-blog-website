import { LINK_TYPES } from "../../utils/resolveUrl";

export type CoreLinkFields = {
  _type: "link";
  openTheLinkinANewWindow?: boolean;
  id?: string;
};

export type LinkFields<T> = CoreLinkFields & T;
export interface ExternalReferenceFields {
  type: LINK_TYPES.externalReference;
  url: string;
}
export interface InternalReferenceFields {
  type: LINK_TYPES.reference;
  slug: string;
  pageType: string;
}
export interface SectionReferenceFields {
  type: LINK_TYPES.sectionReference;
  url: `#${string}` | null;
}

export type LinkType = LinkFields<
  ExternalReferenceFields | InternalReferenceFields | SectionReferenceFields
>;
