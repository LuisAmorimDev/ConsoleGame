import chalk from "chalk";
import inquirer from "inquirer";
import { MenuList } from "./ClassMenus.js";


const choices = ["Quests", "Spells", "Voltar"]

const thenJornal = (awnsers) => {
  if (awnsers.jornal === "Voltar") {
    process.emit("Jogar");
    return;
  }
  process.emit(awnsers.jornal,Jornal);
}

const Jornal = (player) => {
  const msg = `Character Jornal
Nome: ${chalk.gray(player.nome)}
Profession: ${chalk.gray(player.profession)}
EXP: ${chalk.gray(player.exp + '/' + player.expToLvlUP)}
${new inquirer.Separator}
Health: ${chalk.gray(player.stats.health + '/' + player.stats.maxhealth)}
`;
  return new MenuList("jornal", msg, choices, thenJornal)
}
export default Jornal;