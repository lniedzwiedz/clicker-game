import {ModuleGame} from "./ModuleGame.js";
import {ModuleMenu} from "./ModuleMenu.js";


export class ModuleMain {

    constructor() {

        this.moduleMenu =
            new ModuleMenu();

        this.moduleGame =
            new ModuleGame();
    }

    createGame() {
        this.moduleMenu.createMenu();
        this.moduleGame.createGame();
    }
}