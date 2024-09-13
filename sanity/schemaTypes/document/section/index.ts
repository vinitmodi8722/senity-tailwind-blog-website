import { SchemaTypeDefinition } from "sanity";
import ArrayMaxItems from "../../../component/arrayFunctions";
export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "This field is only used for CMS.",
    },

    {
      name: "content",
      type: "array",
      components: { input: ArrayMaxItems },
      of: [{ type: "homeHeroSection" }],
    },
  ],
} as SchemaTypeDefinition;
