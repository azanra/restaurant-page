import Ramen from "../assets/ramen.jpeg";
import Kare from "../assets/food.png";
import Onigirazu from "../assets/food_onigirazu.png";

export const homeDomAttribute = [
  {
    parentElement: "#content",
    elementType: "div",
    elementAttribute: {
      id: "homeContent",
    },
  },
  {
    parentElement: "#homeContent",
    elementType: "div",
    elementAttribute: {
      class: "contentHeader",
    },
  },
  {
    parentElement: ".contentHeader",
    elementType: "h1",
    elementAttribute: {
      class: "header",
    },
    textContent: "Restaurant",
  },
  {
    parentElement: "#homeContent",
    elementType: "div",
    elementAttribute: {
      class: "contentIntro",
    },
  },
  {
    parentElement: ".contentIntro",
    elementType: "h2",
    elementAttribute: {
      class: "introHeader",
    },
    textContent: "Why choose us?",
  },
  {
    parentElement: ".contentIntro",
    elementType: "div",
    elementAttribute: {
      class: "imgContainer",
    },
  },
  {
    parentElement: ".imgContainer",
    elementType: "img",
    elementAttribute: {
      class: "foodImg",
      src: Ramen,
    },
  },
  {
    parentElement: ".contentIntro",
    elementType: "p",
    elementAttribute: {
      class: "introDesc",
    },
    textContent:
      "We've been in this industry for 30 years, and we already mastered the way of the creating a ramen. The one that you wouldn't find on the fast food restaurant. We provided the ramen with the newest and highest quality ingredient that ensure our ramen the best it could be",
  },
  {
    parentElement: "#homeContent",
    elementType: "div",
    elementAttribute: {
      class: "contentHour",
    },
  },
  {
    parentElement: ".contentHour",
    elementType: "h2",
    elementAttribute: {
      class: "hourHeader",
    },
    textContent: "Available At",
  },
  {
    parentElement: ".contentHour",
    elementType: "p",
    elementAttribute: {
      class: "hourText",
    },
    textContent: "Everyday from 8pm to 9am!",
  },
  {
    parentElement: "#homeContent",
    elementType: "div",
    elementAttribute: {
      class: "contentLocation",
    },
  },
  {
    parentElement: ".contentLocation",
    elementType: "h2",
    elementAttribute: {
      class: "locationHeader",
    },
    textContent: "Location",
  },
  {
    parentElement: ".contentLocation",
    elementType: "p",
    elementAttribute: {
      class: "locationText",
    },
    textContent:
      "This is definitely a real location, Town Village, Street 071.",
  },
];

