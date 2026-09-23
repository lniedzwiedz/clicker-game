export class ControllerButtonGameColor {

    constructor(viewButtonGameColor) {
        this.viewButtonGameColor = viewButtonGameColor;
    }

    setButtonGameBackgroundColorClass() {
        this.viewButtonGameColor.setButtonGameBackgroundColorClass();
    }

    setButtonGameColorForRound(roundColor) {
        this.viewButtonGameColor.setButtonGameBackgroundColorForRound(roundColor)
    }

    setButtonGameBackgroundColorAtStart() {
        this.viewButtonGameColor.setButtonGameBackgroundColorAtStart()
    }

    setConfigurationButtonGameColorForGameOver() {
        this.viewButtonGameColor.setConfigurationButtonGameColorForGameOver()
    }
}