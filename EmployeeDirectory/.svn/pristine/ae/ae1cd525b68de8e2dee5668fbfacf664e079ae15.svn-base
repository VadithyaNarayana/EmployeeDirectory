//-----------------------------------File Header -------------------------------------------------
/*** @Author A.Narendranath Koundinya
   * @desc Employee Directory 
   * @ © 2016 Kony Inc. */

  
var sampleEmployeeData = [
  				 {empimage:"image1.png",onlineimage:"available.png",empname:"John Smith",designation:"Chief Executive Officer",department:"",manager:"John Smith",lblChild:"a"},//This is the general user info i.e simple array of json objects
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Gary Johnson",designation:"Chief Financial Officer",department:"Finance",manager:" John Smith",lblChild:"a"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Williams Clark",designation:"Chief Technical Officer",department:"Executive",manager:"John Smith",lblChild:"a"},
                 {empimage:"image4.png",onlineimage:"available.png",empname:"Mick Jones",designation:"President, Products  & Marketing",department:"Corp.Communication",manager:"John Smith",lblChild:"a"},
                 {empimage:"image1.png",onlineimage:"available.png",empname:"Scott  Brown",designation:"Chief Financial Officer",department:"Finance",manager:"John Smith",lblChild:"a"},
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Larry Davis",designation:"SVP of Customer Success",department:"Sales",manager:"John Smith",lblChild:"a"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Philip Miller",designation:"Executive Vice President, Global Services",department:"Sales",manager:"John Smith",lblChild:"a"},
                 {empimage:"image4.png",onlineimage:"available.png",empname:"Jim Moore",designation:"Chief Human Resources Officer",department:"HR",manager:"John Smith",lblChild:"a"},
                 {empimage:"image1.png",onlineimage:"available.png",empname:"Frank Harris",designation:"VP, Corporate Development and Operations",department:"Corp.Communication",manager:"John Smith",lblChild:"a"},
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Robinson Cano",designation:"Executive Assistant",department:"",manager:"John Smith",lblChild:"a"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Nelson Shin",designation:"SVP, Products",department:"Corp.Communication",manager:"John Smith",lblChild:"a"},
                 {empimage:"image4.png",onlineimage:"available.png",empname:"Keith Carter",designation:"VP, Product Management",department:"Corp.Communication",manager:"Scott  Brown",lblChild:"a"},
                 {empimage:"image1.png",onlineimage:"available.png",empname:"Lan Wright",designation:"Sr.Director UX/UI Design",department:"Corp.Communication",manager:"Scott  Brown",lblChild:"a"},
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Rodeny King",designation:"VP, Enterprise Engineering",department:"Executive",manager:"Scott  Brown",lblChild:"a"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Douglas Hill",designation:"Director, Cloud Architecture",department:"Sales",manager:"Scott  Brown",lblChild:"a"},
                 {empimage:"image4.png",onlineimage:"available.png",empname:"Anne Green",designation:"VP, Product Management",department:"Advisory",manager:"Scott  Brown",lblChild:"a"},
                 {empimage:"image1.png",onlineimage:"available.png",empname:"Carlos Perez",designation:"VP, Product Management",department:"Advisory",manager:"Scott  Brown",lblChild:"a"},
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Dan Turner",designation:"VP, Product Management",department:"Sales",manager:"Scott  Brown",lblChild:"a"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Alan Collins",designation:"VP, Product Management",department:"Advisory",manager:"Scott  Brown",lblChild:"a"}
];
var flag = -1;
var masterData = [];
var prev;
var count = 0;
var index;
var index1;
var department;
var temp = [];
var flag1 = -1;
var departmentArray = [];
var filteredData = [];
var lflag = -1;
var empty = -1;
var mastercopy;
var filtersArray = [];

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - setting sample employee data to segment
*/
function initEmployeeListWithStaticData() {
    directorypage.datasegment.removeAll();
  	filtersArray = [0,0,0,0,0,0];
    if (count === 0) {
        alphaarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var sortarray1 = [];
        var sortarray2 = [];
        var i, j, min, k = 0;
        for (i = 0; i <= alphaarray.length - 1; i++) //This for loop is for converting above user data into our sections format dynamically
        {
            for (j = 0; j <= sampleEmployeeData.length - 1; j++) {
                if (alphaarray[i] === sampleEmployeeData[j].empname[0] || alphaarray[i].toLowerCase() === sampleEmployeeData[j].empname[0]) {
                    sortarray2.push(sampleEmployeeData[j]);
                }
            }
            if (sortarray2.length !== 0) {
                min = {
                    stoplabel1: "   " + alphaarray[i]
                };
                sortarray1.push(min);
                masterData.push([sortarray1[0], sortarray2]);
                sortarray1 = [];
                sortarray2 = [];
            }
        }
        if (masterData.length !== 0) {
            directorypage.datasegment.setData(masterData);
            lflag = 0;
        }
      	else {
            alert("No employee records found");
        }
    }
  	else {
        directorypage.datasegment.selectedIndex = [index, index1]; //This for retaining the selected row in segment.
    }
    count = count + 1;
    if (count == 1) {
        prev = directorypage.A;
        directorypage.A.skin = "blackbuttonskin";
    }
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - changing skin for selected index of dictionary
*/
function changeskin() //This is for highlighting the pressed letter
{
    if (prev != this) {
        prev.skin = "sortbuttonskin";
        this.skin = "blackbuttonskin";
        prev = this;
    }
}

/**
* @member of  employeeDirectory.js
* @param - alphabet clicked in dictionary
* @return {void} - none.
* @description - scrolling segment to the header of selected alphabet
*/
function scrollSegmentToPosition(alphabetClicked) //This is for scrolling segment to required position
{
    var space = "   ";
    var temp = alphabetClicked.toLowerCase();
    var i;
    for (i = 0; i < masterData.length; i++) {
        if (masterData[i][0].stoplabel1[3] + "" === alphabetClicked || masterData[i][0].stoplabel1[3] + "" === temp) {
            directorypage.datasegment.selectedRowIndex = [i, 0];
            break;
        }
    }
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - setting data to segment when filters are cancelled
*/
function myDecision() {
    alphaarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var sortarray1 = [];
    var sortarray2 = [];
    var i, j, min;
    for (i = 0; i <= alphaarray.length - 1; i++) //This for loop is for converting above user data into our sections format dynamically
    {
        for (j = 0; j <= sampleEmployeeData.length - 1; j++) {
            if (alphaarray[i] === sampleEmployeeData[j].empname[0] || alphaarray[i].toLowerCase() === sampleEmployeeData[j].empname[0]) {
                sortarray2.push(sampleEmployeeData[j]);
            }
        }
        if (sortarray2.length !== 0) {
            min = {
                stoplabel1: "   " + alphaarray[i]
            };
            sortarray1.push(min);
            masterData.push([sortarray1[0], sortarray2]);
            sortarray1 = [];
            sortarray2 = [];
        }
    }
}

/**
* @member of  employeeDirectory.js
* @param - list of employees
* @return {void} - none.
* @description - sorting list of employees in ascending order by name
*/
function sortEmployeeNameAscending(list1) {
    var i;
    for (i = 0; i < list1.length; i++) {
        list1[i][1].sort(function(a, b) {
            return compareStrings(a.empname, b.empname);
        });
    }
    directorypage.datasegment.removeAll();
    lflag = 3;
    directorypage.datasegment.setData(list1);
    mastercopy = list1;
    masterData = list1;
    myDecision();
}

/**
* @member of  employeeDirectory.js
* @param - list of employees
* @return {void} - none.
* @description - sorting list of employees in descending order by name
*/
function sortEmployeeNameDescending(list2) {
    var i;
    for (i = 0; i < list2.length; i++) {
        list2[i][1].sort(function(a, b) {
            return compareStrings(b.empname, a.empname);
	    });
    }
    directorypage.datasegment.removeAll();
    list2.reverse();
    mastercopy = list2;
    kony.print(list2);
    lflag = 1;
    directorypage.datasegment.setData(list2);
    masterData = list2;
    myDecision();
}

/**
* @member of  employeeDirectory.js
* @param - two employee names to compare
* @return {void} - none.
* @description - comparing two employees with their names for sorting
*/
function compareStrings(a, b) {
	a = a.toLowerCase();
    b = b.toLowerCase();
    return (a > b) ? 1 : (a < b) ? -1 : 0;
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - sorting of employees with ascending order by name
*/
function onClickAscending() {
    flag = 1;
    directorypage.ascendingimage.src = "ascendingactive.png";
    directorypage.descendingimage.src = "descending.png";
  	resetFilters();
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - sorting of employees with descending order by name
*/
function onClickDescending() {
    flag = 0;
    directorypage.ascendingimage.src = "ascending.png";
    directorypage.descendingimage.src = "descendingactive.png";
    resetFilters();
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - resetting the filter values
*/
function resetFilters(){
  	flag1 = -1;
  	directorypage.hrimage.src = "checkboxinactive.png";
    directorypage.salesimage.src = "checkboxinactive.png";
    directorypage.executiveimage.src = "checkboxinactive.png";
    directorypage.financeimage.src = "checkboxinactive.png";
    directorypage.advisoryimage.src = "checkboxinactive.png";
    directorypage.communicationimage.src = "checkboxinactive.png";
  	filtersArray = [0,0,0,0,0,0];
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - apply the filters selected
*/
function onClickApplyButton() {
    masterData = [];
    myDecision();
    var employeeList = masterData;
    if (flag === 1) {
        sortEmployeeNameAscending(employeeList);
    }
  	else if (flag === 0) {
        sortEmployeeNameDescending(employeeList);
    }
  	else {}
    flag = -1;
    if (flag1 === 1) {
        onFilter();
        if (filteredData.length !== 0) {
            directorypage.datasegment.removeAll();
          	alphaarray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    		var sortarray1 = [];
    		var sortarray2 = [];
    		var i, j, min;
          	var segmentData = [];
    		 //This for loop is for converting above user data into our sections format dynamically
    		for (i = 0; i < alphaarray.length; i++){
        		 for (j = 0; j < filteredData.length; j++){
                   	if (alphaarray[i] === filteredData[j].empname[0] || alphaarray[i].toLowerCase() === filteredData[j].empname[0]) {
                		sortarray2.push(filteredData[j]);
            		}
        		}
        		if (sortarray2.length !== 0) {
            		min = {
            		    stoplabel1: "   " + alphaarray[i]
            		};
            		sortarray1.push(min);
            		segmentData.push([sortarray1[0], sortarray2]);
            		sortarray1 = [];
            		sortarray2 = [];
        		}
    		}
            directorypage.datasegment.setData(segmentData);
          
        }
      	else{
          	filtersApplied = false;
          	for(var k = 0; k < filtersArray.length; k++){
              	if(filtersArray[k] == 1){
                  	filtersApplied = true;
                  	break;
                }
              	else
                  	filtersApplied = false;
            }
          	if(filtersApplied === true){
              	directorypage.datasegment.isVisible = false;
              	directorypage.lblNoResultsFound.isVisible = true;              	
            }
          	else{
              	directorypage.datasegment.isVisible = true;
              	directorypage.lblNoResultsFound.isVisible = false;
              	onWrong();
            }
        }
        mastercopy = filteredData;
        lflag = 2;
        flag1 = -1;
        masterData = [];
        myDecision();
        filteredData = [];
    }
  	else {}
    flag1 = -1;
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - cancelling the filters applied
*/
function onWrong() {
    directorypage.ascendingimage.src = "ascending.png";
    directorypage.descendingimage.src = "descending.png";
    flag = -1;
    resetFilters();
    directorypage.datasegment.removeAll();
    filteredData = [];
    masterData = [];
    myDecision();
  	directorypage.datasegment.isVisible = true;
    directorypage.datasegment.setData(masterData);
    lflag = 0;
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - functionality for filtering based on applied filters
*/
function onFilter() {
    var i, j, k;
    filteredData = [];
  	for(i = 0; i < filtersArray.length; i++){
      	if(filtersArray[i] == 1){
          	switch(i){
              case 0:
                	for(j = 0; j < sampleEmployeeData.length; j++)
                	if(sampleEmployeeData[j].department === "HR")
                	  	filteredData.push(sampleEmployeeData[j]);
                	break;
              case 1:
                	for(j = 0; j < sampleEmployeeData.length; j++)
                	if(sampleEmployeeData[j].department === "Sales")
                	  	filteredData.push(sampleEmployeeData[j]);
                	break;
               case 2:
                	for(j = 0; j < sampleEmployeeData.length; j++)
                	if(sampleEmployeeData[j].department === "Executive")
                	  	filteredData.push(sampleEmployeeData[j]);
                	break;
                case 3:
                	for(j = 0; j < sampleEmployeeData.length; j++)
                	if(sampleEmployeeData[j].department === "Finance")
                	  	filteredData.push(sampleEmployeeData[j]);
                	break;
                case 4:
                	for(j = 0; j < sampleEmployeeData.length; j++)
                	if(sampleEmployeeData[j].department === "Advisory")
                	  	filteredData.push(sampleEmployeeData[j]);
                	break;
                case 5:
                	for(j = 0; j < sampleEmployeeData.length; j++)
                	if(sampleEmployeeData[j].department === "Corp.Communication")
                	  	filteredData.push(sampleEmployeeData[j]);
                	break;
            }
        }
    }
}



/**
* @member of  employeeDirectory.js
* @param - search key entered in the search box
* @return {void} - none.
* @description - condition whether to search the employees list
*/
function searchCondition(data) {
    if (data === "") {
      	masterData = [];
        if (lflag === 0) {
            myDecision();
          	directorypage.datasegment.setData(masterData);
        }
        if (lflag === 1) {
            directorypage.datasegment.setData(mastercopy);
        }
        if (lflag === 2) {
            directorypage.datasegment.setData(mastercopy);
        }
        if (lflag === 3) {
            directorypage.datasegment.setData(mastercopy);
        }
    } else {
        searchEmployee(data);
    }
}

/**
* @member of  employeeDirectory.js
* @param - search key entered in the search box
* @return {void} - none.
* @description - searching the employees list
*/
function searchEmployee(SearchText) {
    var i, j, sflag = -1;
    var Realtxt;
    var selectedemployees = [];
    if (empty === 0) {
        directorypage.datasegment.setData(masterData);
        empty = -1;
    }
    if (lflag === 0) {
        myDecision();
        for (i = 0; i < masterData.length; i++) {
            for (j = 0; j < masterData[i][1].length; j++) {
                Realtxt = masterData[i][1][j].empname.toLowerCase();
                SearchText = SearchText.toLowerCase();
                if ((Realtxt.indexOf(SearchText) != -1) && (Realtxt.indexOf(SearchText) === 0)) {
                    directorypage.datasegment.selectedIndex = [i, j];
                    sflag = 0;
                    break;
                }

            }

            if (sflag === 0) {
                break;
            }

        }
        if (sflag !== 0) {
            directorypage.datasegment.removeAll();
            empty = 0;
        }
    }
    if (lflag === 1) {
        for (i = 0; i < mastercopy.length; i++) {
            for (j = 0; j < mastercopy[i][1].length; j++) {
                Realtxt = mastercopy[i][1][j].empname.toLowerCase();
                SearchText = SearchText.toLowerCase();
                if ((Realtxt.indexOf(SearchText) != -1) && (Realtxt.indexOf(SearchText) === 0)) {
                    directorypage.datasegment.selectedIndex = [i, j];
                    sflag = 0;
                    break;
                }
            }
            if (sflag === 0) {
                break;
            }
        }
        if (sflag !== 0) {
            directorypage.datasegment.removeAll();
            empty = 0;
        }
    }
    if (lflag === 2) {
        for (i = 0; i < mastercopy.length; i++) {
            for (j = 0; j < mastercopy[i][1].length; j++) {
                Realtxt = mastercopy[i][1][j].empname.toLowerCase();
                SearchText = SearchText.toLowerCase();
                if ((Realtxt.indexOf(SearchText) != -1) && (Realtxt.indexOf(SearchText) === 0)) {
                    directorypage.datasegment.selectedIndex = [i, j];
                    sflag = 0;
                    break;
                }
            }
            if (sflag === 0) {
                break;
            }
        }
        if (sflag !== 0) {
            directorypage.datasegment.removeAll();
            empty = 0;
        }
    }
    if (lflag === 3) {
        for (i = 0; i < mastercopy.length; i++) {
            for (j = 0; j < mastercopy[i][1].length; j++) {
                Realtxt = mastercopy[i][1][j].empname.toLowerCase();
                SearchText = SearchText.toLowerCase();
                if ((Realtxt.indexOf(SearchText) != -1) && (Realtxt.indexOf(SearchText) === 0)) {
                    directorypage.datasegment.selectedIndex = [i, j];
                    sflag = 0;
                    break;
                }
            }
            if (sflag === 0) {
                break;
            }
        }
        if (sflag !== 0) {
            directorypage.datasegment.removeAll();
            empty = 0;
        }
    }
}
/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - details of employee clicked
*/
function details() {
    if (directorypage.datasegment.selectedItems[0].empname.text !== undefined) {
        detailspage.employeeimage.src = directorypage.datasegment.selectedItems[0].empimage.src;
        detailspage.empname.text = directorypage.datasegment.selectedItems[0].empname.text;
        detailspage.onlineimage.src = directorypage.datasegment.selectedItems[0].onlineimage.src;
        detailspage.designationlabel.text = directorypage.datasegment.selectedItems[0].designation.text;
        detailspage.titlecc.text = directorypage.datasegment.selectedItems[0].designation.text;
        detailspage.mimage.src = directorypage.datasegment.selectedItems[0].empimage.src;
    } else {
        detailspage.employeeimage.src = directorypage.datasegment.selectedItems[0].empimage;
        detailspage.empname.text = directorypage.datasegment.selectedItems[0].empname;
        detailspage.onlineimage.src = directorypage.datasegment.selectedItems[0].onlineimage;
        detailspage.designationlabel.text = directorypage.datasegment.selectedItems[0].designation;
        detailspage.titlecc.text = directorypage.datasegment.selectedItems[0].designation;
        detailspage.mimage.src = directorypage.datasegment.selectedItems[0].empimage;
    }
  detailspage.reportingtoc.text="John Smith";
  detailspage.departmentc.text="Release Management";
  detailspage.emptypec.text="customer facing";
  detailspage.wksc.text="D7-132";
  detailspage.locationc.text="7th floor,phoenix infocity";
  detailspage.mobilec.text="9999999999";
  detailspage.emailc.text="nelson.shin@abc.com";
  detailspage.skypec.text="nelson.shin";
  detailspage.addressc.text="Niagara Fills";
  detailspage.Timezonec.text="IST + 5.30";
  detailspage.Groupsc.text="Cycling,Trecking and Adventures";
  detailspage.mimage.src="image1.png";//directorypage.datasegment.selectedItems[0].empimage;
  detailspage.backimage="imagedrag.png";
  detailspage.limage.src="mappin.png";
  detailspage.show();
    index = directorypage.datasegment.selectedIndex[0];
    index1 = directorypage.datasegment.selectedIndex[1];
  
}


/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - swipe gesture for employee details scroll
*/
function ondetailsscrollSwipe() {
  //#ifdef android
    detailspage.totalscroll.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
        fingers: 1
    }, gestureHandler);
detailspage.flxScrollSegment.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
        fingers: 1
    }, gestureHandlerMove);
  function gestureHandlerMove(widgetID, gestureInfo) {
        if (gestureInfo.swipeDirection == 3) {
            if (detailspage.categoryflex.top === "42.25%") {
                detailspage.photoflex.skin = "afteranim";
                AnimationDetails_TopFlex(1);
                move(detailspage.categoryflex, "21.2%", "0%", 0.5);
                move(detailspage.flxScrollSegment, "31.2%", "0%", 0.5);
                move(detailspage.totalscroll, "31.2%", "-100%", 0.5);
                detailspage.photoflex1.skin = afteranim;
                detailspage.designationlabel.skin = detailheaddesignation;
                detailspage.empname.skin = detailheadname;
            }
        }
  }
    function gestureHandler(widgetID, gestureInfo) {
        if (gestureInfo.swipeDirection == 3) {
            if (detailspage.categoryflex.top === "42.25%") {
                detailspage.photoflex.skin = "afteranim";
                AnimationDetails_TopFlex(1);
                move(detailspage.categoryflex, "21.2%", "0%", 0.5);
                move(detailspage.flxScrollSegment, "31.2%", "100%", 0.5);
                move(detailspage.totalscroll, "31.2%", "0%", 0.5);
                detailspage.photoflex1.skin = afteranim;
                detailspage.designationlabel.skin = detailheaddesignation;
                detailspage.empname.skin = detailheadname;
            }
        }
    }
  //#endif
}
/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - setting the details page after scroll animation in android
*/
function fcontainertouch() {
  //#ifdef android
    if (detailspage.categoryflex.top == "21.2%") {
        detailspage.photoflex1.skin = mbeforeanim;
        detailspage.designationlabel.skin = bdlabel;
        detailspage.empname.skin = belabel;
        Animation_TopFlexOriginalConfg(1);
        move(detailspage.totalscroll, "52.25%", "0%", 0.5);
        move(detailspage.flxScrollSegment, "52.25%", "100%", 0.5);
        move(detailspage.categoryflex, "42.25%", "0%", 0.5);
        detailspage.photoflex.skin = "mflex";
        indicateReachEnd = 1;
    }
  //#endif
}
/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - setting the details page after scroll animation of heirarchy details in android
*/
function fcontainertouchScrollSegment() {
  //#ifdef android
    if (detailspage.categoryflex.top == "21.2%") {
        detailspage.photoflex1.skin = mbeforeanim;
        detailspage.designationlabel.skin = bdlabel;
        detailspage.empname.skin = belabel;
        Animation_TopFlexOriginalConfg(1);
        move(detailspage.totalscroll, "52.25%", "-100%", 0.5);
        move(detailspage.flxScrollSegment, "52.25%", "0%", 0.5);
        move(detailspage.categoryflex, "42.25%", "0%", 0.5);
        detailspage.photoflex.skin = "mflex";
        indicateReachEnd = 1;
    }
  //#endif
}

/**
* @member of  employeeDirectory.js
* @param - parameters required for height to be scrolled
* @return {void} - none.
* @description - to calculate the height to be scrolled
*/
function scale(element, height, width, time) {
    obj = element;
    obj.animate(
        kony.ui.createAnimation({
            "100": {
                "height": height,
                "width": width,
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
* @member of  employeeDirectory.js
* @param - parameters required to move the employee details flex
* @return {void} - none.
* @description - moving the employee details flex based on scroll
*/
function move(flx, top, left, time) {
    obj = flx;
    obj.animate(
        kony.ui.createAnimation({
            "100": {
                "top": top,
                "left": left,
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
* @member of  employeeDirectory.js
* @param - time for which the scroll is done
* @return {void} - none.
* @description - top flex animation details after scroll 
*/
function AnimationDetails_TopFlex(time) {
    function ____56b6d1e19b2542a8a51ee1111a81f3fb_Callback() {}

    function ____3674d0c4bf7c471cb3a12157011be6ce_Callback() {

    }
    detailspage.photoflex1.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "height": "51%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
        }, {
            "animationEnd": ____56b6d1e19b2542a8a51ee1111a81f3fb_Callback
        });

    function MOVE_ACTION____79835c0f4eba4927ac488cb86887df3b_Callback() {
        detailspage.photoflex1.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "49%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.1
            }, {
                "animationEnd": ____3674d0c4bf7c471cb3a12157011be6ce_Callback
            });
    }

    function MOVE_ACTION____9a05667bfafd4641a69b752b86eb9309_Callback() {}

    function MOVE_ACTION____0769e7758903480f96c948fefb1820f3_Callback() {}

    function MOVE_ACTION____f626fdd30e0f40fd9296a5b4d01c0f86_Callback() {}

    function MOVE_ACTION____deee36449a914f93acc83ccd82c7c570_Callback() {}

    function MOVE_ACTION____2c7d570d4d3f451a962de90432179998_Callback() {}

    function TRANSFORM_ACTION____3314e7227d084045af3bbc3f4685aee1_Callback() {}

    function MOVE_ACTION____7874e268a0c443ba8962aa177636fa6d_Callback() {}
    detailspage.photoflex.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "-21.05%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5 ////////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____79835c0f4eba4927ac488cb86887df3b_Callback
        });
    detailspage.staticimage.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "-42.25%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ///////////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____7874e268a0c443ba8962aa177636fa6d_Callback
        });
    var trans100 = kony.ui.makeAffineTransform();
    trans100.scale(0.8, 0.8);
    detailspage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time //////////changed 1 to time
        }, {
            "animationEnd": TRANSFORM_ACTION____3314e7227d084045af3bbc3f4685aee1_Callback
        });
    detailspage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "60%",
                "left": "5.5%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1 ///////////
        }, {
            "animationEnd": MOVE_ACTION____2c7d570d4d3f451a962de90432179998_Callback
        });
    detailspage.empname.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "32%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1 ////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____deee36449a914f93acc83ccd82c7c570_Callback
        });
    detailspage.designationlabel.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "52%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ///////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____f626fdd30e0f40fd9296a5b4d01c0f86_Callback
        });
    detailspage.backimage.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "2%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ///////////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____0769e7758903480f96c948fefb1820f3_Callback
        });
    detailspage.backbutton.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "2%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ////////////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____9a05667bfafd4641a69b752b86eb9309_Callback
        });
}


