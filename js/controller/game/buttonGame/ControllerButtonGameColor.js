export class ControllerButtonGameColor {

    constructor(viewButtonGameColor) {
        this.viewButtonGameColor = viewButtonGameColor;
    }

    setButtonGameColorAtStart() {
        this.setButtonGameBackgroundColorClass();
        this.setButtonGameBackgroundColorAtStart();
    }

    setButtonGameBackgroundColorClass() {
        this.viewButtonGameColor.setButtonGameBackgroundColorClass();
    }

    setButtonGameBackgroundColorAtStart() {
        this.viewButtonGameColor.setButtonGameBackgroundColorAtStart();
    }

    setButtonGameColorForRound(roundColor) {
        this.viewButtonGameColor.setButtonGameBackgroundColorForRound(roundColor);
    }

    setConfigurationButtonGameColorForGameOver() {
        this.viewButtonGameColor.setConfigurationButtonGameColorForGameOver();
    }
}