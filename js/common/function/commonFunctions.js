function valueToString(value) {
    return value.toString();
}

function getElementById(elementId) {
    return document.getElementById(elementId);
}

function removeElementById(elementId) {
    let element = getElementById(elementId);
    if (element !== null) {
        element.remove();
    }
}

function setElementClassNameById(elementId, className) {
    getElementById(elementId).classList.add(className);
}

function getElementsByClassName(className) {
    return document.getElementsByClassName(className);
}

function removeElementClassNameById(elementId, className) {
    getElementById(elementId).classList.remove(className);
}

function createElement(parentId, childId, elementKind) {
    let newElement = document.createElement(elementKind);
    getElementById(parentId).append(newElement);
    newElement.setAttribute("id", childId);
}

function createElementButton(parentId, childId) {
    createElement(parentId, childId, "button");
}

function createElementP(parentId, childId) {
    createElement(parentId, childId, "p");
}

function createElementDiv(parentId, childId) {
    createElement(parentId, childId, "div");
}

function createElementDivWithIdAndSetClassName(parentId, childId, className) {
    createElementDiv(parentId, childId);
    setElementClassNameById(childId, className);
}

function createElementDivWithTheSameIdAndClassName(parentId, elementIdAndClassName) {
    createElementDiv(parentId, elementIdAndClassName);
    setElementClassNameById(elementIdAndClassName, elementIdAndClassName);
}

function createElementDivAnaDivChild(parentId, childId, grandChildId) {
    createElementDiv(parentId, childId);
    createElementDiv(childId, grandChildId);
}

function createElementButtonAndSetFunctionOnclick(parentId, childId, functionOnclickName) {
    createElementButton(parentId, childId);
    setFunctionOnclick(childId, functionOnclickName);
}

function setElementClassNameSameAsIdAndSetText(elementId, text) {
    setElementClassNameById(elementId, elementId);
    setElementTextById(elementId, text);
}

function setElementClassNamedAndText(elementId, className, text) {
    setElementClassNameById(elementId, className);
    setElementTextById(elementId, text);
}

function setElementClassNames(elementId, classNameOne, classNameTwo){
    setElementClassNameById(elementId, classNameTwo);
    setElementClassNameById(elementId, classNameTwo);
}

function isElementsExistById(elementId) {
    let element = getElementById(elementId);
    let result = false;
    if (element !== null)
        result = true;
    return result;
}

function setElementTextByClassName(className, text) {
    getElementsByClassName(className)[0].innerHTML = text;
}

function setElementTextById(elementId, text) {
    getElementById(elementId).innerHTML = text;
}

function setElementAttributeValueById(elementId, value) {
    getElementById(elementId).value = valueToString(value);
}

function getElementAttributeValueById(elementId) {
    return getElementById(elementId).getAttribute("value");
}

function setFunctionOnclick(elementId, functionNameOnclick) {
    getElementById(elementId).setAttribute("onclick", functionNameOnclick + "(this.id)");
}

function removeFunctionOnclick(elementId) {
    getElementById(elementId).removeAttribute("onclick");
}

function setElementStyletAsGrid(elementId, gridRowStartNumber, gridColumnStartNumber, gridRowEndNumber, gridColumnEndNumber, gridTemplateRows, gridTemplateColumns) {
    let element = getElementById(elementId);
    element.style.display = "grid";

    element.style.gridRow = valueToString(gridRowStartNumber);
    element.style.gridColumn = valueToString(gridColumnStartNumber);

    element.style.gridRowEnd = valueToString(gridRowEndNumber);
    element.style.gridColumnEnd = valueToString(gridColumnEndNumber);

    setElementStyleGridTemplateRows(elementId, gridTemplateRows);
    setElementStyleGridTemplateColumns(elementId, gridTemplateColumns);
}

function setElementStyleGridTemplateRows(elementId, gridTemplateRowsPattern) {
    getElementById(elementId).style.gridTemplateRows = valueToString(gridTemplateRowsPattern);
}

function setElementStyleGridTemplateColumns(elementId, gridTemplateColumnsPattern) {
    getElementById(elementId).style.gridTemplateColumns = valueToString(gridTemplateColumnsPattern);
}

function createContainerMainElements(containerMainSectionName, sectionName, containerSectionName, containerSectionMainName) {
    createElementDiv(containerMainSectionName, containerSectionName)
    createElementDivWithTheSameIdAndClassName(containerSectionName, containerSectionMainName);
}