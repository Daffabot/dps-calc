import { ReadWindow } from "./read.js";
import { storedData, see, dataArray } from "../utility/save.js";

let numberEdit;
let numberTrash;
let now;

    const readWindow = new ReadWindow();
    window.readWindow = readWindow;

    function checkEditId(parentParagraphId, divId) {
        const match = divId.match(/edit(\d+)/);
        now = parentParagraphId;
        
        if (match) {
          numberEdit = parseInt(match[1], 10) - 1;
          readWindow.upt('Nama baru senjata anda', 'Edit Nama Data Senjata')
        }
    }

    function checkTrashId(parentParagraphId, diveId) {
        const matcher = diveId.match(/trash(\d+)/);
        console.log(matcher);
        now = parentParagraphId;
        
        if (matcher) {
          numberTrash = parseInt(matcher[1], 10) - 1;
          trash()
        }
    }

    function truncate(str) {
      return str.replace(/(Second\)).*$/, '$1');
    }

    function edit() {
      console.log(now);
      let awal = document.getElementById(now).innerText;
      awal = truncate(awal);
      console.log(awal);
      let inputan = document.getElementById("inputan").value;
      let ambil = awal + " " + inputan;
      console.log(storedData);

      // Menambahkan nilai baru ke dalam array
      dataArray[numberEdit] = ambil;
      console.log(dataArray);
      // Menyimpan data yang sudah diubah ke dalam local storage
      localStorage.setItem("storedStrings", JSON.stringify(dataArray));
      see()
    }

    function trash() {
      console.log(numberTrash);
      console.log(storedData);

      // Menambahkan nilai baru ke dalam array
      dataArray.splice(numberTrash, 1);
      console.log(dataArray);
      // Menyimpan data yang sudah diubah ke dalam local storage
      localStorage.setItem("storedStrings", JSON.stringify(dataArray));
      see()
    }

export {checkEditId, checkTrashId, edit, trash};