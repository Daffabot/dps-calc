// DPS Calculator - JavaScript edition By Daffabot!
//============================================================================
// v0.01 - initial start of project totally works
// v0.02 - add a save local storage
// v0.03 - fix local storage to ensure all data is saved and not erased on refresh
//============================================================================
//Visit Daffabot (https://github.com/Daffabot) for script in github
//Credit must stay intact for use

function ErrAlert(eCode, objName) {
  let oN = objName;
  switch (eCode) {
    case 0:
      AlertMSG = "[Error 0] - Cannot compute, " + oN + " is less than one";
      document.getElementById("showinputhere").innerHTML = AlertMSG;
      break;
    case 1:
      AlertMSG = "[Error 1] - " + oN + " does not contain valid numbers";
      document.getElementById("showinputhere").innerHTML = AlertMSG;
      break;
  }
}
function clearText() {
  //clears out old values on form.
  document.getElementById("damagebasic").value = "";
  document.getElementById("magazine").value = "";
  document.getElementById("reload").value = "";
  document.getElementById("rps").value = "";
  document.getElementById("projectiles").value = "1";
  //optional
  document.getElementById("chan").value = "";
  document.getElementById("multi").value = "1";
  document.getElementById("effvalue").value = "";
  document.getElementById("period").value = "1";
  document.getElementById("eleper").value = "";
  document.getElementById("elevalue").value = "";
  //calc
  document.getElementById("showinputhere").innerHTML = "";
  const myDiv = document.getElementById("outputDiv");
  const paragraphs = myDiv.getElementsByTagName("p");

  // Menghapus semua elemen <p> di dalam <div>
  while (paragraphs.length > 0) {
    myDiv.removeChild(paragraphs[0]);
  }
  localStorage.removeItem("storedStrings");
  localStorage.clear();
}
function openGitHub() {
  window.open("https://github.com/Daffabot");
}
function openDonate() {
  window.open("https://paypal.me/daffabot");
}
let count = 0;
function displayMessage() {
  let magazine = document.getElementById("magazine").value;
  let rps = document.getElementById("rps").value;
  let reload = document.getElementById("reload").value;
  let damagebasic = document.getElementById("damagebasic").value;
  let projectiles = document.getElementById("projectiles").value;
  let chan = document.getElementById("chan").value;
  let multi = document.getElementById("multi").value;
  let effvalue = document.getElementById("effvalue").value;
  let period = document.getElementById("period").value;
  let eleper = document.getElementById("eleper").value;
  let elevalue = document.getElementById("elevalue").value;
  let crit = Number(magazine) * (Number(chan) / Number(100)) * (Number(damagebasic) * Number(multi) - Number(damagebasic));
  let effect = Number(effvalue) / Number(period);
  let element = Number(elevalue) * (Number(magazine) * (Number(eleper) / Number(100)));
  let total = ((Number(magazine) * Number(damagebasic) + Number(crit) + Number(element)) / (Number(magazine) / Number(rps) + Number(reload))) * Number(projectiles);
  let dps = Number(total) + Number(effect);
  count++;
  dps += " DPS (Damage Per Second) senjata ke " + count;
  setTimeout(() => {
    storage();
  }, 500);

  function storage() {
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

  if (dps) {
    document.getElementById("showinputhere").innerHTML = dps;
  }
  if (isNaN(magazine)) {
    ErrAlert(1, "Magazine Size");
  }
  if (isNaN(rps)) {
    ErrAlert(1, "Round Per Second");
  }
  if (isNaN(reload)) {
    ErrAlert(1, "Reload Time");
  }
  if (isNaN(damagebasic)) {
    ErrAlert(1, "Damage Per Bullet");
  }
  if (isNaN(multi)) {
    ErrAlert(1, "Multiplier Of Base Damage");
  }
  //if base values are less than 1 than we cannot compute.
  if (magazine < 1) {
    ErrAlert(0, "Magazine Size");
  }
  if (rps < 1) {
    ErrAlert(0, "Round Per Second");
  }
  if (damagebasic < 1) {
    ErrAlert(0, "Damage Per Bullet");
  }
  if (reload < 1) {
    ErrAlert(0, "Reload Time");
  }
  if (multi < 1) {
    ErrAlert(0, "Multiplier Of Base Damage");
  }
}
