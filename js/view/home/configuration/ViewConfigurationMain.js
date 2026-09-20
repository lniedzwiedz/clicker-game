import {
    createElementDiv
} from "../../../common/function/commonFunctions.js";

import * as variablesConfigurationMain from "../../../common/variable/home/configuration/variablesConfigurationMain.js";

export class ViewConfigurationMain {

    createContainerConfigurationMain() {

        createElementDiv(
            variablesConfigurationMain.containerMenuMainParts,
            variablesConfigurationMain.containerConfigurationMain
        );

        createElementDiv(
            variablesConfigurationMain.containerConfigurationMain,
            variablesConfigurationMain.containerConfigurationMainParts
        );
    }
}