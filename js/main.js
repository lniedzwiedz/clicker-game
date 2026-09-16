import {ViewMain} from "./view/ViewMain.js";
import {ViewFooter} from "./view/footer/ViewFooter.js";
import {ModuleMain} from "./module/ModuleMain.js";


const viewMain = new ViewMain();
viewMain.createContainerMainSection();

const moduleMain = new ModuleMain();
moduleMain.createGame();

const viewFooter = new ViewFooter();
viewFooter.createFooter();


console.log("Clicker game: version 20260916v50_branch_class_27");