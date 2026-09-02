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

function setElementClassNameBy(elementId, className) {
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

function createElementDivWithDifferentIdAndClassName(parentId, childId, className) {
    createElementDiv(parentId, childId);
    setElementClassNameBy(childId, className);
}

function createElementDivWithTheSamIdAndClassName(parentId, elementIdAndClassName) {
    createElementDiv(parentId, elementIdAndClassName);
    setElementClassNameBy(elementIdAndClassName, elementIdAndClassName);
}

function createElementDivWithChildAndGrandChildId(parentId, childId, grandChildId) {
    createElementDiv(parentId, childId);
    createElementDiv(childId, grandChildId);
}

function setElementClassNameSameAsIdAndText(elementId, text) {
    setElementClassNameBy(elementId, elementId);
    setElementTextById(elementId, text);
}

function setElementClassNamedAndText(elementId, className, text) {
    setElementClassNameBy(elementId, className);
    setElementTextById(elementId, text);
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
    getElementById(elementId).style.gridTemplateRows = gridTemplateRowsPattern;
}

function setElementStyleGridTemplateColumns(elementId, gridTemplateColumnsPattern) {
    getElementById(elementId).style.gridTemplateColumns = gridTemplateColumnsPattern;
}

function createContainerMainElements(containerMainSectionName, sectionName, containerSectionName, containerSectionMainName) {
    createElementDiv(containerMainSectionName, containerSectionName)
    createElementDivWithTheSamIdAndClassName(containerSectionName, containerSectionMainName);
}