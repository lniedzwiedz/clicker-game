export class ControllerButtonGameText {

    constructor(viewButtonGameText) {
        this.viewButtonGameText = viewButtonGameText;
    }

    createButtonGameTextGameStopped() {
        this.viewButtonGameText.createConfigurationButtonGameTextStopped();
    }

    createButtonGameTextGameOver() {
        this.viewButtonGameText.createConfigurationButtonGameTextGameOver();
    }

    removeButtonGameText() {
        this.viewButtonGameText.removeConfigurationButtonGameText();
    }
}