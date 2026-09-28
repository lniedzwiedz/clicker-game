import {createElementDiv} from "../../../../common/function/commonFunctions.js";

import * as variablesConfigurationRoundPrimary from "../../../../common/variable/game/configuration/round/variablesConfigurationRoundPrimary.js";


export class ViewConfigurationRoundPrimary{

    createContainerConfigurationRoundPrimary(){
        this.createContainerConfigurationRoundMain();
        this.createContainerConfigurationRoundMainParts();
    }

    createContainerConfigurationRoundMain(){
        createElementDiv(
            variablesConfigurationRoundPrimary.containerConfigurationMainPartsId,
            variablesConfigurationRoundPrimary.containerConfigurationRoundMainId,
        );
    }

    createContainerConfigurationRoundMainParts() {
        createElementDiv(
            variablesConfigurationRoundPrimary.containerConfigurationRoundMainId,
            variablesConfigurationRoundPrimary.containerConfigurationRoundMainPartsId
        );
    }
}