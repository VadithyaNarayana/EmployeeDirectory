function AS_Button_7298104007944622b2ce3aaa044d74b0(eventobject) {
    directorypage.filtergroupflex.isVisible = true;
    directorypage.sortnameflex.isVisible = false;
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "filterflexskin";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "filterflexskin";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "sortflexskin";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "sortflexskin";
        })();
    }
}