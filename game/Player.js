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
  exp = 0;
  expToLvlUP = 1000;
  inventory = {}
  quests = {}
  stats = { health: 0, maxhealth: 0 }

  Create(player) {
    this.nome = player.nome
    this.profession = player.profession
    this.stats.health = player.stats.health
    this.stats.maxhealth = player.stats.maxhealth
    this.level = player.level
    this.inventory = player.inventory
    this.quests = player.quests
  }

  // Create(nome, profession, level, inventory, quests) {
  //   this.nome = nome;
  //   this.profession = profession.nome;
  //   this.level = level;
  //   this.inventory = inventory;
  //   this.quests = quests;
  // }
}

class Inventory {
  constructor() {

  }
}

class Quests {
  constructor() {

  }
}