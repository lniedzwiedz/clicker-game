import * as variablesButtonGameColor from "../../../common/variable/home/game/variablesButtonGameColor.js";

export class ViewButtonGameColor {

    setButtonGameColorForRound(roundColor) {
        this.setButtonGameColor(roundColor);
    }

    setButtonGameColor(roundColor) {
        variablesButtonGameColor.rootVariables.style.
        setProperty(
            variablesButtonGameColor.cssButtonGameColor,
            roundColor
        );
    }
}