export class ControllerMain {

    constructor(viewMain, controllerMenuMain, controllerHomeMain, controllerFooterMain, controllerMainGame) {
        this.viewMain = viewMain;
        this.controllerMenuMain = controllerMenuMain;
        this.controllerHomeMain = controllerHomeMain;
        this.controllerFooterMain = controllerFooterMain;
        this.controllerMainGame = controllerMainGame
    }

    create(){
        this.createMain();
        this.createMainParts();
    }

    createMain(){
        this.viewMain.createMain();
    }

    createMainParts(){
        this.createModuleMenu();
        this.createModuleHome();
        this.createModuleFooter();
        this.createModuleGame();
    }

    createModuleMenu(){
        this.controllerMenuMain.createMenu();
    }

    createModuleHome(){
        this.controllerHomeMain.createHome();
    }

    createModuleFooter(){
        this.controllerFooterMain.createFooter();
    }

    createModuleGame(){
        this.controllerMainGame.configureStartGame();
    }
}