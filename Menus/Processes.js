import inquirer from "inquirer";
import chalk from "chalk";
import Jogar from "./Jogar.js";
import Floresta from "./Floresta.js";
import CreateCharacter from "./CreateCharacter.js";
import { GamePlayer } from "../index.js";
import { MenuInput } from "./ClassMenus.js";
import Jornal from "./Jornal.js";
import Load from "./Load.js";
import Main from "./Main.js";

process.on("Main", () => {
  console.clear();
  inquirer.prompt(Main.getPrompt()).then(Main.getThen());
});

process.on("Jogar", () => {
  console.clear();
  if (GamePlayer.nome === "") {
    process.emit("CreateCharacter");
    return;
  }
  inquirer.prompt(Jogar.getPrompt()).then(Jogar.getThen());
});

process.on("Sair", () => {
  console.clear();
  console.log(chalk.bold.blue("A Sair...  Até logo!"));
});

process.on("CreateCharacter", () => {
  console.clear();
  inquirer
    .prompt(CreateCharacter.getPrompt())
    .then(CreateCharacter.getThen());
});

process.on("Floresta", () => {
  console.clear();
  inquirer
    .prompt(Floresta.getPrompt())
    .then(Floresta.getThen());
});

process.on("Stats", () => {
  console.clear();
  console.log(
    `${chalk.bold.blue("Stats")}
    ${chalk.bold.blue("Nome:")}${GamePlayer.nome}
    ${chalk.bold.blue("Profession:")}${GamePlayer.profession}
    ${chalk.bold.blue("Health:")}${GamePlayer.stats.health}/${GamePlayer.stats.maxhealth}`
  );
  let menu = new MenuInput("blank", "Continue...", () => {
    process.emit("Jogar");
  });
  inquirer.prompt(menu.getPrompt()).then(menu.getThen());
});

process.on("Jornal", () => {
  console.clear();
  let jornal = Jornal(GamePlayer);
  inquirer.prompt(jornal.getPrompt()).then(jornal.getThen());
});

process.on("Load", (menuAVoltar) => {
  console.clear();
  let myLoad = Load(menuAVoltar);
  inquirer.prompt(myLoad.getPrompt()).then(myLoad.getThen());
});
