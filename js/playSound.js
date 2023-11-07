import { busStopAudio } from "./busStopAudio.js";

const playAudio = (audio) => {
  audio.play().catch((error) => console.log(error));
};

export const playSound = (stop) => {
  switch (stop) {
    case "stationRoad":
      playAudio(busStopAudio.stationRoad);
      break;
    case "winchmoreHill":
      playAudio(busStopAudio.winchmoreHill);
      break;
    case "shrubberyGardens":
      playAudio(busStopAudio.shrubberyGardens);
      break;
    case "greenDragonLane":
      playAudio(busStopAudio.greenDragonLane);
      break;
    case "oldParkRidings":
      playAudio(busStopAudio.oldParkRidings);
      break;
    case "hadleyWay":
      playAudio(busStopAudio.hadleyWay);
      break;
    case "bazileRoad":
      playAudio(busStopAudio.bazileRoad);
      break;
    case "eversleyParkRoad":
      playAudio(busStopAudio.eversleyParkRoad);
      break;
    case "eversleyMount":
      playAudio(busStopAudio.eversleyMount);
      break;
    case "churchHill":
      playAudio(busStopAudio.churchHill);
      break;
    case "parkGate":
      playAudio(busStopAudio.parkGate);
      break;
    case "queenElizabethsDrive":
      playAudio(busStopAudio.queenElizabethsDrive);
      break;
    case "stThomasRoad":
      playAudio(busStopAudio.stThomasRoad);
      break;
    case "southgateStation":
      playAudio(busStopAudio.southgateStation);
      break;
    case "southgatePoliceStation":
      playAudio(busStopAudio.southgatePoliceStation);
      break;
    case "southgateAsda":
      playAudio(busStopAudio.southgateAsda);
      break;
    case "avenueRoad":
      playAudio(busStopAudio.avenueRoad);
      break;
    case "manorDrive":
      playAudio(busStopAudio.manorDrive);
      break;
    case "hampdenSquare":
      playAudio(busStopAudio.hampdenSquare);
      break;
    case "osidgeLibrary":
      playAudio(busStopAudio.osidgeLibrary);
      break;
    case "deneRoad":
      playAudio(busStopAudio.deneRoad);
      break;
    case "beresfordAvenue":
      playAudio(busStopAudio.beresfordAvenue);
      break;
    case "pollardRoad":
      playAudio(busStopAudio.pollardRoad);
      break;
    case "myddeltonPark":
      playAudio(busStopAudio.myddeltonPark);
      break;
    case "ashcroftCourt":
      playAudio(busStopAudio.ashcroftCourt);
      break;
    case "whetstoneTheGriffin":
      playAudio(busStopAudio.whetstoneTheGriffin);
      break;
    case "whetstoneHighRoadFriernBarnetLane":
      playAudio(busStopAudio.whetstoneHighRoadFriernBarnetLane);
      break;
    case "swanLane":
      playAudio(busStopAudio.swanLane);
      break;
    case "derwentCrescent":
      playAudio(busStopAudio.derwentCrescent);
      break;
    case "finchleyPark":
      playAudio(busStopAudio.finchleyPark);
      break;
    case "ravensdaleAvenue":
      playAudio(busStopAudio.ravensdaleAvenue);
      break;
    case "torringtonPark":
      playAudio(busStopAudio.torringtonPark);
      break;
    case "tallyHoCorner":
      playAudio(busStopAudio.tallyHoCorner);
      break;
    case "woodberryGrove":
      playAudio(busStopAudio.woodberryGrove);
      break;
    case "granvilleRoad":
      playAudio(busStopAudio.granvilleRoad);
      break;
    case "victoriaPark":
      playAudio(busStopAudio.victoriaPark);
      break;
    case "longLane":
      playAudio(busStopAudio.longLane);
      break;
    case "finchleyCentralStation":
      playAudio(busStopAudio.finchleyCentralStation);
      break;
    case "dollisParkFinchleyCentralStation":
      playAudio(busStopAudio.dollisParkFinchleyCentralStation);
      break;
    case "stMarysChurch":
      playAudio(busStopAudio.stMarysChurch);
      break;
    case "stMarysAvenue":
      playAudio(busStopAudio.stMarysAvenue);
      break;
    case "ardenRoad":
      playAudio(busStopAudio.ardenRoad);
      break;
    case "crookedUsage":
      playAudio(busStopAudio.crookedUsage);
      break;
    case "broughtonAvenue":
      playAudio(busStopAudio.broughtonAvenue);
      break;
    case "greatNorthWay":
      playAudio(busStopAudio.greatNorthWay);
      break;
    case "alexandraRoad":
      playAudio(busStopAudio.alexandraRoad);
      break;
    case "theQuadrant":
      playAudio(busStopAudio.theQuadrant);
      break;
    case "churchEnd":
      playAudio(busStopAudio.churchEnd);
      break;
    case "greyhoundHill":
      playAudio(busStopAudio.greyhoundHill);
      break;
    case "rowanDrive":
      playAudio(busStopAudio.rowanDrive);
      break;
    case "heritageAvenue":
      playAudio(busStopAudio.heritageAvenue);
      break;
    case "peelCentre":
      playAudio(busStopAudio.peelCentre);
      break;
    case "colindaleStation":
      playAudio(busStopAudio.colindaleStation);
      break;

    default:
      alert("No stop found");
      break;
  }
};
