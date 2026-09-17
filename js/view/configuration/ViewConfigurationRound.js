import {
    createElementDiv,
    createElementDivAnaDivChild,
    setElementStyletAsGrid,
    valueToString
} from "../../common/function/commonFunctions.js";

import * as variablesConfigurationRound from "../../common/variable/configuration/variablesConfigurationRound.js";


export class ViewConfigurationRound {

    createContainerConfigurationRound() {
        this.createContainerConfigurationRoundMain();
        this.createContainerConfigurationRoundMainParts();
    }

    createContainerConfigurationRoundMain() {

        createElementDivAnaDivChild(
            variablesConfigurationRound.containerConfigurationMainParts,
            variablesConfigurationRound.containerConfigurationRoundMain,
            variablesConfigurationRound.containerConfigurationRoundMainParts
        );
    }

    createContainerConfigurationRoundMainParts() {

        let buttonNumberPerRow = 5;

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
            variablesConfigurationRound.containerConfigurationRoundMainParts;

        let childId =
            variablesConfigurationRound.containerConfigurationRoundRowMainPrefix
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

        let childId =
            variablesConfigurationRound.containerConfigurationRoundRowMainPrefix
            + valueToString(rowNumber);

        let grandchildId =
            variablesConfigurationRound.containerConfigurationRoundRowMainPartsPrefix
            + valueToString(rowNumber);

        createElementDiv(
            childId,
            grandchildId
        );

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + buttonNumberPerRow + ", 1fr 38fr 1fr)";

        setElementStyletAsGrid(
            grandchildId,
            1,
            1,
            2,
            2,
            gridTemplateRows,
            gridTemplateColumns
        );
    }
}