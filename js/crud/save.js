function the() {
  //Proses menyimpan
  const outputDiv = document.getElementById("outputDiv");
  const inputValue = document.getElementById("showinputhere").innerText;

  // Mendapatkan nilai yang sudah ada di local storage (jika ada)
  let storedData = localStorage.getItem("storedStrings");
  console.log(storedData);
  // Mendefinisikan array untuk menyimpan data
  let dataArray = [];

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
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    outputDiv.appendChild(paragraph);
  });
}

function see() {
  const outputDiv = document.getElementById("outputDiv");
  let storedData = localStorage.getItem("storedStrings");
  console.log(storedData);
  let dataArray = [];
  if (storedData) {
    // Jika sudah ada data di local storage, mengonversi data menjadi array
    dataArray = JSON.parse(storedData);
  }
  console.log(dataArray);
  localStorage.setItem("storedStrings", JSON.stringify(dataArray));
  outputDiv.innerHTML = "";

  dataArray.forEach((data) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    outputDiv.appendChild(paragraph);
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