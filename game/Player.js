import chalk from "chalk";

export function CreatePlayerObj(nome, profession, level) {
  let player = {
    nome: nome,
    profession: profession.nome,
    stats: {
      health: profession.stats.health,
      maxhealth: profession.stats.health
    },
    level: level,
    quests: [],
    inventory: [],
  }

  return player;
}

export default class Player {
  nome = ""
  profession = null
  level = 1
  inventory = {}
  quests = {}
  stats = {
    xp: 0,
    xpToLvlUP: 1000,
    health: 0,
    maxhealth: 0,
    defense: 0,
    attack: 50
  }

  Create(player) {
    this.nome = player.nome
    this.profession = player.profession
    this.level = player.level
    this.inventory = player.inventory
    this.quests = player.quests

    if (player.stats.xp) this.stats.xp = player.stats.xp
    if (player.stats.xpToLvlUP) this.stats.xpToLvlUP = player.stats.xpToLvlUP
    if (player.stats.health) this.stats.health = player.stats.health
    if (player.stats.maxhealth) this.stats.maxhealth = player.stats.maxhealth
    if (player.stats.attack) this.stats.attack = player.stats.attack
    if (player.stats.defense) this.stats.defense = player.stats.defense
  }

  Attack(target) {
    target.Hurt(this.stats.attack * (target.stats.defense / 100 + 1));
  }

  Hurt(damage) {
    this.stats.health -= damage;
    if (this.stats.health <= 0) {
      this.stats.health = 0;
      process.emit('BattleResult', { result: "lost" })
    }
  }

  AddXp(xp) {
    this.stats.xp += xp;
    let message = "";
    if (this.stats.xp >= this.stats.xpToLvlUP) {
      message = this.LevelUp();
    }

    return message;
  }

  LevelUp() {
    this.level++;
    this.stats.xpToLvlUP *= 1.5;
    return `  Level up\n  ${chalk.yellow(this.level - 1)} -> ${chalk.yellow(this.level)}`;
  }
}

class Inventory {
  constructor() {

  }
}

class Quests {
  constructor() {

  }
}