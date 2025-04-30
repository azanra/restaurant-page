export default class Element {
  static createElement(attribute) {
    const parentElement = document.querySelector(attribute.parentElement);
    const newElement = document.createElement(attribute.elementType);
    Element.setMultipleAttribute(newElement, attribute.elementAttribute);
    Element.setTextContent(newElement, attribute.textContent);
    parentElement.append(newElement);
  }
  static setMultipleAttribute(element, attribute) {
    for (const key in attribute) {
      element.setAttribute(key, attribute[key]);
    }
  }
  static setTextContent(element, elementTextContent) {
    if (elementTextContent) {
      element.textContent = elementTextContent;
    }
  }
}
