import { busStops } from "./stopInfo/busStops.js";

const stationRoad = new Audio("./StopRecordings/stationRoad.ogg");
const winchmoreHill = new Audio("./StopRecordings/winchmoreHill.ogg");
const shrubberyGardens = new Audio("./StopRecordings/shrubberyGardens.ogg");
const greenDragonLane = new Audio("./StopRecordings/greenDragonLane.ogg");
const oldParkRidings = new Audio("./StopRecordings/oldParkRidings.ogg");
const hadleyWay = new Audio("./StopRecordings/hadleyWay.ogg");
const bazileRoad = new Audio("./StopRecordings/bazileRoad.ogg");
const eversleyParkRoad = new Audio("./StopRecordings/eversleyParkRoad.ogg");
const eversleyMount = new Audio("./StopRecordings/eversleyMount.ogg");
const churchHill = new Audio("./StopRecordings/churchHill.ogg");
const parkGate = new Audio("./StopRecordings/parkGate.ogg");
const queenElizabethsDrive = new Audio(
  "./StopRecordings/queenElizabethsDrive.ogg"
);
const stThomasRoad = new Audio("./StopRecordings/stThomasRoad.ogg");
const southgateStation = new Audio("./StopRecordings/southgateStation.ogg");
const southgatePoliceStation = new Audio(
  "./StopRecordings/southgatePoliceStation.ogg"
);
const southgateAsda = new Audio("./StopRecordings/southgateAsda.ogg");
const avenueRoad = new Audio("./StopRecordings/avenueRoad.ogg");
const manorDrive = new Audio("./StopRecordings/manorDrive.ogg");
const hampdenSquare = new Audio("./StopRecordings/hampdenSquare.ogg");
const osidgeLibrary = new Audio("./StopRecordings/osidgeLibrary.ogg");
const deneRoad = new Audio("./StopRecordings/deneRoad.ogg");
const beresfordAvenue = new Audio("./StopRecordings/beresfordAvenue.ogg");
const pollardRoad = new Audio("./StopRecordings/pollardRoad.ogg");
const myddeltonPark = new Audio("./StopRecordings/myddeltonPark.ogg");
const ashcroftCourt = new Audio("./StopRecordings/ashcroftCourt.ogg");
const whetstoneTheGriffin = new Audio(
  "./StopRecordings/whetstoneTheGriffin.ogg"
);
const whetstoneHighRoadFriernBarnetLane = new Audio(
  "./StopRecordings/whetstoneHighRoadFriernBarnetLane.ogg"
);
const swanLane = new Audio("./StopRecordings/swanLane.ogg");
const derwentCrescent = new Audio("./StopRecordings/derwentCrescent.ogg");
const finchleyPark = new Audio("./StopRecordings/finchleyPark.ogg");
const ravensdaleAvenue = new Audio("./StopRecordings/ravensdaleAvenue.ogg");
const torringtonPark = new Audio("./StopRecordings/torringtonPark.ogg");
const tallyHoCorner = new Audio("./StopRecordings/tallyHoCorner.ogg");
const woodberryGrove = new Audio("./StopRecordings/woodberryGrove.ogg");
const granvilleRoad = new Audio("./StopRecordings/granvilleRoad.ogg");
const victoriaPark = new Audio("./StopRecordings/victoriaPark.ogg");
const longLane = new Audio("./StopRecordings/longLane.ogg");
const finchleyCentralStation = new Audio(
  "./StopRecordings/finchleyCentralStation.ogg"
);
const dollisParkFinchleyCentralStation = new Audio(
  "./StopRecordings/dollisParkFinchleyCentralStation.ogg"
);
const stMarysChurch = new Audio("./StopRecordings/stMarysChurch.ogg");
const stMarysAvenue = new Audio("./StopRecordings/stMarysAvenue.ogg");
const ardenRoad = new Audio("./StopRecordings/ardenRoad.ogg");
const crookedUsage = new Audio("./StopRecordings/crookedUsage.ogg");
const broughtonAvenue = new Audio("./StopRecordings/broughtonAvenue.ogg");
const greatNorthWay = new Audio("./StopRecordings/greatNorthWay.ogg");
const alexandraRoad = new Audio("./StopRecordings/alexandraRoad.ogg");
const theQuadrant = new Audio("./StopRecordings/theQuadrant.ogg");
const churchEnd = new Audio("./StopRecordings/churchEnd.ogg");
const greyhoundHill = new Audio("./StopRecordings/greyhoundHill.ogg");
const rowanDrive = new Audio("./StopRecordings/rowanDrive.ogg");
const heritageAvenue = new Audio("./StopRecordings/heritageAvenue.ogg");
const peelCentre = new Audio("./StopRecordings/peelCentre.ogg");
const colindaleStation = new Audio("./StopRecordings/colindaleStation.ogg");

