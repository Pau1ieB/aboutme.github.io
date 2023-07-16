import { Wait } from "./utils/wait.js";
import { Create } from "./create.js";

export const ChangePage= async (parent,page,buttonId=false,remove=true)=>{
    ActivateButton(buttonId);
    Create(parent,[page.data],false);
    await Wait(page.time);
    if(remove)RemovePage(parent);
    DeactivateButton(buttonId);
    document.body.style.background="rgb(233, 233, 233)";
}

const ActivateButton=id=>{
    if(!id) return
    document.getElementById(id).classList.remove("bg-gray");
    document.getElementById(id).classList.add("bg-yellow");
}

const DeactivateButton=id=>{
    if(!id) return
    document.getElementById(id).classList.remove("bg-yellow");
    document.getElementById(id).classList.add("bg-gray");
}

const RemovePage=parent=>{
    while(parent.firstChild)parent.removeChild(parent.lastChild);
}