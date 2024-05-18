// DPS Calculator - JavaScript edition By Daffabot!
//============================================================================
// v0.01 - initial start of project totally works
// v0.02 - add a save local storage
// v0.03 - fix local storage to ensure all data is saved and not erased on refresh
// v0.04 - add save and delete save button and fix mobile responsive
// v0.05 - add import and export module
// v0.06 - fix and made all js files into import and export module
// v0.07 - fix the save function and always brings up stored weapon
//============================================================================
//Visit Daffabot (https://github.com/Daffabot) for script in github
//Credit must stay intact for use

import { core } from "./crud/create.js";
import { clearText } from "./utility/clear.js";
import { deleteAllSave } from "./crud/delete.js";
import { openDonate, openGitHub } from "./utility/donate.js";
import { safer, removeDialog, see } from "./crud/save.js";
import { ReadWindow } from "./crud/read.js";

const display = () => {
  core();
  console.log("pencet dis");

  return true;
};
window.display = display;

const cleared = () => {
  clearText();
  console.log("pencet cle");

  return true;
};
window.cleared = cleared;

const deleted = () => {
  deleteAllSave();
  console.log("pencet del");

  return true;
};
window.deleted = deleted;

const donate = () => {
  openDonate();
  console.log("pencet don");

  return true;
};
window.donate = donate;

const readWindow = new ReadWindow();
window.readWindow = readWindow;

const ok = () => {
  safer();
  removeDialog();
  console.log("pencet sav");

  return true;
};
window.ok = ok;

window.onload = () => {
  see()
}