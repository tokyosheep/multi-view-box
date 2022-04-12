
import fs from "fs";
import path from "path";
export const csInterface = new CSInterface();
export const extensionId = csInterface.getExtensionID();
export const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;

const debug = true;

export const writeDebugData = obj =>{
    if(!debug)return;
    fs.writeFileSync(`${extensionRoot}/data.json`,JSON.stringify(obj));
}

const reload = () =>{
    csInterface.addEventListener("com.adobe.csxs.events.WindowVisibilityChanged",()=>{location.reload(true)},false);
}

const preventDragEvent = () =>{
    window.addEventListener(`drop`,prevent_dragnaddrop,false);
    
    window.addEventListener(`dragover`,prevent_dragnaddrop,false);
    
    function prevent_dragnaddrop(e){
        e.stopPropagation();
        e.preventDefault();
    }
}

export const init = () => {
    preventDragEvent();
    reload();
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
}