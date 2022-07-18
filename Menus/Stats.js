import { MenuConfirmation } from "./ClassMenus.js";

const Stats = new MenuConfirmation("stats", "Stats", false, () => { process.emit("Jogar") })

export default Stats;