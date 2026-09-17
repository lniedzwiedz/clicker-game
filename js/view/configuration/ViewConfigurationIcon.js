import {
    createElementDivAnaDivChild,
    createElementI,
    setElementClassNameById
} from "../../common/function/commonFunctions";
import * as variablesConfigurationIcon from "../../common/variable/configuration/variablesConfigurationIcon";

export class ViewConfigurationIcon {

    createContainerConfigurationDecorationIcon() {

        createElementDivAnaDivChild(
            variablesConfigurationIcon.containerConfigurationMainParts,
            variablesConfigurationIcon.containerConfigurationDecorationIconMain,
            variablesConfigurationIcon.configurationDecorationIconDisplayIconFlex
        );

        setElementClassNameById(
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