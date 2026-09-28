export class ControllerButtonGameCoordinator {

    constructor(controllerButtonGamePrimary, controllerButtonGameColor, controllerButtonClickText) {
        this.controllerButtonGamePrimary = controllerButtonGamePrimary;
        this.controllerButtonGameColor = controllerButtonGameColor;
        this.controllerButtonClickText = controllerButtonClickText
    }

    createButtonGame() {
        this.controllerButtonGamePrimary.createButtonGameMainAtStart();
        this.controllerButtonGameColor.setButtonGameColorAtStart();
        this.controllerButtonClickText.removeButtonGameText();
    }

    setOnGame(onGame) {
        this.controllerButtonGamePrimary
            .setOnGame(onGame);
    }

    setButtonGameColor(roundColor) {
        this.controllerButtonGameColor.setButtonGameColorForRound(roundColor);
    }

    addButtonGameListener() {
        this.controllerButtonGamePrimary.addButtonGameClickListener();
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
        this.controllerButtonGamePrimary.removeButtonGameClickListener();
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