// DPS Calculator - JavaScript edition By Daffabot!
//============================================================================
// v0.01 - initial start of project totally works
// v0.02 - add a save local storage
// v0.03 - fix local storage to ensure all data is saved and not erased on refresh
// v0.04 - add save and delete save button and fix mobile responsive
// v0.05 - add import and export module
//============================================================================
//Visit Daffabot (https://github.com/Daffabot) for script in github
//Credit must stay intact for use

import { core } from "./ouput.js";
import { clearText } from "./utility/clear.js";
import { deleteAllSave } from "./crud/delete.js";
import { openDonate, openGitHub } from "./utility/donate.js";
import { safer } from "./crud/save.js";

const display = () => {
  core();

  return true;
};
window.display = display;

const cleared = () => {
  clearText();

  return true;
};
window.cleared = cleared;

const deleted = () => {
  deleteAllSave();

  return true;
};
window.deleted = deleted;

const donate = () => {
  openDonate();

  return true;
};
window.donate = donate;

let customAlert = new CustomAlert();
window.customAlert = customAlert;
let shower = document.getElementById("showinputhere");

function CustomAlert() {
  this.alert = function (message, title) {
    if (shower && shower.textContent.includes("DPS (Damage Per Second)")) {
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

      let dialogoverlay = document.getElementById("dialogoverlay");
      let dialogbox = document.getElementById("dialogbox");

      let winH = window.innerHeight;
      dialogoverlay.style.height = winH + "px";

      dialogbox.style.top = "100px";

      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";

      document.getElementById("dialogboxhead").style.display = "block";

      if (typeof title === "undefined") {
        document.getElementById("dialogboxhead").style.display = "none";
      } else {
        document.getElementById("dialogboxhead").innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
      }
      document.getElementById("dialogboxbody").innerHTML = message + ' <input type="text" id="inputText">';
      document.getElementById("dialogboxfoot").innerHTML = '<button class="pure-material-button-contained active" id="closed" onclick="ok();">SAVE</button>';
      window.scrollTo(0, 0);
    } else {
      document.getElementById("showinputhere").innerHTML = "Data senjata yang mau di save gak ada bang";
    }
  };
}

const ok = () => {
  safer();

  return true;
};
window.ok = ok;