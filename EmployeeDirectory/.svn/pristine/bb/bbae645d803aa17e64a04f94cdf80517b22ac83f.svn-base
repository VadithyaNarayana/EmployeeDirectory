var masterdataDynamicFlexes = [[{sectionheadlabel:" Reporting to:",headerdotimage:"reortingicon.png"},[{empimage:"image1.png",onlineimage:"available.png",empname:"John Smith",designation:"Chief Executive Officer",department:"",manager:"John Smith"
                                                         } ]],
                 [{sectionheadlabel:" Shares Same Manager:",headerdotimage:"reortingicon.png"},[{empimage:"image2.png",onlineimage:"available.png",empname:"Lan Wright",designation:"Executive Assistant",department:"",manager:"John Smith"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Scott  Brown",designation:"SVP, Products",department:"Product Management",manager:"John Smith"},
                 {empimage:"image4.png",onlineimage:"available.png",empname:"Jim Moore",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"},
                 {empimage:"image1.png",onlineimage:"available.png",empname:" Rodney King",designation:"Sr.Director UX/UI Design",department:"UX/UI",manager:"Scott  Brown"},
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Douglas Hill",designation:"VP, Enterprise Engineering",department:"Engineering",manager:""},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Dan Turner",designation:"Director, Cloud Architecture",department:"Cloud",manager:"Scott  Brown"},
                 {empimage:"image4.png",onlineimage:"available.png",empname:"Anne Green",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"},
                 {empimage:"image1.png",onlineimage:"available.png",empname:"Alan Collins",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"},
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Larry Davis",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:"Philip Miller",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"}
                 ]],  
                 [{sectionheadlabel:" Direct Reportees:",headerdotimage:"reortingicon.png"},[{empimage:"image2.png",onlineimage:"available.png",empname:"Nelson Shin",designation:"VP, Enterprise Engineering",department:"Engineering",manager:"Scott  Brown"},
                 {empimage:"image3.png",onlineimage:"available.png",empname:" Mark Evans",designation:"Director, Cloud Architecture",department:"Cloud",manager:"Scott  Brown"},
                 {empimage:"image4.png",onlineimage:"available.png",empname:"Mick Jones",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"},
                 {empimage:"image1.png",onlineimage:"available.png",empname:"Anne Green",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"},
                 {empimage:"image2.png",onlineimage:"available.png",empname:"Robinson Cano",designation:"VP, Product Management",department:"Product Management",manager:"Scott  Brown"}]]];
var TopValue = 0;
var TopValueJ = 0;
var TopArrayValues = [];
/**
* @member of  DynamicFlexexHeirarchy.js
* @return {void} - none.
* @description -Creates the dynamic flexes for the hierarchy details in the details page
*/
function createDynamicFlexesHierarchy()
{ 
 for( var i = 0 ;  i < masterdataDynamicFlexes.length ; i++ )
   {
     var heirarchysectionheadcontainer = new kony.ui.FlexContainer({
        "id": "heirarchysectionheadcontainer"+i,
        "skin": "sknsectionheadertemplate",
        "top": TopValue + "%",
        "height":"13.5%",
        "width": "100%",
        "zIndex": 3,
        "isVisible": true,
        "clipbounds":true,
        "layoutType": kony.flex.FREE_FORM,   
      }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true
      },{}
   );
     var sectionheadlabel = new kony.ui.Label({
       "id":"sectionheadlabel"+i,
       "skin":"generalskin",
       "left": "15%",
       "top":"10%",
       "width":"85%",
       "height":"80%",
        "zIndex": 1, 
        "text": masterdataDynamicFlexes[i][0].sectionheadlabel,
        "isVisible":true,                                    
      },{
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true,    
        contentAlignment: constants.CONTENT_ALIGN_LEFT
      }, {}  
    );
    var headerdotlabel = new kony.ui.Label({
       "id":"headerdotlabel"+i,
       "skin":"sknSectionHeaderLine",
       "left": "7%",
       "top":"0%",
       "width":"1Px",
       "height":"100%",
        "zIndex": 1, 
        "text": "||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
        "isVisible":true,                                    
      },{
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true,    
        contentAlignment: constants.CONTENT_ALIGN_CENTER
      }, {}  
    ); 
    var headerdotimage= new kony.ui.Image2({
        "id": "headerdotimage"+i,                                               
        "left": "4.1%",
        "centerY": "50%",
        "width": "20dp",
        "height": "20dp",
        "zIndex": 1,
        "isVisible": true,
        "src":masterdataDynamicFlexes[i][0].headerdotimage,      
      }, {},{}
    );
     detailspage.flxScrollSegment.add(heirarchysectionheadcontainer);
     heirarchysectionheadcontainer.add(sectionheadlabel);
     heirarchysectionheadcontainer.add(headerdotlabel);
     heirarchysectionheadcontainer.add(headerdotimage);
    TopValueJ = TopValue + 13.5;
     for( var j = 0 ; j < masterdataDynamicFlexes[i][1].length ; j++ )
       {
          var maincontainer = new kony.ui.FlexContainer({
        "id": "maincontainer"+i+j,
        "skin": "sknMainContainer",
        "top": TopValueJ + "%",
        "height":"19.4%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipbounds":true,
        "layoutType": kony.flex.FREE_FORM,   
      }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true
      },{}
      );  
     var datacontainer1 = new kony.ui.FlexContainer({
        "id": "datacontainer1"+i+j,
        "skin": "imp1",
       "left":"15%",
        "top": "-0.5%",
        "height":"101%",
        "width": "80.5%",
        "zIndex": 1,
        "isVisible": true,
        "clipbounds":true,
        "layoutType": kony.flex.FREE_FORM,   
      }, {
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true
      },{}
      );
        var empimage = new kony.ui.Image2({
        "id": "empimage"+i+j,                                               
        "left": "8%",
        "centerY": "50%",
        "width": "22%",
        "height": "68%",
        "zIndex": 1,
        "isVisible": true,
        "src":masterdataDynamicFlexes[i][1][j].empimage,      
      }, {},{}
    );  
         var empname = new kony.ui.Label({
       "id":"empname"+i+j,
       "skin":"generalskin",
       "left": "35%",
       "top":"18%",
       "width":"preferred",
       "height":"preferred",
        "zIndex": 1, 
        "text": masterdataDynamicFlexes[i][1][j].empname,
        "isVisible":true,                                    
      },{
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true,    
        contentAlignment: constants.CONTENT_ALIGN_LEFT
      }, {}  
    );
          var designation = new kony.ui.Label({
       "id":"designation"+i+j,
       "skin":"sknDesignationTemp",
       "left": "35%",
       "top":"45%",
       "width":"preferred",
       "height":"preferred",
        "zIndex": 2, 
        "text": masterdataDynamicFlexes[i][1][j].designation,
        "isVisible":true,                                    
      },{
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true,    
        contentAlignment: constants.CONTENT_ALIGN_LEFT
      }, {}  
    );
      var department = new kony.ui.Label({
       "id":"department"+i+j,
       "skin":"sknDepartmentTemp",
       "left": "35%",
       "top":"70%",
       "width":"preferred",
       "height":"preferred",
        "zIndex": 2, 
        "text": masterdataDynamicFlexes[i][1][j].department,
        "isVisible":true,                                    
      },{
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true,    
        contentAlignment: constants.CONTENT_ALIGN_LEFT
      }, {}  
    );   
         var onlineimage = new kony.ui.Image2({
        "id": "onlineimage"+i+j,                                               
        "left": "21%",
        "top": "68%",
        "width": "4%",
        "height": "12%",
        "zIndex": 2,
        "isVisible": true,
        "src":masterdataDynamicFlexes[i][1][j].onlineimage,      
      }, {},{}
    );   
         var headerdotlabelJ = new kony.ui.Label({
       "id":"headerdotlabelJ"+i+j,
       "skin":"sknSectionHeaderLine",
       "left": "7%",
       "top":"0%",
       "width":"1Px",
       "height":"100%",
        "zIndex": 1, 
        "text": "||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
        "isVisible":true,                                    
      },{
        "padding": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true,    
        contentAlignment: constants.CONTENT_ALIGN_CENTER
      }, {}  
    ); 
      detailspage.flxScrollSegment.add(maincontainer);
      maincontainer.add(datacontainer1);
      maincontainer.add(headerdotlabelJ);
      datacontainer1.add(empimage);
      datacontainer1.add(empname);
      datacontainer1.add(designation);
      datacontainer1.add(department);
      datacontainer1.add(onlineimage);   
         TopValueJ = TopValueJ + 19.4 ;
       }
     TopArrayValues[i] = TopValue;
     if(i<1)
       TopValue = TopValue + TopValueJ ;
     else
       TopValue = TopValue + TopValueJ - 19.4-13.5;
   }
  TopValue = 0;
  TopValueJ = 0;
  detailspage.flxScrollSegment.maincontainer00.onTouchStart = fcontainertouchScrollSegment;
  detailspage.flxScrollSegment.maincontainer10.onTouchStart = fcontainertouchScrollSegment;
  
}