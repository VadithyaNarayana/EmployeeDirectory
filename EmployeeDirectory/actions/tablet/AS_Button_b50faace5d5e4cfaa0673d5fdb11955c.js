function AS_Button_b50faace5d5e4cfaa0673d5fdb11955c(eventobject) {
    directorypage.sortnameflex.isVisible = true;
    directorypage.filtergroupflex.isVisible = false;
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "sortflexskin";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "sortflexskin";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "filterflexskin";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "filterflexskin";
        })();
    }
}