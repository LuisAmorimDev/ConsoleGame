import { MenuList } from "./ClassMenus.js";
import { choicesExtra } from "./Main.js";

const choices = ['Floresta', 'Cidade',]

const thenJogar = (awnser) => {
  process.emit(awnser.jogar, Jogar)
}

const Jogar = new MenuList('jogar', '===JOGAR===', [...choices, ...choicesExtra], thenJogar)
export default Jogar;