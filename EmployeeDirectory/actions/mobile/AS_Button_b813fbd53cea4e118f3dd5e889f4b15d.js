function AS_Button_b813fbd53cea4e118f3dd5e889f4b15d(eventobject) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["hierarchyoption"]["skin"] = "tlabvis";
        }, null);
    } else {
        (function() {
            detailspage["hierarchyoption"]["skin"] = "tlabvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["detailsoption"]["skin"] = "tlabinvis";
        }, null);
    } else {
        (function() {
            detailspage["detailsoption"]["skin"] = "tlabinvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["undefined"]["skin"] = "colorvis";
        }, null);
    } else {
        (function() {
            detailspage["undefined"]["skin"] = "colorvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["detailscolor"]["skin"] = "colorinvis";
        }, null);
    } else {
        (function() {
            detailspage["detailscolor"]["skin"] = "colorinvis";
        })();
    }
    detailspage.d1flex.isVisible = "false";
    detailspage.d2flex.isVisible = "false";
    detailspage.d3flex.isVisible = "false";
    detailspage.d4flex.isVisible = "false";
    detailspage.d5flex.isVisible = "false";
    detailspage.d6flex.isVisible = "false";
    detailspage.d7flex.isVisible = "false";
    detailspage.d8flex.isVisible = "false";
    detailspage.d9flex.isVisible = "false";
    detailspage.d10flex.isVisible = "false";
    detailspage.d11flex.isVisible = "false";
    detailspage.d12flex.isVisible = "false";
    detailspage.heirarchysegment.isVisible = "true";
}