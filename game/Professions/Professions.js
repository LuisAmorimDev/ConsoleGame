{
  nome: "";
  stats: {
    health: 10;   //health -> vida do jogador quando chegar a 0 morre;
    energy: 10;   //energy -> energia usada para realizar acções durnate o dia
    attack: 10;   //attack -> quantidade de dano que o jogador vai dar
    luck: 10;     //luck -> usado nos rolls de rng e de encontros ou eventos
    defense: {
      magical: 10;
      physical: 10;
    };            //defense -> reduz o dano recebido (cada ponto * com o multiplicador total da armadura)-(dano recebido)=(dano sofrido)
    evasion: 10;  //evasion -> diz qual a chance de o enemigo errar um acerto
  };
}

export const Professions = ["Hunter", "Guard", "Merchant"]

export const getProfession = (name) => {
  switch (name) {
    case "Hunter":
      return new Hunter();
    case "Guard":
      return new Guard();
    case "Merchant":
      return new Merchant();
  }
}

class Profession {
  constructor(nome) {
    this.nome = nome;
  }

  getHealth() {
    return this.stats.health;
  }
}

class Hunter extends Profession {
  stats = {
    health: 75,
  }
  constructor() {
    super("Hunter");

  }
}

class Guard extends Profession {
  stats = {
    health: 100,
  }
  constructor() {
    super("Guard");

  }
}

class Merchant extends Profession {
  stats = {
    health: 65,
  }
  constructor() {
    super("Merchant");

  }
}