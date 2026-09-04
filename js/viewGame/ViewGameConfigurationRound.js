import {
    createElementButton,
    createElementDiv,
    createElementDivAnaDivChild,
    createElementDivWithTheSameIdAndClassName,
    getElementById,
    setElementAttributeValueById,
    setElementClassNameById,
    setElementClassNamedAndText,
    setElementClassNames,
    setElementStyletAsGrid,
    valueToString
} from "../common/function/commonFunctions.js";
import * as variablesMenu from "../common/variable/menu/variablesMenu.js";
import * as variableGameConfigurationRound from "../common/variable/clickerGame/variableGameConfigurationRound.js";
import * as variablesGameStatisticsTimeGeneral
    from "../common/variable/clickerGame/variablesGameStatisticsTimeGeneral.js";

export class ViewGameConfigurationRound {

    constructor(gameRoundAction) {
        this.gameRoundAction = gameRoundAction;
    }

    createViewGameConfigurationRound() {
        this.createMainContainerConfiguration();
        this.createContainerMenuConfigurationText();
        // createContainerMenuConfigurationGameKind();
        this.createContainerConfigurationClickNumber();
    }

    createMainContainerConfiguration() {
        createElementDivWithTheSameIdAndClassName(variablesMenu.containerMenuMainParts, variableGameConfigurationRound.containerMenuGameConfiguration);
        createElementDiv(variableGameConfigurationRound.containerMenuGameConfiguration, variableGameConfigurationRound.containerMenuGameConfigurationParts);
    }

    createContainerConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText) {
        createElementDivAnaDivChild(variableGameConfigurationRound.containerMenuGameConfigurationParts, containerMenuGameConfigurationText, menuGameConfigurationText);
    }

    createContainerMenuConfigurationText() {
        this.createContainerConfiguration(variableGameConfigurationRound.containerMenuGameConfigurationText, variableGameConfigurationRound.menuGameConfigurationText);
        setElementClassNamedAndText(variableGameConfigurationRound.menuGameConfigurationText, variableGameConfigurationRound.menuGameConfigurationDisplay, variableGameConfigurationRound.menuGameConfigurationTextDisplay);
    }

    createContainerMenuConfigurationGameKind() {
        createElementDiv(variableGameConfigurationRound.containerMenuGameConfigurationParts, variableGameConfigurationRound.containerMenuGameConfigurationGameKind);
    }

    createContainerConfigurationClickNumber() {
        this.createContainerConfiguration(variableGameConfigurationRound.containerMenuGameConfigurationClickNumber, variableGameConfigurationRound.containerMenuGameConfigurationClickNumberParts);
        this.createContainersConfigurationClickNumberButton();
    }

    createContainersConfigurationClickNumberButton() {
        this.createContainersConfigurationClickNumberRows();
        this.createContainersConfigurationClickNumberAllRows();
    }

    createContainersConfigurationClickNumberRows() {
        createElementDivAnaDivChild(variableGameConfigurationRound.containerMenuGameConfigurationClickNumberParts, variableGameConfigurationRound.containerMenuGameConfigurationClickNumberRow0, variableGameConfigurationRound.containerMenuGameConfigurationClickNumberPartsRow0);
        createElementDivAnaDivChild(variableGameConfigurationRound.containerMenuGameConfigurationClickNumberParts, variableGameConfigurationRound.containerMenuGameConfigurationClickNumberRow1, variableGameConfigurationRound.containerMenuGameConfigurationClickNumberPartsRow1);
    }

    createContainersConfigurationClickNumberAllRows() {

        for (let rowNumber = 0; rowNumber < 2; rowNumber++) {
            this.createContainersConfigurationClickNumberPerRow(rowNumber);
        }
    }

    createContainersConfigurationClickNumberPerRow(rowNumber) {

        let parentId = variableGameConfigurationRound.containerMenuGameConfigurationClickNumberPartsRow + rowNumber;
        let clicksNumberPerRow = 5;

        let gridRowStartNumber = 1;
        let gridColumnStartNumber = 1;
        let gridRowEndNumber = 2;
        let gridColumnEndNumber = 2;

        let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
        let gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";
        setElementStyletAsGrid(parentId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);

        let gridRowStartNumberChild = 2;
        let gridColumnStartNumberChild = 2;
        let gridRowEndNumberChild = 3;
        let gridColumnEndNumberChild = 3;

        let clickNumberButton = 1;

        if (rowNumber === 1) {
            clickNumberButton = clicksNumberPerRow + 1;
        }

        for (let i = 0; i < clicksNumberPerRow; i++) {

            let childId = variableGameConfigurationRound.containerGameConfigurationRoundNumberPrefix + rowNumber + "-button-" + i;
            createElementDiv(parentId, childId);

            let gridTemplateRowsChild = "1fr";
            let gridTemplateColumnsChild = "1fr";
            setElementStyletAsGrid(childId, gridRowStartNumberChild, gridColumnStartNumberChild, gridRowEndNumberChild, gridColumnEndNumberChild, gridTemplateRowsChild, gridTemplateColumnsChild);

            let buttonId = variableGameConfigurationRound.menuGameConfigurationButtonClickNumberPrefix + valueToString(clickNumberButton);
            let elementText = variableGameConfigurationRound.menuGameConfigurationClickNumberTextDisplay + valueToString(clickNumberButton);
            this.createGameConfigurationRoundButton(childId, buttonId, clickNumberButton, elementText);

            if (clickNumberButton === 5)
                setElementClassNameById(buttonId, variableGameConfigurationRound.menuGameConfigurationButtonCurrentNumber);

            gridColumnStartNumberChild += 3;
            gridColumnEndNumberChild += 3;
            clickNumberButton += 1;
        }
    }

    createGameConfigurationRoundButton(parentId, buttonId, attributeValue, elementText) {
        createElementButton(parentId, buttonId);
        setElementAttributeValueById(buttonId, valueToString(attributeValue));
        setElementClassNames(buttonId, variablesGameStatisticsTimeGeneral.commonGameFiledDisplay, variableGameConfigurationRound.menuGameConfigurationButton);
        setElementClassNamedAndText(buttonId, variableGameConfigurationRound.menuGameConfigurationText, elementText);
        this.setConfigurationClickNumber(buttonId, this.setConfigurationClickButtonBase);
    }

    setConfigurationClickNumber(buttonId, functionToCall) {
        const button = getElementById(buttonId);
        button.addEventListener("click", (event) => {
            functionToCall.call(this, event);
        });
    }

    setConfigurationClickButtonBase(event) {
      this.gameRoundAction.setConfigurationClickNumberButtonChanges(event);
    }
}