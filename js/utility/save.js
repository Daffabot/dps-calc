export let storedData = localStorage.getItem("storedStrings");
export let point = 0;
export let dataArray = [];

function the() {
  point = 0;
  //Proses menyimpan
  const outputDiv = document.getElementById("outputDiv");
  const inputValue = document.getElementById("showinputhere").innerText;

  // Mendapatkan nilai yang sudah ada di local storage (jika ada)
  storedData = localStorage.getItem("storedStrings");
  console.log(storedData);

  if (storedData) {
    // Jika sudah ada data di local storage, mengonversi data menjadi array
    dataArray = JSON.parse(storedData);
  }

  // Menambahkan nilai baru ke dalam array
  dataArray.push(inputValue);
  console.log(dataArray);
  // Menyimpan data yang sudah diubah ke dalam local storage
  localStorage.setItem("storedStrings", JSON.stringify(dataArray));

  // Menampilkan setiap nilai dalam elemen outputDiv
  outputDiv.innerHTML = "";

  dataArray.forEach((data) => {
    point++;
    const paragraph = document.createElement("p");
    paragraph.id = 'para' + point;
    paragraph.className = 'para';
    paragraph.textContent = data;
    outputDiv.appendChild(paragraph);
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.id = 'edit' + point;
    editButton.className = 'edit fas fa-pen';
    editButton.setAttribute("onclick", "editItem(this)");
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.id = 'trash' + point;
    deleteButton.className = 'trash fas fa-trash';
    deleteButton.setAttribute("onclick", "deleteItem(this)");
    paragraph.appendChild(editButton);
    paragraph.appendChild(deleteButton);
  });
}

function see() {
  const outputDiv = document.getElementById("outputDiv");
  storedData = localStorage.getItem("storedStrings");
  console.log(storedData);
  if (storedData) {
    // Jika sudah ada data di local storage, mengonversi data menjadi array
    dataArray = JSON.parse(storedData);
  }
  console.log(dataArray);
  localStorage.setItem("storedStrings", JSON.stringify(dataArray));
  outputDiv.innerHTML = "";
  point = 0;

  dataArray.forEach((data) => {
    point++;
    const paragraph = document.createElement("p");
    paragraph.id = 'para' + point;
    paragraph.className = 'para';
    paragraph.textContent = data;
    outputDiv.appendChild(paragraph);
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.id = 'edit' + point;
    editButton.className = 'edit fas fa-pen';
    editButton.setAttribute("onclick", "editItem(this)");
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.id = 'trash' + point;
    deleteButton.className = 'trash fas fa-trash';
    deleteButton.setAttribute("onclick", "deleteItem(this)");
    paragraph.appendChild(editButton);
    paragraph.appendChild(deleteButton);
  });
}

function safer() {
        let hasil = document.getElementById("showinputhere");
        let inputText = document.getElementById("inputText").value;
        let textLama = hasil.innerHTML;
        hasil.innerHTML = textLama + " " + inputText;
        the()
          setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
          }, 500);
}

function removeDialog() {
  const dialogoverlay = document.getElementById("dialogoverlay");
  const dialogbox = document.getElementById("dialogbox");
  if (dialogoverlay) dialogoverlay.remove();
  if (dialogbox) dialogbox.remove();
}

export {safer, removeDialog, see};