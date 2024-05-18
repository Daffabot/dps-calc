// DPS Calculator - JavaScript edition By Daffabot!
//============================================================================
// v0.01 - initial start of project totally works
// v0.02 - add a save local storage
// v0.03 - fix local storage to ensure all data is saved and not erased on refresh
// v0.04 - add save and delete save button and fix mobile responsive
// v0.05 - add import and export module
// v0.06 - fix and made all js files into import and export module
//============================================================================
//Visit Daffabot (https://github.com/Daffabot) for script in github
//Credit must stay intact for use

import { core } from "./crud/create.js";
import { clearText } from "./utility/clear.js";
import { deleteAllSave } from "./crud/delete.js";
import { openDonate, openGitHub } from "./utility/donate.js";
import { safer } from "./crud/save.js";
import { ReadWindow } from "./crud/read.js";

const countMe = document.getElementById("display");
const clearAll = document.getElementById("clear");
const save = document.getElementById("save");
const deleteSave = document.getElementById("deleteSave");
const donasi = document.getElementById("donate");

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

let readWindow = new ReadWindow();
window.readWindow = readWindow;

const ok = () => {
  safer();

  return true;
};
window.ok = ok;


countMe.addEventListener("click", display);
clearAll.addEventListener("click", cleared);
save.addEventListener('click', function() {
  // Panggil fungsi readWindow.alert di dalam callback event listener
  readWindowAlert('Nama senjata anda', 'Simpan Data Senjata');
});
deleteSave.addEventListener("click", deleted);
donasi.addEventListener("click", donate);