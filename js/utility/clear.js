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
  }

export {clearText};