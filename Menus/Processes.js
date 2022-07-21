import inquirer from "inquirer";
import chalk from "chalk";
import Jogar from "./Jogar.js";
import Floresta, { FlorestaAlias } from "./Floresta.js";
import CreateCharacter from "./CreateCharacter.js";
import { GamePlayer } from "../index.js";
import { MenuConfirmation, MenuInput } from "./ClassMenus.js";
import Jornal from "./Jornal.js";
import Load from "./Load.js";
import Main from "./Main.js";
import Enemy from "../game/Enemy.js";
import Battle from "./Battle.js";
import BattleResult from "./BattleResult.js";
import { Saver } from "../game/Files.js";

process.on("Message", (message) => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  const messagePrompt = new MenuInput('message', message.message, {}, () => { });
  inquirer.prompt(messagePrompt.getPrompt()).then(messagePrompt.getThen());
})

process.on("Main", () => {
  console.clear();
  inquirer.prompt(Main.getPrompt()).then(Main.getThen());
});

process.on("Jogar", () => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  if (GamePlayer.nome === "") {
    process.emit("CreateCharacter");
    return;
  }
  inquirer.prompt(Jogar.getPrompt()).then(Jogar.getThen());
});

process.on("Sair", () => {
  console.clear();
  if (GamePlayer.nome !== "") {

    if (GamePlayer.nome !== "") {
      Saver(GamePlayer);
    }
  }
  console.log(chalk.bold.blue("A Sair...  Até logo!"));
});

process.on("CreateCharacter", () => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  inquirer
    .prompt(CreateCharacter.getPrompt())
    .then(CreateCharacter.getThen());
});

process.on(FlorestaAlias, () => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  inquirer
    .prompt(Floresta.getPrompt())
    .then(Floresta.getThen());
});

process.on("Stats", () => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  console.log(
    `${chalk.bold.blue("Stats")}\n${chalk.bold.blue("Nome:")}${GamePlayer.nome}\n${chalk.bold.blue("Profession:")}${GamePlayer.profession}\n${chalk.bold.blue("Health:")}${GamePlayer.stats.health}/${GamePlayer.stats.maxhealth}`);
  let menu = new MenuInput("blank", "Continue...", () => {
    process.emit("Jogar");
  });
  inquirer.prompt(menu.getPrompt()).then(menu.getThen());
});

process.on("Jornal", () => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  let jornal = Jornal();
  inquirer.prompt(jornal.getPrompt()).then(jornal.getThen());
});

process.on("Load", (menuAVoltar) => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  let myLoad = Load(menuAVoltar);
  inquirer.prompt(myLoad.getPrompt()).then(myLoad.getThen());
});

process.on("Battle", (enemy) => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  let myBattle = Battle(enemy);
  inquirer.prompt(myBattle.getPrompt()).then(myBattle.getThen());
});

process.on("BattleResult", (result) => {
  console.clear();
  if (GamePlayer.nome !== "") {
    Saver(GamePlayer);
  }
  let myBattleResult = BattleResult(result);
  inquirer.prompt(myBattleResult.getPrompt()).then(myBattleResult.getThen());
});