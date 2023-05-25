# DPS Calculator Javascript
App Damage Per Second Calculator Javascript created and developed by Daffa Ahmad Ibrahim

![displayDPS](https://www.daffabot.my.id/dps-calc/img/displaydps.png)

## Demo
You can <a href="https://www.daffabot.my.id/dps-calc">Click here</a> for demo.

## How to install
1. Clone repository
```bash
git clone https://github.com/Daffabot/dps-calc.git
```
2. Open dps-calc/index.html file in your browser

## Example Usage
```javascript
function count(){
    //Variable declaration
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
    //Counting process
    let crit = (Number(magazine) * (Number(chan) / Number(100))) * ((Number(damagebasic) * Number(multi)) - Number(damagebasic));
    let effect = Number(effvalue) / Number(period);
    let element = Number(elevalue) * (Number(magazine) * (Number(eleper) / Number(100)));
    let total = (((Number(magazine) * Number(damagebasic)) + Number(crit) + Number(element)) / ((Number(magazine) / Number(rps)) + Number(reload))) * Number(projectiles);
    let dps = Number(total) + Number(effect);
    if (dps){
        //Use code to output results
    }
    }
```

## Collaborators
Feel free to contribute! You can collaborate with us.
