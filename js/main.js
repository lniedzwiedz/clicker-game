import {ViewMain} from "./ViewMain.js";
import {ViewMenu} from "./menu/ViewMenu.js";
import {ViewGame} from "./viewGame/ViewGame.js";
import {ViewFooter} from "./footer/ViewFooter.js";


const viewMain = new ViewMain();
viewMain.setContainerMainSection();


const viewMenu = new ViewMenu();
viewMenu.createMenu();


const viewGame = new ViewGame();
viewGame.createViewGameConfigurationRound();
viewGame.createViewGamePlay();

const viewFooter = new ViewFooter();
viewFooter.createFooter();



console.log("Clicker game: version 20260904v50_branch_class_4");