const playSound = (stop) => {
  switch (stop) {
    case "stationRoad":
      stationRoad.play();
      break;
    case "winchmoreHill":
      winchmoreHill.play();
      break;
    case "shrubberyGardens":
      shrubberyGardens.play();
      break;
    case "greenDragonLane":
      greenDragonLane.play();
      break;
    case "oldParkRidings":
      oldParkRidings.play();
      break;
    case "hadleyWay":
      hadleyWay.play();
      break;
    case "bazileRoad":
      bazileRoad.play();
      break;
    case "eversleyParkRoad":
      eversleyParkRoad.play();
      break;
    case "eversleyMount":
      eversleyMount.play();
      break;
    case "churchHill":
      churchHill.play();
      break;
    case "parkGate":
      parkGate.play();
      break;
    case "queenElizabethsDrive":
      queenElizabethsDrive.play();
      break;
    case "stThomasRoad":
      stThomasRoad.play();
      break;
    case "southgateStation":
      southgateStation.play();
      break;
    case "southgatePoliceStation":
      southgatePoliceStation.play();
      break;
    case "southgateAsda":
      southgateAsda.play();
      break;
    case "avenueRoad":
      avenueRoad.play();
      break;
    case "manorDrive":
      manorDrive.play();
      break;
    case "hampdenSquare":
      hampdenSquare.play();
      break;
    case "osidgeLibrary":
      osidgeLibrary.play();
      break;
    case "deneRoad":
      deneRoad.play();
      break;
    case "beresfordAvenue":
      beresfordAvenue.play();
      break;
    case "pollardRoad":
      pollardRoad.play();
      break;
    case "myddeltonPark":
      myddeltonPark.play();
      break;
    case "ashcroftCourt":
      ashcroftCourt.play();
      break;
    case "whetstoneTheGriffin":
      whetstoneTheGriffin.play();
      break;
    case "whetstoneHighRoadFriernBarnetLane":
      whetstoneHighRoadFriernBarnetLane.play();
      break;
    case "swanLane":
      swanLane.play();
      break;
    case "derwentCrescent":
      derwentCrescent.play();
      break;
    case "finchleyPark":
      finchleyPark.play();
      break;
    case "ravensdaleAvenue":
      ravensdaleAvenue.play();
      break;
    case "torringtonPark":
      torringtonPark.play();
      break;
    case "tallyHoCorner":
      tallyHoCorner.play();
      break;
    case "woodberryGrove":
      woodberryGrove.play();
      break;
    case "granvilleRoad":
      granvilleRoad.play();
      break;
    case "victoriaPark":
      victoriaPark.play();
      break;
    case "longLane":
      longLane.play();
      break;
    case "finchleyCentralStation":
      finchleyCentralStation.play();
      break;
    case "dollisParkFinchleyCentralStation":
      dollisParkFinchleyCentralStation.play();
      break;
    case "stMarysChurch":
      stMarysChurch.play();
      break;
    case "stMarysAvenue":
      stMarysAvenue.play();
      break;
    case "ardenRoad":
      ardenRoad.play();
      break;
    case "crookedUsage":
      crookedUsage.play();
      break;
    case "broughtonAvenue":
      broughtonAvenue.play();
      break;
    case "greatNorthWay":
      greatNorthWay.play();
      break;
    case "alexandraRoad":
      alexandraRoad.play();
      break;
    case "theQuadrant":
      theQuadrant.play();
      break;
    case "churchEnd":
      churchEnd.play();
      break;
    case "greyhoundHill":
      greyhoundHill.play();
      break;
    case "rowanDrive":
      rowanDrive.play();
      break;
    case "heritageAvenue":
      heritageAvenue.play();
      break;
    case "peelCentre":
      peelCentre.play();
      break;
    case "colindaleStation":
      colindaleStation.play();
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

  button.addEventListener("click", () => {
    playSound(stop.id);
  });

  buttonContainer.appendChild(button);
});
