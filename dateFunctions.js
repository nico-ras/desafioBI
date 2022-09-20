"use strict";

//--------------Variables reutilizables--------------
let startDate;
let endDate;

//--------------Días feriado en el año al azar--------------

function randomDate(dateYear, times) {
  startDate = new Date(dateYear, 0, 1);
  endDate = new Date(dateYear, 11, 31);
  let holidays = [];

  if (times <= 365) {
    for (let i = 0; holidays.length < times; i++) {
      let dateResult = new Date(
        startDate.getTime() +
          Math.floor(Math.random() * (endDate.getTime() - startDate.getTime()))
      );
      let dateFormated = dateResult.toISOString().slice(0, 10);

      if (!holidays.includes(dateFormated)) {
        holidays.push(dateFormated);
      }
    }

    return holidays;
  } else {
    console.log(
      "Error: no es posibles crear mas de 365 feriados unicos en el año"
    );
  }
}

//--------------Dias de Trabajo en el año--------------

function workingDays(holydays) {
  let iterationStartDay = new Date(startDate.getFullYear() - 1, 11, 31);
  let weekendHolidays = [];
  let workingDayHolydays = [];
  let yearMonToFriDays = [];
  let weekendYearsDays = [];
  let resultObj = new Object;
  //Sí el día feria cae dia de semana
  holydays.forEach((day, i) => {
    let holydayDate = new Date(day).getDay();
    if (holydayDate != 6 && holydayDate != 0) {
      workingDayHolydays.push(holydayDate);
    } else if (holydayDate == 6 || holydayDate == 0) {
      weekendHolidays.push(holydayDate);
    }
  });

  //Días entre lunes y viernes en todo el año
  for (let i = iterationStartDay; i <= endDate; i.setDate(i.getDate() + 1)) {
    let date = new Date(i);
    if (i.getDay() != 6 && i.getDay() != 0) {
      yearMonToFriDays.push(date);
    } else {
      weekendYearsDays.push(date);
    }
  }
  
  let totalLaborDays = yearMonToFriDays.length - workingDayHolydays.length;

  resultObj['workDaysholidays'] = workingDayHolydays.length;
  resultObj['totalLaborDays'] = totalLaborDays;
  resultObj['weekendDays'] = weekendYearsDays.length;
  resultObj['weekendHolidays'] = weekendHolidays.length; 
  resultObj['yearMonToFriDays'] = yearMonToFriDays.length; 
  
  console.log(`Feriado En Dia Semana = ${workingDayHolydays.length}`);
  console.log(`Dias Laborales = ${totalLaborDays}`);
  console.log('DATOS ADICIONALES: ')
  console.log(`Feriados En Fin De Semana = ${weekendHolidays.length}`);
  console.log(`Dias de fin de semana = ${weekendYearsDays.length}`);
  console.log(`Dias de semana = ${yearMonToFriDays.length}`);


  return resultObj;

}



export {workingDays, randomDate};
