class Element {
  static createElement(attribute) {
    const parentElement = document.querySelector(attribute.parentElement);
    const newElement = document.createElement(attribute.elementType);
    newElement.setAttribute("id", attribute.elementAttribute);
    newElement.textContent = attribute.elementTextContent;
    parentElement.append(newElement);
  }
}
