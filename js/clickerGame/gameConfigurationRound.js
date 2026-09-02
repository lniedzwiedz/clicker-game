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

function createContainerMenuConfigurationText(){
    createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationText);
    createElementDiv(containerMenuGameConfigurationText, menuGameConfigurationText);
    setElementClassName(menuGameConfigurationText, menuGameConfigurationDisplay);
    setElementTextById(menuGameConfigurationText, menuGameConfigurationTextDisplay);
}

function createContainerMenuConfigurationGameKind(){
    createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationGameKind);
}

function createContainerMenuConfigurationClickNumber(){
    createElementDiv(containerMenuGameConfigurationParts, containerMenuGameConfigurationClickNumber);
    createElementDiv(containerMenuGameConfigurationClickNumber, containerMenuGameConfigurationClickNumberParts);
    createContainersMenuConfigurationClickNumberButton();
}


function createContainersMenuConfigurationClickNumberButton(){
    createContainersMenuConfigurationClickNumberRows();
    createContainersMenuConfigurationClickNumberAllRows();
}

function createContainersMenuConfigurationClickNumberRows(){
    createElementDiv(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow0);
    createElementDiv(containerMenuGameConfigurationClickNumberRow0, containerMenuGameConfigurationClickNumberPartsRow0);
    createElementDiv(containerMenuGameConfigurationClickNumberParts, containerMenuGameConfigurationClickNumberRow1);
    createElementDiv(containerMenuGameConfigurationClickNumberRow1, containerMenuGameConfigurationClickNumberPartsRow1);
}

function  createContainersMenuConfigurationClickNumberAllRows(){
    for(let rowNumber =0; rowNumber<2; rowNumber++){
        createContainersMenuConfigurationClickNumberPerRow(rowNumber);
    }
}

function createContainersMenuConfigurationClickNumberPerRow(rowNumber) {
    // console.log("rowNumber: " +rowNumber);
    let parentElement = document.getElementById(containerMenuGameConfigurationClickNumberPartsRow+rowNumber);

    // console.log("containerMenuGameConfigurationClickNumberRow: " + containerMenuGameConfigurationClickNumberRow+rowNumber);
    let clicksNumberPerRow = 5;

    let rowStart = 1;
    let columnStart = 1;
    let rowEnd = 2;
    let columnEnd = 2;

    parentElement.style.display = "grid";
    parentElement.style.backgroundColor = "black";
    parentElement.style.gridRow = valueToString(rowStart);
    parentElement.style.gridColumn = valueToString(columnStart);
    parentElement.style.gridRowEnd = valueToString(rowEnd);
    parentElement.style.gridColumnEnd = valueToString(columnEnd);
    // parentElement.style.gridTemplateRows = " repeat(1, 2fr 6fr 2fr) ";
    parentElement.style.gridTemplateRows = " repeat(1, 1fr 7fr 1fr) ";
    // parentElement.style.gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 100fr 1fr)";
    parentElement.style.gridTemplateColumns = " repeat(" + clicksNumberPerRow + ", 1fr 38fr 1fr)";

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

        if(clickNumberButton === 5){
            newButton.classList.add(menuGameConfigurationButtonCurrentNumber);
        }

        columnChildStart += 3;
        columnChildEnd += 3;
        clickNumberButton += 1;
    }
}