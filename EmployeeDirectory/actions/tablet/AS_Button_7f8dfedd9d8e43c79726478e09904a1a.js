function AS_Button_7f8dfedd9d8e43c79726478e09904a1a(eventobject) {
    profilepage.d1flex.isVisible = "false";
    profilepage.d2flex.isVisible = "false";
    profilepage.d3flex.isVisible = "false";
    profilepage.d4flex.isVisible = "false";
    profilepage.d5flex.isVisible = "false";
    profilepage.d6flex.isVisible = "false";
    profilepage.d7flex.isVisible = "false";
    profilepage.d8flex.isVisible = "false";
    profilepage.d9flex.isVisible = "false";
    profilepage.d10flex.isVisible = "false";
    profilepage.d11flex.isVisible = "false";
    profilepage.d12flex.isVisible = "false";
    profilepage.heirarchysegment.isVisible = "true";
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "tlabvis";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "tlabvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "tlabinvis";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "tlabinvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "colorvis";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "colorvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            undefined["undefined"]["skin"] = "colorinvis";
        }, null);
    } else {
        (function() {
            undefined["undefined"]["skin"] = "colorinvis";
        })();
    }
}