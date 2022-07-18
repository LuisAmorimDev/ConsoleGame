import { Loader } from "./game/Files.js";
import Player from "./game/Player.js";
import "./Menus/Processes.js"

let myPromise = new Promise(function (resolve, reject) {
  let player = Loader()
  if (!player)
    reject();
  else
    resolve(player);
});

myPromise.then(function (player) { GamePlayer = player; }, function (err) { Loader() });
export var GamePlayer;


// setInterval(function () {
//   console.log(JSON.stringify(GamePlayer, null, 2))
// }, 100);

// export var GamePlayer = new Player();
export function setGamePlayer(player) { GamePlayer = player; }
export function getGamePlayer() { return GamePlayer; }

process.emit("Main");