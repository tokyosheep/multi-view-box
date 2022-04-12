/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

var obj = {
    "type": "sortZoom",
    "arg": {
        "zoomRatio": 0,
        "targetItem": {
            "center": "none",
            "range": "views"
        }
    }
}

hostScript();
function hostScript(){
var scale = 1.77;
  // app.activeDocument.activeView.zoom = 1*scale;
  $.writeln(app.redraw());
  $.writeln(app.activeDocument.activeView.zoom);
}
