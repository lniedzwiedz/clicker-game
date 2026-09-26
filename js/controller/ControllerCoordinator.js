export class ControllerCoordinator {

    constructor(controllerPrimary, controllerMenuCoordinator, controllerHomeCoordinator, controllerFooterCoordinator, controllerGameClicker) {
        this.controllerPrimary = controllerPrimary;
        this.controllerMenuCoordinator = controllerMenuCoordinator;
        this.controllerHomeCoordinator = controllerHomeCoordinator;
        this.controllerFooterCoordinator = controllerFooterCoordinator;
        this.controllerGameClicker = controllerGameClicker
    }

    create() {
        this.createViewPrimary();
        this.createViewPrimaryParts();
    }

    createViewPrimary() {
        this.controllerPrimary.createViewPrimary();
    }

    createViewPrimaryParts() {
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
        this.controllerGameClicker.createGameClicker();
    }
}