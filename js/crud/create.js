import { ErrAlert } from "../utility/alert.js";

function core() {
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
  dps += " DPS (Damage Per Second)";

  if (dps) {
    document.getElementById("showinputhere").innerHTML = dps;
  }
  if (!magazine) {
    ErrAlert(1, "Magazine Size");
  } else if (magazine < 1) {
    ErrAlert(0, "Magazine Size");
  }
  if (!rps) {
    ErrAlert(1, "Round Per Second");
  } else if (rps < 0) {
    ErrAlert(0, "Round Per Second");
  }
  if (!reload) {
    ErrAlert(1, "Reload Time");
  }
  if (!damagebasic) {
    ErrAlert(1, "Damage Per Bullet");
  }
  if (!multi) {
    ErrAlert(1, "Multiplier Of Base Damage");
  } else if (multi < 1) {
    ErrAlert(0, "Multiplier Of Base Damage");
  }
}

export {core};
