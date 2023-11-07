import { busStops } from "../stopInfo/busStops.js";
import { playSound } from "./playSound.js";

const buttonContainer = document.getElementById("busRouteContainer");

busStops.forEach((stop) => {
  const button = document.createElement("button");

  button.id = stop.id;
  button.textContent = stop.name;
  button.className = "busButton";
  button.setAttribute("onClick", "");

  button.addEventListener("click", () => {
    playSound(stop.id);
  });

  buttonContainer.appendChild(button);
});