/**
* @member of  employeeDirectory.js
* @param - time for which the scroll is done
* @return {void} - none.
* @description - to move the top flex to its original position
*/
function Animation_TopFlexOriginalConfg(time) {
    function SCALE_ACTION____54a745d8a42647f491f7fc96e95a79e3_Callback() {}

    function MOVE_ACTION____f7323e480750448f9991a97c37822f77_Callback() {}

    function SCALE_ACTION____da5c10d0bb51406a957ae54b99c4c7d0_Callback() {}

    function MOVE_ACTION____fe473e5ac5fc42e6b6ecd13746bc82bd_Callback() {}

    function SCALE_ACTION____a9f68aca9c1f483a8250293c4aac15a2_Callback() {}

    function MOVE_ACTION____27210374bf614be196ad25c181a1ce70_Callback() {}

    function TRANSFORM_ACTION____1f80428f24e040e4abf47ac3d7a9038b_Callback() {}

    function MOVE_ACTION____db2917cf40964663b48b52d9b06c0f5e_Callback() {}

    function SCALE_ACTION____0ad22abb4b924323b268888ff3660f90_Callback() {}

    function MOVE_ACTION____e3ee6c41e82f4cee8776d9f840780962_Callback() {}

    function SCALE_ACTION____e71ba06ca3cf4b8db8ec14df46862182_Callback() {}

    function MOVE_ACTION____edc9cb891ca64c5cb796a50fba2452b6_Callback() {}
    detailspage.staticimage.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
        }, {
            "animationEnd": MOVE_ACTION____e3ee6c41e82f4cee8776d9f840780962_Callback
        });
    detailspage.staticimage.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "100%",
                "height": "42.25%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
        }, {
            "animationEnd": SCALE_ACTION____0ad22abb4b924323b268888ff3660f90_Callback
        });

    detailspage.photoflex.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5 ////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____edc9cb891ca64c5cb796a50fba2452b6_Callback
        });
    detailspage.photoflex.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "100%",
                "height": "42.25%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time /////////////////changed 1 to time
        }, {
            "animationEnd": SCALE_ACTION____e71ba06ca3cf4b8db8ec14df46862182_Callback
        });
    detailspage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "45.6%",
                "left": "37.5%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1 ////////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____db2917cf40964663b48b52d9b06c0f5e_Callback
        });
    var trans100 = kony.ui.makeAffineTransform();
    trans100.scale(1, 1);
    detailspage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time /////////////////changed 1 to time
        }, {
            "animationEnd": TRANSFORM_ACTION____1f80428f24e040e4abf47ac3d7a9038b_Callback
        });
    detailspage.empname.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "50%",
                "left": "10%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ///////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____27210374bf614be196ad25c181a1ce70_Callback
        });
    detailspage.empname.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                //"height": "11%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time //////////////changed 1 to time
        }, {
            "animationEnd": SCALE_ACTION____a9f68aca9c1f483a8250293c4aac15a2_Callback
        });
    detailspage.designationlabel.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "71%",
                "left": "25%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ////////////////////////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____fe473e5ac5fc42e6b6ecd13746bc82bd_Callback
        });
    detailspage.designationlabel.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                //"height": "12%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time //////////////changed 1 to time
        }, {
            "animationEnd": SCALE_ACTION____da5c10d0bb51406a957ae54b99c4c7d0_Callback
        });

    function TRANSFORM_ACTION____2f288e32e94a40a588d818130e877c7f_Callback() {}

    function MOVE_ACTION____96ae503495d742788e7e7bdea90806b3_Callback() {}
    detailspage.photoflex1.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "64.6%",
                "left": "0%",
                "height" : "35.4%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ////////changed 1 to time
        }, {
            "animationEnd": MOVE_ACTION____96ae503495d742788e7e7bdea90806b3_Callback
        });
    trans100 = kony.ui.makeAffineTransform();
    trans100.scale(1, 1);
    detailspage.photoflex1.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": time ///////////////////changed 1 to time
        }, {
            "animationEnd": TRANSFORM_ACTION____2f288e32e94a40a588d818130e877c7f_Callback
        });
}


