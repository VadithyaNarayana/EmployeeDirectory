var previous = null;
var outerScrollY = 0.1;
var incrementValue = 0;
var flagAnimationIndicator = 0;
var fromScroll = 0;
var indicateReachEnd = 0;
var indicateSwipeUp = 0;
var boolflag =0;
var indicateTouchReleaseComplete = 0;
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description - Display the details of selected Employee
*/ 
function onClickDetailsDetailPage() {
    fromScroll = 0;
    moveLabel("0%", detailspage.categoryflex.detailscolor, 0.5);
    moveLabel("100%",detailspage.flxScrollSegment,0.5);
    moveLabel("0%",detailspage.totalscroll,0.5);
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description - Display the Hierarchy of selected Employee
*/
function onClickHierarchyDetailsPage() {
    fromScroll = 1;
    moveLabel("50%", detailspage.categoryflex.detailscolor, 0.5);
    moveLabel("0%",detailspage.flxScrollSegment,0.5);
    moveLabel("-100%",detailspage.totalscroll,0.5);
}
/**
* @member of  empdirectorysolution.js
* @param leftvalue-is the value for which we need to move object.
* @param lblName-is the value for which object  we need to perform animation 
* @param time-is the value for how much time we need to perform animation
* @return {void} - none.
* @description - Display the Move Animation by changing the left value
*/ 
function moveLabel(leftValue, lblName, time) {
    objName = lblName;
    objName.animate(
        kony.ui.createAnimation({
            "100": {
                "left": leftValue,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE_OUT
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time
        }, {
            "animationEnd": function() {}
        }
    );
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description -Set the skin for Filters
*/
function onClickFilter() {
    directorypage.sortandfilter.sortflex.skin = "filterflexskin";
    directorypage.sortandfilter.filterflex.skin = "sortflexskin";
    moveLabel("30%", directorypage.filtergroupflex, 0.5);
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description -Set the Skin for Sort
*/
function onClickSort() {
    directorypage.sortandfilter.sortflex.skin = "sortflexskin";
    directorypage.sortandfilter.filterflex.skin = "filterflexskin";
    moveLabel("100%", directorypage.filtergroupflex, 0.75);
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description - Display the alert when Username/Password is wrong
*/
function onClickOKAlert() {
    loginpage.flxAlert.setVisibility(false);
}
/**
* @member of  empdirectorysolution.js
* @param source-Button scrolled inside Button flex(Dictonary),
* @param X-X coordinate position of Scrolled button in Button flex,
* @param Y-y coordinate position of Scrolled button in Button flex,
* @return {void} - none.
* @description -Directly Dock the segment to Selected button in Dictionary.
*/
function changeTheSelectionOfSection(source, x, y) {
  //#ifdef iphone
    if (y >= coordinates[0][0] && y <= coordinates[25][0]) {
        directorypage.lblDisplaySelectedIndex.top = lblTop + y + "dp";
    } else if (y >= coordinates[25][0]) {
        directorypage.lblDisplaySelectedIndex.top = lblBottom + "dp";
    } else if (y <= coordinates[0][0]) {
        directorypage.lblDisplaySelectedIndex.top = lblTop + "dp";
    }
    onScrollOfFlex(source, x, y);
  //#endif
}
/**
* @member of  empdirectorysolution.js
* @param source-Button which is clicked or touched inside Button flex(Dictonary),
* @param X-X coordinate position of clicked button in Button flex,
* @param Y-y coordinate position of clicked button in Button flex,
* @return {void} - none.
* @description -Directly Dock the segment to Selected button in Dictionary.
*/
function changeTheSelectionOfSectionOnTouchStart(source, x, y) {
  //#ifdef iphone
    directorypage.lblDisplaySelectedIndex.top = lblTop + y + "dp";
    directorypage.lblDisplaySelectedIndex.setVisibility(true);
    onScrollOfFlex(source, x, y);
  //#endif
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description -Stores the Coordinate positions of Button Flex(Dictionary) in Array
*/
function getCoordinatesOfFlexes() {
    //#ifdef iphone
    coordinates = [];
    coordinates[0] = [parseInt(JSON.stringify(directorypage.buttonsflex.A.frame.y)), "A", directorypage.buttonsflex.A];
    coordinates[1] = [parseInt(JSON.stringify(directorypage.buttonsflex.B.frame.y)), "B", directorypage.buttonsflex.B];
    coordinates[2] = [parseInt(JSON.stringify(directorypage.buttonsflex.C.frame.y)), "C", directorypage.buttonsflex.C];
    coordinates[3] = [parseInt(JSON.stringify(directorypage.buttonsflex.D.frame.y)), "D", directorypage.buttonsflex.D];
    coordinates[4] = [parseInt(JSON.stringify(directorypage.buttonsflex.E.frame.y)), "E", directorypage.buttonsflex.E];
    coordinates[5] = [parseInt(JSON.stringify(directorypage.buttonsflex.F.frame.y)), "F", directorypage.buttonsflex.F];
    coordinates[6] = [parseInt(JSON.stringify(directorypage.buttonsflex.G.frame.y)), "G", directorypage.buttonsflex.G];
    coordinates[7] = [parseInt(JSON.stringify(directorypage.buttonsflex.H.frame.y)), "H", directorypage.buttonsflex.H];
    coordinates[8] = [parseInt(JSON.stringify(directorypage.buttonsflex.I.frame.y)), "I", directorypage.buttonsflex.I];
    coordinates[9] = [parseInt(JSON.stringify(directorypage.buttonsflex.J.frame.y)), "J", directorypage.buttonsflex.J];
    coordinates[10] = [parseInt(JSON.stringify(directorypage.buttonsflex.K.frame.y)), "K", directorypage.buttonsflex.K];
    coordinates[11] = [parseInt(JSON.stringify(directorypage.buttonsflex.L.frame.y)), "L", directorypage.buttonsflex.L];
    coordinates[12] = [parseInt(JSON.stringify(directorypage.buttonsflex.M.frame.y)), "M", directorypage.buttonsflex.M];
    coordinates[13] = [parseInt(JSON.stringify(directorypage.buttonsflex.N.frame.y)), "N", directorypage.buttonsflex.N];
    coordinates[14] = [parseInt(JSON.stringify(directorypage.buttonsflex.O.frame.y)), "O", directorypage.buttonsflex.O];
    coordinates[15] = [parseInt(JSON.stringify(directorypage.buttonsflex.P.frame.y)), "P", directorypage.buttonsflex.P];
    coordinates[16] = [parseInt(JSON.stringify(directorypage.buttonsflex.Q.frame.y)), "Q", directorypage.buttonsflex.Q];
    coordinates[17] = [parseInt(JSON.stringify(directorypage.buttonsflex.R.frame.y)), "R", directorypage.buttonsflex.R];
    coordinates[18] = [parseInt(JSON.stringify(directorypage.buttonsflex.S.frame.y)), "S", directorypage.buttonsflex.S];
    coordinates[19] = [parseInt(JSON.stringify(directorypage.buttonsflex.T.frame.y)), "T", directorypage.buttonsflex.T];
    coordinates[20] = [parseInt(JSON.stringify(directorypage.buttonsflex.U.frame.y)), "U", directorypage.buttonsflex.U];
    coordinates[21] = [parseInt(JSON.stringify(directorypage.buttonsflex.V.frame.y)), "V", directorypage.buttonsflex.V];
    coordinates[22] = [parseInt(JSON.stringify(directorypage.buttonsflex.W.frame.y)), "W", directorypage.buttonsflex.W];
    coordinates[23] = [parseInt(JSON.stringify(directorypage.buttonsflex.X.frame.y)), "X", directorypage.buttonsflex.X];
    coordinates[24] = [parseInt(JSON.stringify(directorypage.buttonsflex.Y.frame.y)), "Y", directorypage.buttonsflex.Y];
    coordinates[25] = [parseInt(JSON.stringify(directorypage.buttonsflex.Z.frame.y)), "Z", directorypage.buttonsflex.Z];
    lblBottom = parseInt(JSON.stringify(directorypage.flxBottom.frame.y));
    lblTop = parseInt(JSON.stringify(directorypage.flxTop.frame.y));
    directorypage.lblDisplaySelectedIndex.top = lblTop + "dp";
    //#endif
}

/**
* @member of  empdirectorysolution.js
* @param source-Button scrolled inside Button flex(Dictonary),
* @param X-X coordinate position of Scrolled button in Button flex,
* @param Y-y coordinate position of Scrolled button in Button flex,
* @return {void} - none.
* @description -Directly Dock the segment to Selected button in Dictionary.
*/
function onScrollOfFlex(source, x, y) {
   //#ifdef iphone
    var valueObtained = getCoordinateIndex(parseInt(y));
    if (valueObtained >= 0) {
        directorypage.lblDisplaySelectedIndex.text = coordinates[valueObtained][1];
    } else
        directorypage.lblDisplaySelectedIndex.text = coordinates[0][1];
    scrollSegmentToPosition(coordinates[valueObtained][1]);
    changeskin.call(coordinates[valueObtained][2]);
   //#endif
}
/**
* @member of  empdirectorysolution.js
* @param searchElement-is the value  which we selected in Dictionary in Directort Page
* @return  - Index of selected item in Dictionary
* @description - Returns the Index of Selected Item 
*/
function getCoordinateIndex(searchElement) {
    var minIndex = 0;
    var maxIndex = coordinates.length - 1;
    var currentIndex;
    var currentElement;
    var previousElement;
    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        if (currentIndex > 0)
            previousElement = coordinates[currentIndex - 1][0];
        else
            previousElement = coordinates[currentIndex][0];
        currentElement = coordinates[currentIndex][0];
        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        } else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        } else {
            flag = 0;
            return currentIndex;
        }
    }
    flag = 1;
    if (currentElement > searchElement && previousElement < searchElement)
        return currentIndex - 1;
    else
        return currentIndex;
}

/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description -Displays tha  animation while scrolling the Detail page and Hierarchical Page
*/ 
function scroll() {
  //#ifdef iphone
    if (boolflag === 0 && indicateTouchReleaseComplete === 0 ) {
        boolflag = 1;
      if(fromScroll === 0)
        value = detailspage.totalscroll.contentOffsetMeasured.y;
      else
        value = detailspage.flxScrollSegment.contentOffsetMeasured.y;
        outerScrollYAbs = Math.abs(value);
        if ((outerScrollYAbs >= 0) && (outerScrollYAbs <= 100)) {
            detailspage.categoryflex.top = ((42.25 - (outerScrollYAbs * 0.2)) + "%");
            detailspage.flxScrollSegment.top = ((52.25 - (outerScrollYAbs * 0.2)) + "%");
            detailspage.totalscroll.top = ((52.25 - (outerScrollYAbs * 0.2)) + "%");
            detailspage.photoflex1.top = (64.6 - (outerScrollYAbs * 0.7)) + "%";
            detailspage.photoflex1.height = (35.4 + (outerScrollYAbs * 0.3)) + "%";
            detailspage.photoflex1.opacity = (60 + (outerScrollYAbs * 0.01)) + "%";
            detailspage.photoflex1.empname.top = (50 - (outerScrollYAbs * 0.14)) + "%";
            detailspage.photoflex1.designationlabel.top = (71 - (outerScrollYAbs * 0.14)) + "%";
            detailspage.flxImgBdg.top = (45.6 - (outerScrollYAbs * 0.32)) + "%";
            detailspage.flxImgBdg.left = (37.5 - (outerScrollYAbs * 0.31)) + "%";
            detailspage.flxImgBdg.width = (25 - (outerScrollYAbs * 0.04)) + "%";
            detailspage.flxImgBdg.height = (35 - (outerScrollYAbs * 0.06)) + "%";
            if (detailspage.totalscroll.top <= "34") {
                if (detailspage.photoflex1.top <= 0) {
                    detailspage.photoflex1.top = "-0.5%";
                    detailspage.photoflex1.height = "63.3%";
                    detailspage.photoflex1.opacity = "60.93%";
                    detailspage.photoflex1.empname.top = "36.98%";
                    detailspage.photoflex1.designationlabel.top = "57.98%";
                    detailspage.flxImgBdg.top = "15.84%";
                    detailspage.flxImgBdg.left = "8.67%";
                    detailspage.flxImgBdg.width = "22.21%";
                    detailspage.flxImgBdg.height = "30.35%";
                }
                flagAnimationIndicator = 0;
                detailspage.photoflex1.skin = "afteranim";
                detailspage.designationlabel.skin = "detailheaddesignation";
                detailspage.empname.skin = "detailheadname";
            } else {
                detailspage.photoflex1.skin = "mbeforeanim";
                detailspage.designationlabel.skin = "bdlabel";
                detailspage.empname.skin = "belabel";
          
            }
        }
        boolflag = 0;
    }
  //#endif
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description -Set the values for variables which is used for animation
*/ 
function getSwipeDirection() {
  //#ifdef iphone  
   fromScroll = 0;
  detailspage.totalscroll.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
        fingers: 1
    }, gestureHandlerSwipe);

    function gestureHandlerSwipe(widgetID, gestureInfo) {
        if (gestureInfo.swipeDirection === 4) {
            flagAnimationIndicator = 1;
            indicateSwipeUp = 0;
        } else if (gestureInfo.swipeDirection === 3) {
            flagAnimationIndicator = 0;
            indicateSwipeUp = 1;
        }
    }
  detailspage.flxScrollSegment.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
        fingers: 1
    }, gestureHandlerSwipeSegment);

    function gestureHandlerSwipeSegment(widgetID, gestureInfo) {
        if (gestureInfo.swipeDirection === 4) {
            flagAnimationIndicator = 1;
            indicateSwipeUp = 0;
        } else if (gestureInfo.swipeDirection === 3) {
            flagAnimationIndicator = 0;
            indicateSwipeUp = 1;
        }
    }
//#endif
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description -Sets the animated flexes to correct position after end of the scroll
*/
function onTouchEnd() {
   //#ifdef iphone
        if (!flagAnimationIndicator && indicateSwipeUp === 1 && (detailspage.categoryflex.top <= "36"||detailspage.flxScrollSegment.top <="36")) {
            detailspage.photoflex.photoflex1.top = "0%";
            detailspage.photoflex.photoflex1.height = "64%";
            detailspage.photoflex.photoflex1.opacity = "60.93%";
            detailspage.photoflex.photoflex1.empname.top = "32%";
            detailspage.photoflex.photoflex1.designationlabel.top = "52%";
            detailspage.totalscroll.top = "31.2%";
            detailspage.categoryflex.top = "21.2%";
            detailspage.flxScrollSegment.top = "31.2%";
            detailspage.photoflex.photoflex1.skin = "afteranim";
            detailspage.photoflex.photoflex1.designationlabel.skin = "detailheaddesignation";
            detailspage.photoflex.photoflex1.empname.skin = "detailheadname";
            detailspage.flxImgBdg.top = "14%";
            detailspage.flxImgBdg.left = "7.5%";
            detailspage.flxImgBdg.width = "21.5%";
            detailspage.flxImgBdg.height = "30.35%";
        } else if (flagAnimationIndicator && indicateSwipeUp === 0&& (detailspage.categoryflex.top > "30"||detailspage.flxScrollSegment.top > "30")) {
            detailspage.photoflex.photoflex1.top = "64.6%";
            detailspage.photoflex.photoflex1.height = "35.4%";
            detailspage.photoflex.photoflex1.opacity = "60%";
            detailspage.photoflex.photoflex1.empname.top = "50%";
            detailspage.photoflex.photoflex1.designationlabel.top = "71%";
            detailspage.totalscroll.top = "52.25%";
            detailspage.flxScrollSegment.top = "52.25%";
            detailspage.categoryflex.top = "42.25%";
            detailspage.photoflex.photoflex1.skin = "mbeforeanim";
            detailspage.photoflex.photoflex1.designationlabel.skin = "bdlabel";
            detailspage.photoflex.photoflex1.empname.skin = "belabel";
            detailspage.flxImgBdg.top = "45.6%";
            detailspage.flxImgBdg.left = "37.5%";
            detailspage.flxImgBdg.width = "25%";
            detailspage.flxImgBdg.height = "35%";
        }
  indicateTouchReleaseComplete = 1;
  //#endif
}
/**
* @member of  empdirectorysolution.js
* @return {void} - none.
* @description - Moves the sortandfilter flex into the visible area
*/
function OnClickImageOfFilter()
{
  directorypage.sfimage.isVisible=false;
directorypage.lblNoResultsFound.isVisible = false;
//#ifdef iphone
directorypage.lblDisplaySelectedIndex.setVisibility(false);
//#endif
function MOVE_ACTION____b6117f4db5be4904842ac17b778152df_Callback() {}
directorypage["sortandfilter"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____b6117f4db5be4904842ac17b778152df_Callback
    });
}