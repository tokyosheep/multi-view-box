/*
#include "./parts/common.jsx";
#include "./parts/create.jsx";
#include "./parts/justZoom.jsx";
*?


// var obj = {
//     "type": "sortZoom",
//     "arg": {
//         "zoomRatio": 70 / 100,
//         "targetItem": {
//             "center": "none",/* 'item'|'artBoard'|'none' */
//             "range": "documents" /* 'global'|'views'|'documemts' */
//         }
//     }
// }

// 
//var obj2 = {
//  "type": "createViwes",
//  "arg": {
//    "targetItem":"artBoard"/*"artBoard"|"Item*/
//  }
//}

// var obj3 = {
//   "type": "justZoom",
//   "arg": {
//     "range": "views", /* 'global'|'views'|'documemts' */
//     "direction": "out" /*in out*/
//   }
// }

// hostScript(obj);
function hostScript(obj){
  switch(obj.type){
    case "sortZoom":
      sortZoom(obj.arg);
      break;

    case "createViwes":
      setViews(obj.arg);
      break;

    case "justZoom":
      if(obj.arg.range !== "views"){
        justZoomDocuments(obj.arg);
      }else{
        justZoomViews(obj.arg);
      }
      break;
  }

  return true;
}

function sortZoom(arg){
  switch(arg.targetItem.range){
    case "views":
      zoomViews(arg);
      break;

    case "global":
      zoomDocuments(arg,true);
      break;

    case "documents":
      zoomDocuments(arg,false);
      break;
  }
}

function zoomViews(arg){
  for(var l=0;l<app.activeDocument.views.length;l++){
    setView(app.activeDocument.views[l],arg);
  }
}

function zoomDocuments(arg,isGlobal){
  for(var i=0;i<app.documents.length;i++){
    app.activeDocument = app.documents[i];
    try{
      if(isGlobal){
        zoomViews(arg);
      }else{
        setView(app.activeDocument.activeView,arg/*,getScale()*/);
      }
    }catch(e){
      alert(e);
      continue;
    }
  }
}

function setView(view,arg){
  var center;
  if(arg.targetItem.center !== "none"){
    center = arg.targetItem.center === "item" ? getCenterFromItem(app.activeDocument.selection[0]) : getCenterFromArtBoard(getActiveArtBoard());
    if(center === null)return;
    // view.centerPoint = [center.x, center.y];
  }else{
    center = view.centerPoint;//noneの場合は事前にzoomCenterpointを取得して後に戻す。
  }
  var scaleRatio = getScale();
  view.zoom = scaleRatio * arg.zoomRatio; 
  view.centerPoint = center;
}

function getBoardsRect(){
  var rects = [];
  for(var l =0;l<app.activeDocument.artboards.length;l++){
    rects[l] = getCenterFromArtBoard(app.activeDocument.artboards[l]);
  }
  return rects;
}

function getItemsReact(){
  var rects = [];
  for(var l=0;l<app.activeDocument.selection.length;l++){
    rects[l] = getCenterFromItem(app.activeDocument.selection[l]);
  }
  return rects;
}

function setViews(arg){ 
  var targetItems = arg.targetItem === "artBoard" ?
    getBoardsRect()
  : 
    getItemsReact()
  ;
  createViews(targetItems);
}
