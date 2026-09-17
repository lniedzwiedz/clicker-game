import {
    createElementDiv
} from "../../common/function/commonFunctions.js";

import * as variablesConfigurationMain from "../../common/variable/configuration/variablesConfigurationMain.js";

export class ViewConfiguration {

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