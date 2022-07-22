import { GamePlayer } from "../index.js";
import { MenuList } from "./ClassMenus.js"

const choices = ["Attack", "Run"];

const Battle = (enemy) => {
  const msg = `Battle
    Enemy: ${enemy.name} (${enemy.stats.health}/${enemy.stats.maxhealth})
    Your health: ${GamePlayer.stats.health}/${GamePlayer.stats.maxhealth}`;

  const then = (awnser) => {
    if (awnser.battle == "Attack") {
      GamePlayer.Attack(enemy);
      if (enemy.stats.health > 0) {
        process.emit("Battle", enemy);
      }
    }
  }
  return new MenuList("battle", msg, choices, then)
}

export default Battle;