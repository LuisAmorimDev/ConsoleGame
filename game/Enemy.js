export default class Enemy {
  level = 1;
  stats = {
    health: 100,
    maxhealth: 100,
    attack: 10,
    defense: 5,
  };
  name = 'enemy';
  rewards = { xp: 100 }

  constructor() {
  }

  Attack(target) {
    target.stats.health = this.stats.attack * (target.stats.defense * 100)
  }

  Hurt(damage) {
    console.log(damage, this.stats);
    this.stats.health -= damage;
    if (this.stats.health < 0) {
      this.stats.health = 0;
      process.emit('BattleResult', { result: "win", rewards: this.rewards })
    }
  }
}