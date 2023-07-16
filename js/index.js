import { ChangePage } from "./modules/page.js";
import { Pages } from "./modules/templates/pages.js";
import { Wait } from "./modules/utils/wait.js";
import { ExitPage } from "./modules/templates/exit_page.js";

let pageCount=0;

const main = document.getElementById("main-container");
await Wait(6000);
while(pageCount<Pages.length){await ChangePage(main,Pages[pageCount],"button-"+pageCount++,true);}

await Wait(1000);
document.getElementById("title").classList.add("hide-title");
[...document.getElementsByClassName("button-bounce")].forEach(elem=>{elem.classList.add("button-drop");})

await Wait(4000);
ChangePage(main,ExitPage,false,false);
