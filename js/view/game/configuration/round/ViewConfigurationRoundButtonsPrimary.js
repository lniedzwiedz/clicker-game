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

        // create variables = 5
        let buttonNumberPerRow = 5;

        // create variables = 2
        for (let rowNumber = 0; rowNumber < 2; rowNumber++) {

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

        let parentId =
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundMainPartsId;

        let childId =
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPrefixId
            + valueToString(rowNumber);

        createElementDiv(
            parentId,
            childId
        );

        let gridRowStartNumber = 1 + rowNumber;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2 + rowNumber;

        let gridTemplateRows = "1fr";
        let gridTemplateColumns = "1fr";

        setElementStyletAsGrid(
            childId,
            gridRowStartNumber,
            gridColumnStartNumber,
            gridRowEndNumber,
            gridColumnEndNumber,
            gridTemplateRows,
            gridTemplateColumns
        );
    }

    createContainerConfigurationRoundRowMainParts(rowNumber, buttonNumberPerRow) {

        let parentId =
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPrefixId
            + valueToString(rowNumber);

        let childId =
            variablesConfigurationRoundButtonsPrimary.containerConfigurationRoundRowMainPartsPrefixId
            + valueToString(rowNumber);

        createElementDiv(
            parentId,
            childId
        );

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + buttonNumberPerRow + ", 1fr 38fr 1fr)";

        setElementStyletAsGrid(
            childId,
            1,
            1,
            2,
            2,
            gridTemplateRows,
            gridTemplateColumns
        );
    }
}