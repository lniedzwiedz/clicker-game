import {
    createElementDivAnaDivChild,
    createElementI,
    addElementClassNameById
} from "../../../common/function/commonFunctions.js";

import * as variablesConfigurationIcon from "../../../common/variable/home/configuration/variablesConfigurationIcon.js";

export class ViewConfigurationDecorationIcon {

    createContainerConfigurationDecorationIcon() {

        createElementDivAnaDivChild(
            variablesConfigurationIcon.containerConfigurationMainParts,
            variablesConfigurationIcon.containerConfigurationDecorationIconMain,
            variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex
        );

        addElementClassNameById(
            variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex,
            variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex
        );

        createElementI(
            variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex,
            variablesConfigurationIcon.configurationDecorationIcon,
            variablesConfigurationIcon.containerConfigurationDecorationIconStyleSolid,
            variablesConfigurationIcon.containerConfigurationDecorationIconScrewdriverWrench
        );
    }
}