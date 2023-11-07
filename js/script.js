import { busStops } from "../stopInfo/busStops.js";
import { busStopAudio } from "./busStopAudio.js";

const playSound = (stop) => {
  switch (stop) {
    case "stationRoad":
      busStopAudio.stationRoad.play();
      break;
    case "winchmoreHill":
      busStopAudio.winchmoreHill.play();
      break;
    case "shrubberyGardens":
      busStopAudio.shrubberyGardens.play();
      break;
    case "greenDragonLane":
      busStopAudio.greenDragonLane.play();
      break;
    case "oldParkRidings":
      busStopAudio.oldParkRidings.play();
      break;
    case "hadleyWay":
      busStopAudio.hadleyWay.play();
      break;
    case "bazileRoad":
      busStopAudio.bazileRoad.play();
      break;
    case "eversleyParkRoad":
      busStopAudio.eversleyParkRoad.play();
      break;
    case "eversleyMount":
      busStopAudio.eversleyMount.play();
      break;
    case "churchHill":
      busStopAudio.churchHill.play();
      break;
    case "parkGate":
      busStopAudio.parkGate.play();
      break;
    case "queenElizabethsDrive":
      busStopAudio.queenElizabethsDrive.play();
      break;
    case "stThomasRoad":
      busStopAudio.stThomasRoad.play();
      break;
    case "southgateStation":
      busStopAudio.southgateStation.play();
      break;
    case "southgatePoliceStation":
      busStopAudio.southgatePoliceStation.play();
      break;
    case "southgateAsda":
      busStopAudio.southgateAsda.play();
      break;
    case "avenueRoad":
      busStopAudio.avenueRoad.play();
      break;
    case "manorDrive":
      busStopAudio.manorDrive.play();
      break;
    case "hampdenSquare":
      busStopAudio.hampdenSquare.play();
      break;
    case "osidgeLibrary":
      busStopAudio.osidgeLibrary.play();
      break;
    case "deneRoad":
      busStopAudio.deneRoad.play();
      break;
    case "beresfordAvenue":
      busStopAudio.beresfordAvenue.play();
      break;
    case "pollardRoad":
      busStopAudio.pollardRoad.play();
      break;
    case "myddeltonPark":
      busStopAudio.myddeltonPark.play();
      break;
    case "ashcroftCourt":
      busStopAudio.ashcroftCourt.play();
      break;
    case "whetstoneTheGriffin":
      busStopAudio.whetstoneTheGriffin.play();
      break;
    case "whetstoneHighRoadFriernBarnetLane":
      busStopAudio.whetstoneHighRoadFriernBarnetLane.play();
      break;
    case "swanLane":
      busStopAudio.swanLane.play();
      break;
    case "derwentCrescent":
      busStopAudio.derwentCrescent.play();
      break;
    case "finchleyPark":
      busStopAudio.finchleyPark.play();
      break;
    case "ravensdaleAvenue":
      busStopAudio.ravensdaleAvenue.play();
      break;
    case "torringtonPark":
      busStopAudio.torringtonPark.play();
      break;
    case "tallyHoCorner":
      busStopAudio.tallyHoCorner.play();
      break;
    case "woodberryGrove":
      busStopAudio.woodberryGrove.play();
      break;
    case "granvilleRoad":
      busStopAudio.granvilleRoad.play();
      break;
    case "victoriaPark":
      busStopAudio.victoriaPark.play();
      break;
    case "longLane":
      busStopAudio.longLane.play();
      break;
    case "finchleyCentralStation":
      busStopAudio.finchleyCentralStation.play();
      break;
    case "dollisParkFinchleyCentralStation":
      busStopAudio.dollisParkFinchleyCentralStation.play();
      break;
    case "stMarysChurch":
      busStopAudio.stMarysChurch.play();
      break;
    case "stMarysAvenue":
      busStopAudio.stMarysAvenue.play();
      break;
    case "ardenRoad":
      busStopAudio.ardenRoad.play();
      break;
    case "crookedUsage":
      busStopAudio.crookedUsage.play();
      break;
    case "broughtonAvenue":
      busStopAudio.broughtonAvenue.play();
      break;
    case "greatNorthWay":
      busStopAudio.greatNorthWay.play();
      break;
    case "alexandraRoad":
      busStopAudio.alexandraRoad.play();
      break;
    case "theQuadrant":
      busStopAudio.theQuadrant.play();
      break;
    case "churchEnd":
      busStopAudio.churchEnd.play();
      break;
    case "greyhoundHill":
      busStopAudio.greyhoundHill.play();
      break;
    case "rowanDrive":
      busStopAudio.rowanDrive.play();
      break;
    case "heritageAvenue":
      busStopAudio.heritageAvenue.play();
      break;
    case "peelCentre":
      busStopAudio.peelCentre.play();
      break;
    case "colindaleStation":
      busStopAudio.colindaleStation.play();
      break;

    default:
      alert("No stop found");
      break;
  }
};

const buttonContainer = document.getElementById("busRouteContainer");

busStops.forEach((stop) => {
  const button = document.createElement("button");

  button.id = stop.id;
  button.textContent = stop.name;
  button.className = "busButton";

  const event = "ontouchstart" in window ? "touchstart" : "click";

  button.addEventListener(event, () => {
    playSound(stop.id);
  });

  buttonContainer.appendChild(button);
});
