import { busStops } from "../stopInfo/busStops.js";
import { playSound } from "./playSound.js";
import { PointerListener } from "./contact.js";

const buttonContainer = document.getElementById("busRouteContainer");

busStops.forEach((stop) => {
  const button = document.createElement("button");

  button.id = stop.id;
  button.textContent = stop.name;
  button.className = "busButton";
  //   button.setAttribute("onClick", "");

  //   button.addEventListener("click", () => {
  //     console.log("button clicked");
  //     playSound(stop.id);
  //   });
  const pointerListener = new PointerListener(button);
  button.addEventListener("tap", () => {
    console.log("button tapped");
    playSound(stop.id);
  });

  buttonContainer.appendChild(button);
});
