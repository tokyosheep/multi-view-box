/*
target items
{
  x: number
  y: number
}
*/
function createViews(targetItems){
  for(var i=0;i<targetItems.length;i++){
    try{
      app.executeMenuCommand("newwindow");
      /*
        can't set center point as activeDocument.activeView.centerPoint = [x,y]; 
      */
      activeDocument.views[activeDocument.views.length-1].centerPoint = [targetItems[i].x, targetItems[i].y];
    }catch(e){
      alert(e);
      continue;
    }
  }
}