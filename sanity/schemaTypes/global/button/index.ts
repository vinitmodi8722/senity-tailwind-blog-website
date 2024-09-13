/* eslint-disable import/no-anonymous-default-export */
import { buttonVariant } from "../../../constant/select-options";

export default {
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    {
      name: "variant",
      title: "Variant",
      type: "string",
      initialValue: "withIcon",
      options: { list: buttonVariant, direction: "vertical", layout: "radio" },
    },
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],
  preview: {
    select: {
      title: "label",
    },
  },
};
