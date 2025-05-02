import { contactDomAttribute } from "./attribute.js";
import Element from "./element.js";

export const contact = () => {
  const contactAttribute = JSON.parse(JSON.stringify(contactDomAttribute));
  contactAttribute.map((item) => {
    Element.createElement(item);
  });
};
