import { getProfession, Professions } from "../game/Professions/Professions.js";
import { Saver } from "../game/Files.js";
import { GamePlayer } from "../index.js";
import { MenuInputList, MenuList } from "./ClassMenus.js"
import { CreatePlayerObj } from "../game/Player.js";


const CreateCharacter = new MenuInputList("character_name", "Character Name:", () => { },
  (awnser) => {
    GamePlayer.Create(CreatePlayerObj(awnser.character_name, getProfession(awnser.character_profession), 1));
    Saver(GamePlayer);
    process.emit("Stats");
  })

CreateCharacter.addItem(new MenuList("character_profession", "Character Profession", Professions,
  (awnser) => {
  }))

export default CreateCharacter