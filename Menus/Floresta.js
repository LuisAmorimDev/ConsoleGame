import { MenuList } from "./ClassMenus.js";
import chalk from "chalk";
import inquirer from "inquirer";
import Enemy from "../game/Enemy.js";

const choices = ['Battle', 'Viajar', new inquirer.Separator, 'Voltar']

const thenJogar = (awnser) => {
  if (awnser.floresta === 'Voltar') {
    process.emit("Jogar");
    return;
  }
  if (awnser.floresta === 'Battle') {
    process.emit("Battle", new Enemy());
    return;
  }
  process.emit(awnser.floresta)
}

const Floresta = new MenuList('floresta', chalk.green('🌲 Floresta 🌲\n') + '  🧭 1k da 🏰 Cidade', choices, thenJogar)
export default Floresta;
export const FlorestaAlias = chalk.green('🌲 Floresta');