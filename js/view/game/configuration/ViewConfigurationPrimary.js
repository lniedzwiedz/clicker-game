import {
    createElementDiv
} from "../../../common/function/commonFunctions.js";

import * as variablesConfigurationMain from "../../../common/variable/game/configuration/variablesConfigurationPrimary.js";

export class ViewConfigurationPrimary {

    createContainerConfigurationMain() {

        createElementDiv(
            variablesConfigurationMain.containerMenuMainPartsId,
            variablesConfigurationMain.containerConfigurationMainId
        );

        createElementDiv(
            variablesConfigurationMain.containerConfigurationMainId,
            variablesConfigurationMain.containerConfigurationMainPartsId
        );
    }
}