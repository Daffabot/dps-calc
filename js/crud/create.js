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

export {core};