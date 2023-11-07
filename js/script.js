import { busStops } from "../stopInfo/busStops.js";
import { playSound } from "./playSound.js";

const buttonContainer = document.getElementById("busRouteContainer");

busStops.forEach((stop) => {
  const button = document.createElement("button");

  button.id = stop.id;
  button.textContent = stop.name;
  button.className = "busButton";
  button.setAttribute("click", "");

  button.addEventListener("click", () => {
    console.log("button clicked");
    playSound(stop.id);
  });
  //   button.addEventListener("touchstart", () => {
  //     console.log("touchstart event");
  //     playSound(stop.id);
  //   });

  buttonContainer.appendChild(button);
});
