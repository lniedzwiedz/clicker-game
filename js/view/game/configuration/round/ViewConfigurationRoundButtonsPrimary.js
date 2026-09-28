import {
    createElementDiv,
    setElementStyletAsGrid,
    valueToString
} from "../../../../common/function/commonFunctions.js";

import * as variablesConfigurationRoundButtonsPrimary
    from "../../../../common/variable/game/configuration/round/variablesConfigurationRoundButtonsPrimary.js";


export class ViewConfigurationRoundButtonsPrimary {

    createContainerConfigurationRoundButtonsPrimary() {
        this.createContainerConfigurationRoundRowPrimary();
    }

    createContainerConfigurationRoundRowPrimary() {

        let buttonNumberPerRow =
            variablesConfigurationRoundButtonsPrimary.configurationRoundMaxButtonNumberPerRow;

        let maxRowNumber =
            variablesConfigurationRoundButtonsPrimary.configurationRoundMaxRowNumber;

        for (let rowNumber = 0; rowNumber < maxRowNumber; rowNumber++) {

            this.createContainerConfigurationRoundRowMain(
                rowNumber
            );

            this.createContainerConfigurationRoundRowMainParts(
                rowNumber,
                buttonNumberPerRow
            );
        }
    }

    createContainerConfigurationRoundRowMain(rowNumber) {
        this.createContainerRoundRowMain(rowNumber);
        this.setContainerRoundRowMainStyleAsGrid(rowNumber);
    }

    createContainerRoundRowMain(rowNumber) {
        createElementDiv(
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundMainPartsId,
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPrefixId
            + valueToString(rowNumber)
        );
    }

    setContainerRoundRowMainStyleAsGrid(rowNumber) {

        let gridRowStartNumber = 1 + rowNumber;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2 + rowNumber;

        let gridTemplateRows = "1fr";
        let gridTemplateColumns = "1fr";

        setElementStyletAsGrid(
            // childId,
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPrefixId
            + valueToString(rowNumber),
            gridRowStartNumber,
            gridColumnStartNumber,
            gridRowEndNumber,
            gridColumnEndNumber,
            gridTemplateRows,
            gridTemplateColumns
        );
    }

    createContainerConfigurationRoundRowMainParts(rowNumber, buttonNumberPerRow) {
        this.createContainerRoundRowMainParts(rowNumber);
        this.setContainerRoundRowMainPartsStyleAsGrid(rowNumber, buttonNumberPerRow);
    }

    createContainerRoundRowMainParts(rowNumber) {
        createElementDiv(
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPrefixId
            + valueToString(rowNumber),
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber)
        );
    }

    setContainerRoundRowMainPartsStyleAsGrid(rowNumber, buttonNumberPerRow) {

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + buttonNumberPerRow + ", 1fr 38fr 1fr)";

        setElementStyletAsGrid(
            // childId,
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber),
            1,
            1,
            2,
            2,
            gridTemplateRows,
            gridTemplateColumns
        );
    }
}