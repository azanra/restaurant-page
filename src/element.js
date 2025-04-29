class Element {
  static createElement(attribute) {
    const parentElement = document.querySelector(attribute.parentElement);
    const newElement = document.createElement(attribute.elementType);
    newElement.setAttribute("id", attribute.elementAttribute);
    newElement.textContent = attribute.elementTextContent;
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
