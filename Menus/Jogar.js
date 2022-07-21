import chalk from "chalk";
import { MenuList } from "./ClassMenus.js";
import { FlorestaAlias } from "./Floresta.js";
import { choicesExtra } from "./Main.js";

const choices = [FlorestaAlias, chalk.white('🏰 Cidade'),]

const thenJogar = (awnser) => {
  process.emit(awnser.jogar, Jogar)
}

const Jogar = new MenuList('jogar', '===JOGAR===', [...choices, ...choicesExtra], thenJogar)
export default Jogar;