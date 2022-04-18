function getScale(){
  app.executeMenuCommand("actualsize");
  var scaleRatio = app.activeDocument.activeView.zoom;
  return scaleRatio;
}

function getCenterFromItem(item){
  if(item === undefined) return null;
  var X = item.left + (item.width/2); //右下のX座標
  var Y = item.top - (item.height/2); //右下のY座標  
  return { x: X, y: Y };
}

function getActiveArtBoard(){
  var doc = app.activeDocument; //ドキュメント
  var boards = doc.artboards; //アートボード
  var index = boards.getActiveArtboardIndex();
  return boards[index];
}


function getCenterFromArtBoard(board){
  var boardRect = board.artboardRect; //アートボードの座標
  var X1 = boardRect[0]; //左上のX座標
  var Y1 = boardRect[1]; //左上のY座標
  var X2 = boardRect[2]; //右下のX座標
  var Y2 = boardRect[3]; //右下のY座標  
  //▼アートボードの幅と高さを取得
  var boardW = X2 - X1; //アートボードの横幅
  var boardH = Y2 - Y1; //アートボードの高さ
  return { x: X1 + boardW/2 , y: Y1 + boardH/2 };
}