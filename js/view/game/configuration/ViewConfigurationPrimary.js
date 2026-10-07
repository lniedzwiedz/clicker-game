import {
    createElementDiv
} from "../../../common/function/commonFunctions.js";

import * as variablesConfigurationMain
    from "../../../common/variable/game/configuration/variablesConfigurationPrimary.js";


export class ViewConfigurationPrimary {

    createContainerConfigurationPrimary() {
        this.createContainerConfigurationMain();
        this.createContainerConfigurationMainParts();
    }

    createContainerConfigurationMain() {
        createElementDiv(
            variablesConfigurationMain.containerMenuMainPartsId,
            variablesConfigurationMain.containerConfigurationMainId
        );
    }

    createContainerConfigurationMainParts() {
        createElementDiv(
            variablesConfigurationMain.containerConfigurationMainId,
            variablesConfigurationMain.containerConfigurationMainPartsId
        );
    }
}