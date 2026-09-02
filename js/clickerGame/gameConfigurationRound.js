// configuration - round number
function createContainerManuConfiguration() {
    createMainContainerManuConfiguration();
    createContainerMenuConfigurationText();
    // createContainerMenuConfigurationGameKind();
    createContainerMenuConfigurationClickNumber();
}

function createMainContainerManuConfiguration() {
    createElementDivWithTheSamIdAndClassName(containerMenuMainParts, containerMenuGameConfiguration);
    createElementDiv(containerMenuGameConfiguration, containerMenuGameConfigurationParts);
}

function createContainerMenuConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText) {
    createElementDivWithChildAndGrandChild(containerMenuGameConfigurationParts, containerMenuGameConfigurationText, menuGameConfigurationText);
}


function createContainerMenuConfigurationText() {
    createContainerMenuConfiguration(containerMenuGameConfigurationText, menuGameConfigurationText);
    setElementClassNamedAndText(menuGameConfigurationText, menuGameConfigurationDisplay, menuGameConfigurationTextDisplay);
}

function createContainerMenuConfigurationGameKind() {
    createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationGameKind);
}

function createContainerMenuConfigurationClickNumber() {
    createContainerMenuConfiguration(containerMenuGameConfigurationClickNumber, containerMenuGameConfigurationClickNumberParts);
    createContainersMenuConfigurationClickNumberButton();
}

function createContainersMenuConfigurationClickNumberButton() {
    createContainersMenuConfigurationClickNumberRows();
    createContainersMenuConfigurationClickNumberAllRows();
}

function createContainersMenuConfigurationClickNumberRows() {
    createElementDivWithChildAndGrandChild(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow0, containerMenuGameConfigurationClickNumberPartsRow0);
    createElementDivWithChildAndGrandChild(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow1, containerMenuGameConfigurationClickNumberPartsRow1);
}

function createContainersMenuConfigurationClickNumberAllRows() {
    for (let rowNumber = 0; rowNumber < 2; rowNumber++) {
        createContainersMenuConfigurationClickNumberPerRow(rowNumber);
    }
}

function createContainersMenuConfigurationClickNumberPerRow(rowNumber) {

    let parentElement = document.getElementById(containerMenuGameConfigurationClickNumberPartsRow + rowNumber);
    let elementId = containerMenuGameConfigurationClickNumberPartsRow + rowNumber;

    let clicksNumberPerRow = 5;

    let gridRowStartNumber = 1;
    let gridColumnStartNumber = 1;
    let gridRowEndNumber = 2;
    let gridColumnEndNumber = 2;

    let gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
    let gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";

    setElementStyletAsGrid(elementId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns);

    let rowChildStart = 2;
    let columnChildStart = 2;
    let rowChildEnd = 3;
    let columnChildEnd = 3;

    for (let i = 0; i < clicksNumberPerRow; i++) {

        let newDiv = document.createElement("div");
        parentElement.append(newDiv);
        newDiv.style.display = "grid";
        newDiv.style.gridRow = valueToString(rowChildStart);
        newDiv.style.gridColumn = valueToString(columnChildStart);
        newDiv.style.gridRowEnd = valueToString(rowChildEnd);
        newDiv.style.gridColumnEnd = valueToString(columnChildEnd);
        newDiv.style.gridTemplateRows = "1fr";
        newDiv.style.gridTemplateColumns = "1fr";

        let newButton = document.createElement("button");
        newDiv.append(newButton);
        newButton.innerHTML = menuGameConfigurationClickNumberTextDisplay + valueToString(clickNumberButton);
        newButton.setAttribute("id", menuGameConfigurationButtonClickNumber + valueToString(clickNumberButton));
        newButton.classList.add(commonGameFiledDisplay);
        newButton.classList.add(menuGameConfigurationText);
        newButton.classList.add(menuGameConfigurationButton);
        newButton.value = clickNumberButton;
        setFunctionOnclick(menuGameConfigurationButtonClickNumber + valueToString(clickNumberButton), functionNameOnclickSetConfigurationClickNumber);

        if (clickNumberButton === 5) {
            newButton.classList.add(menuGameConfigurationButtonCurrentNumber);
        }

        columnChildStart += 3;
        columnChildEnd += 3;
        clickNumberButton += 1;
    }
}