export const menuDomAttribute = [
  {
    parentElement: "#content",
    elementType: "div",
    elementAttribute: {
      class: "menuContent",
    },
  },
  {
    parentElement: ".menuContent",
    elementType: "div",
    elementAttribute: {
      class: "contentHeader",
    },
  },
  {
    parentElement: ".contentHeader",
    elementType: "h1",
    elementAttribute: {
      class: "header",
    },
    textContent: "Menu",
  },
  {
    parentElement: ".menuContent",
    elementType: "div",
    elementAttribute: {
      class: "menu",
    },
  },
  {
    parentElement: ".menu",
    elementType: "div",
    elementAttribute: {
      id: "firstMenu",
    },
  },
  {
    parentElement: "#firstMenu",
    elementType: "h2",
    elementAttribute: {
      class: "menuName",
    },
    textContent: "Ramen",
  },
  {
    parentElement: "#firstMenu",
    elementType: "div",
    elementAttribute: {
      id: "firstMenuBody",
    },
  },
  {
    parentElement: "#firstMenuBody",
    elementType: "div",
    elementAttribute: {
      id: "firstMenuText",
    },
  },
  {
    parentElement: "#firstMenuText",
    elementType: "p",
    elementAttribute: {
      class: "menuDesc",
    },
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos consequuntur numquam laborum eveniet ab esse nobis ad non, repellat facere vero fugiat deleniti tenetur qui minus magnam culpa autem.",
  },

  {
    parentElement: "#firstMenuText",
    elementType: "p",
    elementAttribute: {
      class: "menuPrice",
    },
    textContent: "$5.00",
  },
  {
    parentElement: "#firstMenuBody",
    elementType: "img",
    elementAttribute: {
      class: "menuImage",
      src: Ramen,
    },
  },
  ////////
  {
    parentElement: ".menu",
    elementType: "div",
    elementAttribute: {
      id: "secondMenu",
    },
  },
  {
    parentElement: "#secondMenu",
    elementType: "h2",
    elementAttribute: {
      class: "menuName",
    },
    textContent: "Kare",
  },
  {
    parentElement: "#secondMenu",
    elementType: "div",
    elementAttribute: {
      id: "secondMenuBody",
    },
  },
  {
    parentElement: "#secondMenuBody",
    elementType: "div",
    elementAttribute: {
      id: "secondMenuText",
    },
  },
  {
    parentElement: "#secondMenuText",
    elementType: "p",
    elementAttribute: {
      class: "menuDesc",
    },
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos consequuntur numquam laborum eveniet ab esse nobis ad non, repellat facere vero fugiat deleniti tenetur qui minus magnam culpa autem.",
  },

  {
    parentElement: "#secondMenuText",
    elementType: "p",
    elementAttribute: {
      class: "menuPrice",
    },
    textContent: "$4.00",
  },
  {
    parentElement: "#secondMenuBody",
    elementType: "img",
    elementAttribute: {
      class: "menuImage",
      src: Kare,
    },
  },
  /////////
  {
    parentElement: ".menu",
    elementType: "div",
    elementAttribute: {
      id: "thirdMenu",
    },
  },
  {
    parentElement: "#thirdMenu",
    elementType: "h2",
    elementAttribute: {
      class: "menuName",
    },
    textContent: "Onigirazu",
  },
  {
    parentElement: "#thirdMenu",
    elementType: "div",
    elementAttribute: {
      id: "thirdMenuBody",
    },
  },
  {
    parentElement: "#thirdMenuBody",
    elementType: "div",
    elementAttribute: {
      id: "thirdMenuText",
    },
  },
  {
    parentElement: "#thirdMenuText",
    elementType: "p",
    elementAttribute: {
      class: "menuDesc",
    },
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quos consequuntur numquam laborum eveniet ab esse nobis ad non, repellat facere vero fugiat deleniti tenetur qui minus magnam culpa autem.",
  },

  {
    parentElement: "#thirdMenuText",
    elementType: "p",
    elementAttribute: {
      class: "menuPrice",
    },
    textContent: "$2.00",
  },
  {
    parentElement: "#thirdMenuBody",
    elementType: "img",
    elementAttribute: {
      class: "menuImage",
      src: Onigirazu,
    },
  },
];

export const contactDomAttribute = [
  {
    parentElement: "#content",
    elementType: "div",
    elementAttribute: {
      class: "contactContent",
    },
  },
  {
    parentElement: ".contactContent",
    elementType: "div",
    elementAttribute: {
      class: "contentHeader",
    },
  },
  {
    parentElement: ".contentHeader",
    elementType: "h1",
    elementAttribute: {
      class: "header",
    },
    textContent: "Contact Us",
  },
  {
    parentElement: ".contactContent",
    elementType: "div",
    elementAttribute: {
      class: "contactInfo",
    },
  },
  {
    parentElement: ".contactInfo",
    elementType: "p",
    elementAttribute: {
      class: "name",
    },
    textContent: "owner",
  },
  {
    parentElement: ".contactInfo",
    elementType: "p",
    elementAttribute: {
      class: "phoneNumber",
    },
    textContent: "012-345-6789",
  },
  {
    parentElement: ".contactInfo",
    elementType: "p",
    elementAttribute: {
      class: "email",
    },
    textContent: "ownerEmail@email.com",
  },
];
