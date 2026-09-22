export class ControllerButtonClickColor {

    constructor(viewButtonColorColor) {
        this.viewButtonColorColor = viewButtonColorColor;
    }

    setButtonClickColorAtStart(){
        this.viewButtonColorColor.setConfigurationButtonClickRoundColor()
    }

    setButtonClickRoundColor(roundColor){
        this.viewButtonColorColor.setButtonClickColor(roundColor)
    }
}