import chalk from "chalk";
import { GamePlayer } from "../index.js";
import { MenuInput } from "./ClassMenus.js";


const BattleResult = (battle) => {
  let msg = "battle result: " + battle.result;

  if (battle.result === "win") {
    msg = "You won the battle!\n  And won " + chalk.cyan(battle.rewards.xp) + " XP!\n";
    msg += GamePlayer.AddXp(battle.rewards.xp);
  }

  if (battle.result === "lost") {
    msg = "You lost the battle!\n";
  }

  const then = (awnser) => {
    if (battle.result === "win") {
      process.emit("Jogar");
    } else {
      process.emit("Main");
    }
  }

  return new MenuInput("battle-result", msg, then)
}

export default BattleResult;