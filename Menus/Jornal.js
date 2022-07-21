import chalk from "chalk";
import inquirer from "inquirer";
import { GamePlayer } from "../index.js";
import { MenuList } from "./ClassMenus.js";


const choices = ["Quests", "Spells", "Voltar"]

const thenJornal = (awnsers) => {
  if (awnsers.jornal === "Voltar") {
    process.emit("Jogar");
    return;
  }
  process.emit(awnsers.jornal, Jornal);
}

const Jornal = () => {
  const msg = `Character Jornal
Nome: ${chalk.gray(GamePlayer.nome)}
Profession: ${chalk.gray(GamePlayer.profession)}
EXP: ${chalk.gray(GamePlayer.stats.xp + '/' + GamePlayer.stats.xpToLvlUP)}
${new inquirer.Separator}
Health: ${chalk.gray(GamePlayer.stats.health + '/' + GamePlayer.stats.maxhealth)}
`;
  return new MenuList("jornal", msg, choices, thenJornal)
}
export default Jornal;