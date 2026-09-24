import {
    createElementDiv
} from "../../../common/function/commonFunctions.js";

import * as variablesConfigurationMain from "../../../common/variable/home/configuration/variablesConfigurationMain.js";

export class ViewConfigurationMain {

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