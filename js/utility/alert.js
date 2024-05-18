function ErrAlert(eCode, objName) {
    let oN = objName;
    let AlertMSG;
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

export {ErrAlert};