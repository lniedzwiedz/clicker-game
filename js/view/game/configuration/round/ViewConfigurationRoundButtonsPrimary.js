import {
    createElementDiv,
    setElementStyletAsGrid,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesConfigurationRoundButtonsPrimary
    from "../../../../common/variable/game/configuration/round/variablesConfigurationRoundButtonsPrimary.js";


export class ViewConfigurationRoundButtonsPrimary {

    createContainerConfigurationRoundButtonsPrimary() {
        this.createContainerConfigurationRoundButtonsRowPrimary();
    }

    createContainerConfigurationRoundButtonsRowPrimary() {

        let maxRowNumber =
            variablesConfigurationRoundButtonsPrimary.configurationRoundMaxRowNumber;

        for (let rowNumber = 0; rowNumber < maxRowNumber; rowNumber++) {

            this.createContainerConfigurationRoundRowMain(rowNumber);
            this.createContainerConfigurationRoundRowMainParts(rowNumber);
        }
    }

    createContainerConfigurationRoundRowMain(rowNumber) {
        this.createContainerRoundRowMain(rowNumber);
        this.setContainerRoundRowMainStyleAsGrid(rowNumber);
    }

    createContainerRoundRowMain(rowNumber) {
        createElementDiv(
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundMainPartsId,
            this.getContainerConfigurationRoundRowMainId(rowNumber)
        );
    }

    setContainerRoundRowMainStyleAsGrid(rowNumber) {

        let gridRowStartNumber = 1 + rowNumber;
        let gridColumnEndNumber = 2 + rowNumber;

        setElementStyletAsGrid(
            this.getContainerConfigurationRoundRowMainId(rowNumber),
            gridRowStartNumber,
            1,
            2,
            gridColumnEndNumber,
            "1fr",
            "1fr"
        );
    }

    createContainerConfigurationRoundRowMainParts(rowNumber) {
        this.createContainerRoundRowMainParts(rowNumber);
        this.setContainerRoundRowMainPartsStyleAsGrid(rowNumber);
    }

    createContainerRoundRowMainParts(rowNumber) {
        createElementDiv(
            this.getContainerConfigurationRoundRowMainId(rowNumber),
            this.getContainerConfigurationRoundRowMainPartsId(rowNumber)
        );
    }

    setContainerRoundRowMainPartsStyleAsGrid(rowNumber) {

        let buttonNumberPerRow =
            variablesConfigurationRoundButtonsPrimary.configurationRoundMaxButtonNumberPerRow;

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + buttonNumberPerRow + ", 1fr 38fr 1fr)";

        setElementStyletAsGrid(
            this.getContainerConfigurationRoundRowMainPartsId(rowNumber),
            1,
            1,
            2,
            2,
            gridTemplateRows,
            gridTemplateColumns
        );
    }

    getContainerConfigurationRoundRowMainId(rowNumber) {
        return variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPrefixId
            + valueToString(rowNumber)
    }

    getContainerConfigurationRoundRowMainPartsId(rowNumber) {
        return variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber);
    }
}