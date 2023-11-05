import busStops from "./stopInfo/busStops.json";

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
const parkGateAvenue = new Audio("./StopRecordings/parkGateAvenue.ogg");
const queenElizabetshDrive = new Audio(
  "./StopRecordings/queenElizabetshDrive.ogg"
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
const beresfordRoad = new Audio("./StopRecordings/beresfordRoad.ogg");
const pollardRoad = new Audio("./StopRecordings/pollardRoad.ogg");
const myddletonPark = new Audio("./StopRecordings/myddletonPark.ogg");
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

  buttonContainer.appendChild(button);
});
