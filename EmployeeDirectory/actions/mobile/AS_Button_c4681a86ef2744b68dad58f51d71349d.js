function AS_Button_c4681a86ef2744b68dad58f51d71349d(eventobject) {
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["detailsoption"]["skin"] = "tlabvis";
        }, null);
    } else {
        (function() {
            detailspage["detailsoption"]["skin"] = "tlabvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["hierarchyoption"]["skin"] = "tlabinvis";
        }, null);
    } else {
        (function() {
            detailspage["hierarchyoption"]["skin"] = "tlabinvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["detailscolor"]["skin"] = "colorvis";
        }, null);
    } else {
        (function() {
            detailspage["detailscolor"]["skin"] = "colorvis";
        })();
    }
    if (kony.theme.getCurrentTheme() != "default") {
        kony.theme.setCurrentTheme("default", function() {
            detailspage["undefined"]["skin"] = "colorinvis";
        }, null);
    } else {
        (function() {
            detailspage["undefined"]["skin"] = "colorinvis";
        })();
    }
    detailspage.heirarchysegment.isVisible = "false";
    detailspage.d1flex.isVisible = "true";
    detailspage.d2flex.isVisible = "true";
    detailspage.d3flex.isVisible = "true";
    detailspage.d4flex.isVisible = "true";
    detailspage.d5flex.isVisible = "true";
    detailspage.d6flex.isVisible = "true";
    detailspage.d7flex.isVisible = "true";
    detailspage.d8flex.isVisible = "true";
    detailspage.d9flex.isVisible = "true";
    detailspage.d10flex.isVisible = "true";
    detailspage.d11flex.isVisible = "true";
    detailspage.d12flex.isVisible = "true";
}