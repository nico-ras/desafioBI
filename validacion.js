import {dateInput, holidaysInput} from "./index.js"

function validacion(year, holidaysNum) {
  if (year == null || year == "" || year < 1970 || year > 3000) {
    alert("Debes ingresar un año correcto o desde 1970");
    dateInput.classList.add('error-input-border') 
    return false;
  } else if (holidaysNum > 365 || holidaysNum == null || holidaysNum == "") {
    alert("Debes ingresar un numero de feriados correcto");
    holidaysInput.classList.add('error-input-border') 
    return false;
  }
  return true;
}

export default validacion;
