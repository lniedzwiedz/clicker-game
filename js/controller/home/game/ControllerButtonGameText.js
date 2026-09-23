export class ControllerButtonGameText {

    constructor(viewButtonGameText) {
        this.viewButtonGameText = viewButtonGameText;
    }

    createButtonGameTextGameOver() {
        this.viewButtonGameText.createConfigurationButtonGameTextGameOver();
    }

    removeButtonGameTextGameOver() {
        this.viewButtonGameText.removeConfigurationButtonGameTextGameOver();
    }
}