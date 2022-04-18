
import fs from "fs";
import path from "path";
export const csInterface = new CSInterface();
export const extensionId = csInterface.getExtensionID();
export const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;
const jsxParts = `${extensionRoot}/parts`;

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

const loadJsx = async (jsxFolder) =>{
    const parts = await fs.promises.readdir(jsxFolder).catch(e=>console.log(e));
    const jsxes = parts.filter(f => path.extname(f) === ".jsx");
    jsxes.forEach(jsx =>  csInterface.evalScript(`$.evalFile("${jsxFolder}/${jsx}")`));
}

export const init = async () => {
    preventDragEvent();
    reload();
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    await loadJsx(jsxParts);
}