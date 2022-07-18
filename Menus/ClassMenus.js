//Classes declaration
export class Menu {
  then = (answers) => { console.log(JSON.stringify(answers, null, '  ')); };

  constructor(type, name, message, choices, then) {
    if (type)
      this.type = type;
    if (name)
      this.name = name;
    if (message)
      this.message = message;
    if (choices)
      this.choices = choices;
    if (then)
      this.then = then;
  }

  getPrompt() {
    return {
      type: this.type,
      name: this.name,
      message: this.message,
      choices: this.choices
    }
  }

  getThen() {
    return this.then;
  }

}

export class MenuList extends Menu {
  constructor(name, message, choices, then) {
    super('list', name, message, choices, then);
  }
}

export class MenuInput extends Menu {

  constructor(name, message, then) {
    super('input', name, message, [], then);
  }
}

export class MenuInputList extends MenuInput {

  list = [];

  constructor(name, message, then, thenList) {
    super(name, message, then);
    this.list.push(super.getPrompt());
    this.thenList = thenList;
  }

  addItem(item) {
    this.list.push(item.getPrompt());
  }

  getPrompt() {
    return this.list.map((prompt) => { return prompt; });
  }

  getThen() {
    return this.thenList;
  }
}

export class MenuConfirmation extends Menu {

  constructor(name, message, defaultValue, then) {
    super('confirm', name, message, [], then);
    this.defaultValue = defaultValue;
  }

  getPrompt() {
    return { ...super.getPrompt(), default: this.defaultValue };
  }
}


