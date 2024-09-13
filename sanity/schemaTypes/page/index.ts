import { SchemaTypeDefinition } from "sanity";

export default {
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This field is only used for CMS.",
      group: "main",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "main",
    },
    {
      name: "pageBuilder",
      type: "array",
      of: [{ type: "reference", to: { type: "section" } }],
      group: "main",
    },
    // {
    //   name: "hasWithBackGround",
    //   title: "Has WithBackGround",
    //   description: "This field is only used for Footer Banner.",
    //   type: "boolean",
    //   group: "main",
    //   initialValue: false,
    // },
    // {
    //   name: "footerBanner",
    //   title: "Footer Banner",
    //   type: "reference",
    //   to: { type: "footerBanner" },
    //   options: { disableNew: true },
    //   group: "main",
    // },
    // {
    //   name: "seo",
    //   title: "SEO",
    //   type: "seo",
    //   group: "seo",
    // },
  ],
} as SchemaTypeDefinition;
