import { homeDomAttribute } from "./attribute.js";
import Element from "./element.js";

export const home = () => {
  const homeAttribute = JSON.parse(JSON.stringify(homeDomAttribute));
  console.log(homeAttribute);
  homeAttribute.map((item) => {
    Element.createElement(item);
  });
};
