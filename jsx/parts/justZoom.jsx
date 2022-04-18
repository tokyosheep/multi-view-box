function numFromInOut(zoomType){
  return zoomType === "in" ? 1.2 : 0.8;
}

function justZoomDocuments(arg){
  for(var l=0;l<app.documents.length;l++){
    var doc = app.documents[l];
    app.activeDocument = doc;
    if(arg.range === "global"){
      justZoomViews(arg);
    }else{
      doc.activeView.zoom = doc.activeView.zoom * numFromInOut(arg.direction);
    }
  }
}

function justZoomViews(arg){
  for(var i=0;i<app.activeDocument.views.length;i++){
    view = app.activeDocument.views[i];
    view.zoom = view.zoom * numFromInOut(arg.direction);
  }
}