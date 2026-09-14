import {ViewMain} from "./view/ViewMain.js";
import {ViewMenu} from "./view/menu/ViewMenu.js";
import {GameModule} from "./module/GameModule.js";
import {ViewFooter} from "./view/footer/ViewFooter.js";

const viewMain = new ViewMain();
viewMain.createContainerMainSection();

const viewMenu = new ViewMenu();
viewMenu.createMenu();

const gameModule = new GameModule();
gameModule.createGame();

const viewFooter = new ViewFooter();
viewFooter.createFooter();


console.log("Clicker game: version 20260914v50_branch_class_20");