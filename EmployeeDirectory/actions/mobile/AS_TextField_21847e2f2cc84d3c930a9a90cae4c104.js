function AS_TextField_21847e2f2cc84d3c930a9a90cae4c104(eventobject, changedtext) {
    if (directorypage.searchbox.text === "") {
        directorypage.searchinvis.isVisible = true;
    }
    searchCondition(directorypage.searchbox.text);
    directorypage.buttonsflex.isVisible = false;
}