import { getSaveFiles, Loader } from "../game/Files.js";
import { MenuList } from "./ClassMenus.js";
import { setGamePlayer } from "../index.js"

let choices = ["Voltar"];
const choicesPromise = new Promise((resolve, reject) => {
  let list = getSaveFiles();

  if (!list) {
    reject("No save files");
    return;
  } else {
    resolve(list);
    return;
  }
});
choicesPromise.then(function (list) { choices = list; }, function (err) { getSaveFiles() });

let myPromise = new Promise(function (resolve, reject) {
  let player = Loader()
  if (!player)
    reject();
  else
    resolve(player);
});


const Load = (menuAVoltar) => {
  const then = (awnser) => {
    if (awnser.load === "Voltar") {
      process.emit(menuAVoltar);
      return;
    }

    myPromise.then(function (player) { setGamePlayer(player); process.emit("Stats"); }, function () { process.emit("Main"); });
  }

  return new MenuList("load", "Load Game", [...choices, "Voltar"], then)
}

export default Load;