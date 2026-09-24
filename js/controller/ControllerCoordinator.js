export class ControllerCoordinator {

    constructor(controllerMain, controllerMenuCoordinator, controllerHomeCoordinator, controllerFooterCoordinator, controllerGameClicker) {
        this.controllerMain = controllerMain;
        this.controllerMenuCoordinator = controllerMenuCoordinator;
        this.controllerHomeCoordinator = controllerHomeCoordinator;
        this.controllerFooterCoordinator = controllerFooterCoordinator;
        this.controllerGameClicker = controllerGameClicker
    }

    create() {
        this.createMain();
        this.createMainParts();
    }

    createMain() {
        this.controllerMain.createMain();
    }

    createMainParts() {
        this.createModuleMenu();
        this.createModuleHome();
        this.createModuleFooter();
        this.createModuleClickerGame();
    }

    createModuleMenu() {
        this.controllerMenuCoordinator.createMenu();
    }

    createModuleHome() {
        this.controllerHomeCoordinator.createHome();
    }

    createModuleFooter() {
        this.controllerFooterCoordinator.createFooter();
    }

    createModuleClickerGame() {
        this.controllerGameClicker.startGameClicker();
    }
}