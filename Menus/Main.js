import chalk from "chalk";
import inquirer from "inquirer";
import { GamePlayer, getGamePlayer } from "../index.js";
import { MenuList } from "./ClassMenus.js";

export const choicesExtra = [new inquirer.Separator, 'Jornal', 'Load', 'Sair'];

const choices = [GamePlayer ? 'Continuar' : 'Jogar', 'Load', 'Sair'];

if (getGamePlayer()) choices.unshift('Novo Jogo');


const thenMain = (awnser) => {
  if (awnser.menu === 'Continuar') {
    process.emit('jogar');
    return;
  }

  if (awnser.menu === 'Novo Jogo') {
    process.emit('CreateCharacter');
    return;
  }

  if (awnser.menu === 'Load') {
    process.emit('Load', "Main");
    return;
  }

  process.emit(awnser.menu, "Main");
}
const Main = new MenuList('menu', chalk.bgAnsi256(24).bold.white('   Hero RPG   '), choices, thenMain)
export default Main

