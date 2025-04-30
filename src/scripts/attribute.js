import Ramen from "../assets/ramen.jpeg";

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
