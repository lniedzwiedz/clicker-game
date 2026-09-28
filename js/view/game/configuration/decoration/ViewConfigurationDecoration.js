import {
    createElementI,
    addElementClassNameById,
    createElementDiv
} from "../../../../common/function/commonFunctions.js";

import * as variablesConfigurationDecoration
    from "../../../../common/variable/game/configuration/decoration/variablesConfigurationDecoration.js";


export class ViewConfigurationDecoration {

    createContainerConfigurationDecoration() {
        this.createContainerConfigurationDecorationPrimary();
        this.createConfigurationDecoration();
    }

    createContainerConfigurationDecorationPrimary() {
        this.createContainerConfigurationDecorationMain();
    }

    createContainerConfigurationDecorationMain() {
        createElementDiv(
            variablesConfigurationDecoration.containerConfigurationMainPartsId,
            variablesConfigurationDecoration.containerConfigurationDecorationMainId,
        );
    }

    createConfigurationDecoration() {
        this.createConfigurationDecorationMain();
        this.createIconScrewdriverWrench();
    }

    createConfigurationDecorationMain() {
        createElementDiv(
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