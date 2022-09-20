import { workingDays, randomDate } from "./dateFunctions.js";
import validacion from "./validacion.js"

let resultdiv = document.getElementById("resultDiv");
let submitBtn = document.getElementById("button");
let dateInput = document.getElementById("date");
let holidaysInput = document.getElementById("holidays");

submitBtn.addEventListener("click", (e) => {
  let year = dateInput.value;
  let holidaysNum = holidaysInput.value;

  if (validacion(year, holidaysNum)) {
    let result = workingDays(randomDate(year, holidaysNum));

    let resultContent = "";
  
    resultContent = `<h3>Resultados</h3>
    <p>Feriados en dia de semana: ${result.workDaysholidays}</p>
    <p>Dias laborales: ${result.totalLaborDays}</p>
    <hr>
    <h4> Datos ingresados </h4>
    <p>Año: ${year}</p>
    <p>Cantidad de feriados: ${holidaysNum}</p>
    <hr>
    <h4> Datos adicionales </h4>
    <p>Feriados en fin de semana: ${result.weekendHolidays}</p>
    <p>Total de dias de fin de semana: ${result.weekendDays}</p>
    <p>Total de dias de semana: ${result.yearMonToFriDays}
    `;
  
    resultdiv.innerHTML = resultContent;
  } else {
    alert('Error en los campos')
  }

 dateInput.value = "";
 holidaysInput.value = ""; 


});

dateInput.addEventListener('click', (e) => {
  dateInput.classList.remove('error-input-border')  
})

holidaysInput.addEventListener('click', (e) => {
  holidaysInput.classList.remove('error-input-border')  
})

export {dateInput, holidaysInput}
