function AS_TextField_c0e959cc2b0e4498b364f1e72fb17afa(eventobject, changedtext) {
    if (directorypage.searchbox.text === "") {
        directorypage.searchinvis.isVisible = true;
    } else {
        directorypage.searchinvis.isVisible = false;
    }
    searchCondition(directorypage.searchbox.text);
    directorypage.buttonsflex.isVisible = false;
}