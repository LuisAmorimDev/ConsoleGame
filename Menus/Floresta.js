import { MenuList } from "./ClassMenus.js";
import chalk from "chalk";
import inquirer from "inquirer";

const choices = ['Caçar', 'Viajar', new inquirer.Separator, 'Voltar']

const thenJogar = (awnser) => {
  if (awnser.floresta === 'Voltar') {
    process.emit("Jogar");
    return;
  }
  process.emit(awnser.floresta)
}

const Floresta = new MenuList('floresta', chalk.green('🌲 Floresta 🌲\n') + '  🧭 1k da 🏰 Cidade', choices, thenJogar)
export default Floresta;
export const FlorestaAlias = chalk.green('🌲 Floresta');