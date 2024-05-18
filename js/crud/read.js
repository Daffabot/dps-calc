let shower = document.getElementById("showinputhere");

function ReadWindow() {
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
      document.getElementById("dialogboxfoot").innerHTML = '<button class="pure-material-button-contained active" id="closed" onclick="ok()" type="button">SAVE</button>';
      window.scrollTo(0, 0);
    } else {
      document.getElementById("showinputhere").innerHTML = "Data senjata yang mau di save gak ada bang";
    }
  };
}

export {ReadWindow};