// DPS Calculator - JavaScript edition By Daffabot!
//============================================================================
// v0.01 - initial start of project totally works
// v0.02 - add a save local storage
// v0.03 - fix local storage to ensure all data is saved and not erased on refresh
// v0.04 - add save and delete save button and fix mobile responsive
// v0.05 - add import and export module
// v0.06 - fix and made all js files into import and export module
// v0.07 - fix the save function and always brings up stored weapon
// v0.08 - add CRUD and fix everything (no save & edit input validation yet)
// v0.09 - fix responsive css
// v0.10 - fix error alert
//============================================================================
//Visit Daffabot (https://github.com/Daffabot) for script in github
//Credit must stay intact for use

import { core } from "./crud/create.js";
import { clearText } from "./utility/clear.js";
import { deleteAllSave } from "./crud/delete.js";
import { openDonate, openGitHub } from "./utility/donate.js";
import { safer, removeDialog, see } from "./utility/save.js";
import { ReadWindow } from "./crud/read.js";
import { checkEditId, checkTrashId, edit } from "./crud/update.js";

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

const closedby = () => {
  removeDialog();
  console.log("pencet clo");

  return true;
};
window.closedby = closedby;

const upgrade = () => {
  edit();
  removeDialog();
  console.log("pencet edi");

  return true;
};
window.upgrade = upgrade;

const editItem = (button) => {
  let editId = button.id;
  let parentParagraphId = button.parentElement.id;
  checkEditId(parentParagraphId, editId);
  console.log(`Tombol dengan ID ${editId} diklik dan isinya ${parentParagraphId}`);

  return true;
};
window.editItem = editItem;

const deleteItem = (button) => {
  let trashId = button.id;
  let parentParagraphId = button.parentElement.id;
  checkTrashId(parentParagraphId, trashId);
  console.log(`Tombol dengan ID ${trashId} diklik dan isinya ${parentParagraphId}`);

  return true;
};
window.deleteItem = deleteItem;

window.onload = () => {
  see()
}
