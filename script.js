const winchmoreHill = new Audio("./StopRecordings/winchmoreHill.ogg");
const shrubberyGardens = new Audio("./StopRecordings/shrubberyGardens.ogg");
const greenDragonLane = new Audio("./StopRecordings/greenDragonLane.ogg");
const oldParkRidings = new Audio("./StopRecordings/oldParkRidings.ogg");

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
      break;
  }
};

document
  .getElementById("winchmore")
  .addEventListener("click", () => playSound("winchmoreHill"));

document
  .getElementById("shrubberyGardens")
  .addEventListener("click", () => playSound("shrubberyGardens"));
document
  .getElementById("greenDragonLane")
  .addEventListener("click", () => playSound("greenDragonLane"));

document
  .getElementById("oldParkRidings")
  .addEventListener("click", () => playSound("oldParkRidings"));
