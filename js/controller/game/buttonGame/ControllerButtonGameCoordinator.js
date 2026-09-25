export class ControllerButtonGameCoordinator {

    constructor(controllerButtonGameMain, controllerButtonGameColor, controllerButtonClickText) {
        this.controllerButtonGameMain = controllerButtonGameMain;
        this.controllerButtonGameColor = controllerButtonGameColor;
        this.controllerButtonClickText = controllerButtonClickText
    }

    createButtonGame() {
        this.controllerButtonGameMain.createButtonGameMainAtStart();
        this.controllerButtonGameColor.setButtonGameColorAtStart();
        this.controllerButtonClickText.removeButtonGameText();
    }

    setOnGame(onGame) {
        this.controllerButtonGameMain
            .setOnGame(onGame);
    }

    setButtonGameColor(roundColor) {
        this.controllerButtonGameColor.setButtonGameColorForRound(roundColor);
    }

    addButtonGameListener() {
        this.controllerButtonGameMain.addButtonGameClickListener();
    }

    configureButtonGameAtStop() {
        this.controllerButtonGameColor.setConfigurationButtonGameColorForGameOver();
        this.controllerButtonClickText.createButtonGameTextGameStopped();
        this.removeClickGameListener();
    }

    configureButtonGameForGameOver() {
        this.removeClickGameListener();
        this.createButtonGameTextGameOver();
        this.setButtonGameStyleGameOver();
    }

    removeClickGameListener() {
        this.controllerButtonGameMain.removeButtonGameClickListener();
    }

    createButtonGameTextGameOver() {
        this.controllerButtonClickText.createButtonGameTextGameOver();
    }

    setButtonGameStyleGameOver() {
        this.controllerButtonGameColor.setConfigurationButtonGameColorForGameOver();
    }

    removeConfigurationGameOver() {
        this.removeButtonGameText();
        this.removeButtonGameStyleGameOver();
    }

    removeButtonGameText() {
        this.controllerButtonClickText.removeButtonGameText();
    }

    removeButtonGameStyleGameOver() {
        this.controllerButtonGameColor.setButtonGameBackgroundColorAtStart();
    }
}