import {
    createElementDivAnaDivChild,
    createElementI,
    addElementClassNameById
} from "../../../common/function/commonFunctions.js";

import * as variablesConfigurationDecoration
    from "../../../common/variable/home/configuration/variablesConfigurationDecoration.js";


export class ViewConfigurationDecoration {

    createContainerConfigurationDecoration() {
        this.createContainerConfigurationDecorationMain();
        this.createIconScrewdriverWrench();
    }

    createContainerConfigurationDecorationMain() {

        createElementDivAnaDivChild(
            variablesConfigurationDecoration.containerConfigurationMainPartsId,
            variablesConfigurationDecoration.containerConfigurationDecorationMainId,
            variablesConfigurationDecoration.configurationDecorationId
        );

        addElementClassNameById(
            variablesConfigurationDecoration.configurationDecorationId,
            variablesConfigurationDecoration.configurationDecorationStyleDisplayFlex
        );
    }

    createIconScrewdriverWrench() {

        createElementI(
            variablesConfigurationDecoration.configurationDecorationId,
            variablesConfigurationDecoration.configurationDecorationIconScrewdriverWrenchId,
            variablesConfigurationDecoration.configurationDecorationIconScrewdriverWrenchStyleSolid,
            variablesConfigurationDecoration.configurationDecorationIconScrewdriverWrench
        );
    }
}