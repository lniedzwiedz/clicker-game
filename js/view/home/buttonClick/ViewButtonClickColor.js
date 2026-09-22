import * as variablesButtonClickColor from "../../../common/variable/home/buttonClick/variablesButtonClickColor.js";

export class ViewButtonClickColor {

    setConfigurationButtonClickRoundColor() {
        this.setButtonClickColor(variablesButtonClickColor.gameFiledButtonPlayStartColor);
    }

    setButtonClickColor(roundColor) {
        variablesButtonClickColor.rootVariables.style.setProperty(
            variablesButtonClickColor.cssGameFiledButtonPlayColor,
            roundColor
        );
    }
}