/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - code to be executed before the form loads
*/
function profilePreshow() {
    profilepage.mobiletext.isVisible = false;
    profilepage.skypetext.isVisible = false;
    profilepage.addresstext.isVisible = false;
    profilepage.timezonetext.isVisible = false;
    profilepage.groupstext.isVisible = false;
}


/**
* @member of  employeeDirectory.js
* @param - name of the widget
* @return {void} - none.
* @description - to open the media gallery of the device
*/
function openMediaGallery(widgetname) {
    function onselectioncallback(rawbytes) {

        if (rawbytes === null) {
            alert("nothing selected");
            return;
        }
        //(convert the rawbytes to base64 and can be assign
        widgetname.rawBytes = rawbytes;
        //Assigning rawbytes directly to a image widget
        /*formid.imageid.rawdata = rawbytes;*/
    }
    var querycontext = {
        mimetype: "image/*"
    };
    returnStatus = kony.phone.openMediaGallery(onselectioncallback,
        querycontext);
}


/**
* @member of  employ
* @return {void} - none.
* @description - swipe gesture on scrolling details 
*/
function ondetailsscrollSwipe1() {
    /*profilepage.totalscroll.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {fingers: 1}, gestureHandler);
  
    
	function gestureHandler(widgetID,gestureInfo)
	{
  		//alert("swipe direction:"+gestureInfo);
      if(gestureInfo.swipeDirection == 3)
        {
          if(profilepage.categoryflex.top == "42.25%")
            {
              profilepage.photoflex.skin="afteranim";
             
              AnimationDetails_TopFlex1();
             
              move(profilepage.categoryflex,"21.2%","0%",1);
              move(profilepage.dataeditflex,"31.2%","0%",1);
              move(profilepage.totalscroll,"41.2%","0%",1);
              
              profilepage.profileeditimage.isVisible=false;
              profilepage.coverphotoeditimage.isVisible=false;
              profilepage.photoflex1.skin=afteranim;
              profilepage.designationlabel.skin=detailheaddesignation;
              profilepage.empname.skin=detailheadname;
            }
        }
    } 	*/
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - on touch of flex container in profile page
*/
function fcontainertouch1() {
    if (profilepage.categoryflex.top == "21.2%") {
        profilepage.photoflex1.skin = mbeforeanim;

        profilepage.designationlabel.skin = bdlabel;
        profilepage.empname.skin = belabel;

        Animation_TopFlexOriginalConfg1(1);
        move(profilepage.dataeditflex, "52.15%", "0%", 1);

        move(profilepage.categoryflex, "42.25%", "0%", 1);
        move(profilepage.totalscroll, "62.1%", "0%", 1);
        profilepage.photoflex.skin = "mflex";
        profilepage.profileeditimage.isVisible = true;
        profilepage.coverphotoeditimage.isVisible = true;
    }
}


/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - animating the top flex of profile page 
*/
function AnimationDetails_TopFlex1() {
    function ____56b6d1e19b2542a8a51ee1111a81f3fb_Callback() {}

    function ____3674d0c4bf7c471cb3a12157011be6ce_Callback() {

    }
    profilepage.photoflex1.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "height": "51%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
        }, {
            "animationEnd": ____56b6d1e19b2542a8a51ee1111a81f3fb_Callback
        });

    function MOVE_ACTION____79835c0f4eba4927ac488cb86887df3b_Callback() {
        profilepage.photoflex1.animate(
            kony.ui.createAnimation({
                "100": {
                    "top": "49%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.1
            }, {
                "animationEnd": ____3674d0c4bf7c471cb3a12157011be6ce_Callback
            });
    }

    function MOVE_ACTION____9a05667bfafd4641a69b752b86eb9309_Callback() {}

    function MOVE_ACTION____0769e7758903480f96c948fefb1820f3_Callback() {}

    function MOVE_ACTION____f626fdd30e0f40fd9296a5b4d01c0f86_Callback() {}

    function MOVE_ACTION____deee36449a914f93acc83ccd82c7c570_Callback() {}

    function MOVE_ACTION____2c7d570d4d3f451a962de90432179998_Callback() {}

    function TRANSFORM_ACTION____3314e7227d084045af3bbc3f4685aee1_Callback() {}

    function MOVE_ACTION____7874e268a0c443ba8962aa177636fa6d_Callback() {}
    profilepage.photoflex.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "-21.05%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____79835c0f4eba4927ac488cb86887df3b_Callback
        });
    profilepage.staticimage.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "-42.25%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____7874e268a0c443ba8962aa177636fa6d_Callback
        });
    var trans100 = kony.ui.makeAffineTransform();
    trans100.scale(0.8, 0.8);
    profilepage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": TRANSFORM_ACTION____3314e7227d084045af3bbc3f4685aee1_Callback
        });
    profilepage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "60%",
                "left": "5.5%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____2c7d570d4d3f451a962de90432179998_Callback
        });
    profilepage.empname.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "70%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____deee36449a914f93acc83ccd82c7c570_Callback
        });
    profilepage.designationlabel.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "80%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____f626fdd30e0f40fd9296a5b4d01c0f86_Callback
        });
    profilepage.backimage.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "3%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____0769e7758903480f96c948fefb1820f3_Callback
        });
    profilepage.backbutton.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "3%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____9a05667bfafd4641a69b752b86eb9309_Callback
        });
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - animating the top flex of profile page to its original position
*/
function Animation_TopFlexOriginalConfg1() {
    function SCALE_ACTION____54a745d8a42647f491f7fc96e95a79e3_Callback() {}

    function MOVE_ACTION____f7323e480750448f9991a97c37822f77_Callback() {}

    function SCALE_ACTION____da5c10d0bb51406a957ae54b99c4c7d0_Callback() {}

    function MOVE_ACTION____fe473e5ac5fc42e6b6ecd13746bc82bd_Callback() {}

    function SCALE_ACTION____a9f68aca9c1f483a8250293c4aac15a2_Callback() {}

    function MOVE_ACTION____27210374bf614be196ad25c181a1ce70_Callback() {}

    function TRANSFORM_ACTION____1f80428f24e040e4abf47ac3d7a9038b_Callback() {}

    function MOVE_ACTION____db2917cf40964663b48b52d9b06c0f5e_Callback() {}

    function SCALE_ACTION____0ad22abb4b924323b268888ff3660f90_Callback() {}

    function MOVE_ACTION____e3ee6c41e82f4cee8776d9f840780962_Callback() {}

    function SCALE_ACTION____e71ba06ca3cf4b8db8ec14df46862182_Callback() {}

    function MOVE_ACTION____edc9cb891ca64c5cb796a50fba2452b6_Callback() {}
    profilepage.staticimage.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
        }, {
            "animationEnd": MOVE_ACTION____e3ee6c41e82f4cee8776d9f840780962_Callback
        });
    profilepage.staticimage.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "100%",
                "height": "42.25%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
        }, {
            "animationEnd": SCALE_ACTION____0ad22abb4b924323b268888ff3660f90_Callback
        });

    profilepage.photoflex.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____edc9cb891ca64c5cb796a50fba2452b6_Callback
        });
    profilepage.photoflex.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "100%",
                "height": "42.25%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": SCALE_ACTION____e71ba06ca3cf4b8db8ec14df46862182_Callback
        });
    profilepage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "45.6%",
                "left": "38%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____db2917cf40964663b48b52d9b06c0f5e_Callback
        });
    var trans100 = kony.ui.makeAffineTransform();
    trans100.scale(1, 1);
    profilepage.flxImgBdg.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": TRANSFORM_ACTION____1f80428f24e040e4abf47ac3d7a9038b_Callback
        });
    profilepage.empname.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "81%",
                "left": "10%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____27210374bf614be196ad25c181a1ce70_Callback
        });
    profilepage.empname.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "height": "8.7%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": SCALE_ACTION____a9f68aca9c1f483a8250293c4aac15a2_Callback
        });
    profilepage.designationlabel.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "91%",
                "left": "25%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____fe473e5ac5fc42e6b6ecd13746bc82bd_Callback
        });
    profilepage.designationlabel.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "height": "10%"
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": SCALE_ACTION____da5c10d0bb51406a957ae54b99c4c7d0_Callback
        });

    function TRANSFORM_ACTION____2f288e32e94a40a588d818130e877c7f_Callback() {}

    function MOVE_ACTION____96ae503495d742788e7e7bdea90806b3_Callback() {}
    profilepage.photoflex1.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "64.6%",
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____96ae503495d742788e7e7bdea90806b3_Callback
        });
    trans100 = kony.ui.makeAffineTransform();
    trans100.scale(1, 1);
    profilepage.photoflex1.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": TRANSFORM_ACTION____2f288e32e94a40a588d818130e877c7f_Callback
        });
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - on click of login button on login page
*/
function loginClicked() {
    if (loginpage.lblusername.text === "") {
        loginpage.flxAlert.flxAlertInner.lblAlertDetails.text = "Username cannot be empty";
        loginpage.flxAlert.setVisibility(true);
    } else if (loginpage.lblpassword.text === "") {
        loginpage.flxAlert.flxAlertInner.lblAlertDetails.text = "Password cannot be empty";
        loginpage.flxAlert.setVisibility(true);
    } else {
        if (loginpage.lblusername.text !== "kony") {
            loginpage.flxAlert.flxAlertInner.lblAlertDetails.text = "Username entered is incorrect";
            loginpage.flxAlert.setVisibility(true);
        } else if (loginpage.lblpassword.text !== "kony123") {
            loginpage.flxAlert.flxAlertInner.lblAlertDetails.text = "Password entered is incorrect";
            loginpage.flxAlert.setVisibility(true);
        } else {
            if (loginpage.toggleimage.src === "toggle_on.png") {
                var uname = loginpage.lblusername.text;
                kony.store.setItem("username", uname);
            }
            directorypage.show();
        }
    }
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - code to be executed each time before the login page loads
*/
function loginPreShow() {
    loginpage.lblpassword.text = "";
    if (loginpage.toggleimage.src === "toggle_on.png") {
        var uname = kony.store.getItem("username");
        loginpage.lblusername.text = uname;
    } else
        loginpage.lblusername.text = "";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - code to be executed only one before the login page loads
*/
function loginInit() {
    loginpage.lblusername.text = "";
    loginpage.lblpassword.text = "";
    //loginpage.toggleimage.src = "toggle_off.png";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - HR filter clicked in the filters
*/
function hrFlexClicked(){
  	if(directorypage.hrimage.src==="checkboxinactive.png")
	{
   		directorypage.hrimage.src="checkboxactive.png";
      	filtersArray[0] = 1;
    	flag1=1;
	}
	else
	{
	    directorypage.hrimage.src="checkboxinactive.png";
      	filtersArray[0] = 0;
    	flag1=1;
	}
	directorypage.ascendingimage.src="ascending.png";
	directorypage.descendingimage.src="descending.png";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - Sales filter clicked in the filters
*/
function salesFlexClicked(){
  	if(directorypage.salesimage.src==="checkboxinactive.png")
  	{
    	directorypage.salesimage.src="checkboxactive.png";
      	filtersArray[1] = 1;
    	flag1=1;
  	}
	else
  	{
    	directorypage.salesimage.src="checkboxinactive.png";
      	filtersArray[1] = 0;
    	flag1=1;
  	}
	directorypage.ascendingimage.src="ascending.png";
	directorypage.descendingimage.src="descending.png";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - Executive filter clicked in the filters
*/
function executiveFlexClicked(){
  	if(directorypage.executiveimage.src==="checkboxinactive.png")
  	{
    	directorypage.executiveimage.src="checkboxactive.png";
      	filtersArray[2] = 1;
    	flag1=1;
  	}
	else
  	{
    	directorypage.executiveimage.src="checkboxinactive.png";
      	filtersArray[2] = 0;
    	flag1=1;
  	}
	directorypage.ascendingimage.src="ascending.png";
	directorypage.descendingimage.src="descending.png";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - Finance filter clicked in the filters
*/
function financeFlexClicked(){
  	if(directorypage.financeimage.src==="checkboxinactive.png")
  	{
    	directorypage.financeimage.src="checkboxactive.png";
      	filtersArray[3] = 1;
    	flag1=1;
  	}
	else
  	{
    	directorypage.financeimage.src="checkboxinactive.png";
      	filtersArray[3] = 0;
    	flag1=1;
  	}
	directorypage.ascendingimage.src="ascending.png";
	directorypage.descendingimage.src="descending.png";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - Advisory filter clicked in the filters
*/
function advisoryFlexClicked(){
  	if(directorypage.advisoryimage.src==="checkboxinactive.png")
  	{
    	directorypage.advisoryimage.src="checkboxactive.png";
      	filtersArray[4] = 1;
    	flag1=1;
  	}
	else
  	{
    	directorypage.advisoryimage.src="checkboxinactive.png";
      	filtersArray[4] = 0;
    	flag1=1;
  	}
	directorypage.ascendingimage.src="ascending.png";
	directorypage.descendingimage.src="descending.png";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - Corporate Communication filter clicked in the filters
*/
function communicationFlexClicked(){
  	if(directorypage.communicationimage.src==="checkboxinactive.png")
  	{
    	directorypage.communicationimage.src="checkboxactive.png";
      	filtersArray[5] = 1;
    	flag1=1;
  	}
	else
  	{
    	directorypage.communicationimage.src="checkboxinactive.png";
      	filtersArray[5] = 0;
    	flag1=1;
  	}
	directorypage.ascendingimage.src="ascending.png";
	directorypage.descendingimage.src="descending.png";
}

/**
* @member of  employeeDirectory.js
* @return {void} - none.
* @description - Actions to be performed each time before the directory page loads
*/
function directoryPreShow(){
  	directorypage.datasegment.isVisible = true;
  	directorypage.lblNoResultsFound.isVisible = false;
}