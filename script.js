let str = "";
let from;
let to;
let button = document.getElementsByClassName("button")[0];
button.onclick = () => {
    from = document.querySelector('.from')
    to = document.querySelector('.to')
    let val = document.querySelector('#val')
    console.log(from.value)
    console.log(to.value)
    console.log(val.value)
    let temp = '';
    
    switch(from.value){
        case '°C':
            console.log("Celsius to")
            temp = fromCelsius(val.value, to.value);
            break;
        case '°F':
            console.log("tttttttttttt")
            temp = fromFahrenheit(val.value, to.value);
            break;
        case 'K':
            console.log("tttttttttttt")
            temp = fromKelvin(val.value, to.value);
            break;
    }
    temp = Math.round(temp*100) / 100;
    let res = document.querySelector('.result')
    res.innerHTML = temp+to.value;
    console.log(temp);
}

function fromCelsius(val, unit){
    let temp = '';
    switch (unit) {
        case '°C':
          console.log("to celcius")
          temp = eval(val);
          break;
        case '°F':
          temp = (eval(val) * (9 / 5)) + 32;
          break;
        case 'K':
          console.log("to kelvin")
          temp = eval(val) + (273.15);
          break;
    }
    // console.log(temp, "ttttttttttttt");
    return temp;
}

function fromFahrenheit(val, unit){
    let temp = '';
    switch (unit) {
        case '°F':
          temp = val;
          break;
        case '°C':
          temp = (eval(val) - 32) * (5 / 9);
          break;
        case 'K':
          temp = (eval(val) + 459.67) * (5 / 9);
          break;
    }
      return temp;
}

function fromKelvin(val, unit){
    let temp = '';
    switch (unit) {
        case 'K':
          temp = val;
          break;
        case '°F':
          temp = (eval(val) - 273.15) * (9 / 5) + 32;
          break;
        case '°C':
          temp = eval(val) - 273.15;
          break;
      }
      return temp;
}