import "./style.css";
import friedChicken from "./images/fried-chicken.jpg";
import losPollosHermanos from "./images/los-pollos-hermanos.jpg";

function addImages() {
  const element = document.createElement("div");

  const friedChickenImage = new Image();
  friedChickenImage.src = friedChicken;

  console.log(friedChickenImage);

  const losPollosHermanosImage = new Image();
  losPollosHermanosImage.src = losPollosHermanos;

  element.appendChild(losPollosHermanosImage);

  console.log(element);
  return element;
}

console.log("hello world");
