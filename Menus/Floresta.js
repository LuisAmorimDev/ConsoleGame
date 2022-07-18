import { MenuList } from "./ClassMenus.js";
import chalk from "chalk";

const choices = ['Coletar', 'Caçar', 'Viajar']

const thenJogar = (awnser) => {
  if (awnser.jornal === "Voltar") {
    process.emit("Jogar");
    return;
  }
  process.emit(awnser.jogar)
}

const Floresta = new MenuList('floresta', chalk.green('Floresta'), choices, thenJogar)
export default Floresta;