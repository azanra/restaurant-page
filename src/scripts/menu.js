import { menuDomAttribute } from "./attribute.js";
import Element from "./element.js";

export const menu = () => {
  const menuAttribute = JSON.parse(JSON.stringify(menuDomAttribute));
  console.log(menuAttribute);
  menuAttribute.map((item) => {
    Element.createElement(item);
  });
};
