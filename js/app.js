var showHide = function(e) {
  var tabSedes = e.target.dataset.tabSedes;
  //console.log(tabSedes);
  var sedeArequipa = document.getElementById("sede-arequipa");
  var sedeCDMX = document.getElementById("sede-cdmx");
  var sedeLima = document.getElementById("sede-lima");
  var sedeChile = document.getElementById("sede-chile");
  if(tabSedes === "arequipa") {
    sedeCDMX.style.display = "none";
    sedeLima.style.display = "none";
    sedeChile.style.display = "none";
    sedeArequipa.style.display = "block";

  } else if(tabSedes === "cdmx") {
    sedeArequipa.style.display = "none";
    sedeLima.style.display = "none";
    sedeChile.style.display = "none";
    sedeCDMX.style.display = "block";

  } else if(tabSedes === "lima") {
    sedeArequipa.style.display = "none";
    sedeCDMX.style.display = "none";
    sedeChile.style.display = "none";
    sedeLima.style.display = "block";

  } else if(tabSedes === "chile") {
    sedeArequipa.style.display = "none";
    sedeCDMX.style.display = "none";
    sedeLima.style.display = "none";
    sedeChile.style.display = "block";
  }
};

//se declara la función que ejecutará el conteo de los tabs
var loadPage = function() { //nombramos a la función
  sedeCDMX = document.getElementById("sede-cdmx");
  sedeLima = document.getElementById("sede-lima");
  sedeChile = document.getElementById("sede-chile");
  sedeCDMX.style.display = "none";
  sedeLima.style.display = "none";
  sedeChile.style.display = "none";
  var tabsElements = document.getElementsByClassName("tab"); //se crea una variable y en ella guardamos el elemento que se traera del HTML por medio del DOM.
  for (var i = 0; i < tabsElements.length; i++) { //se crea un for, el cual hará el conteo de los tabs concatenándolos uno en uno.
    tabsElements[i].addEventListener("click", showHide); //los tabs en su posición i (índice) tendrán el evento 'click' cada que el usuario dé click en uno de ellos
  } //y al momento de dar click se ejecutará la función chowHide.
}

loadPage();

/*
Pagina principal mostrar:
Alumnas satisfechas
Total de alumnas presentes



*/


var menu = document.getElementById("menu");
var container = document.getElementById("container");


var aqp = data['AQP'];
var cdmx = data['CDMX'];
var lima = data['LIM'];
var chile = data['SCL'];

var studentsAqp16 = data['AQP']['2016-2']['ratings'];
var studentsAqp17 = data['AQP']['2017-1']['ratings'];

var studentsCdmx171 = data['CDMX']['2017-1']['ratings'];
var studentsCdmx172 = data['CDMX']['2017-2']['ratings'];

var studentsLima162 = data['LIM']['2016-2']['ratings'];
var studentsLima171 = data['LIM']['2017-1']['ratings'];
var studentsLima172 = data['LIM']['2017-2']['ratings'];

var studentsChile162 = data['SCL']['2016-2']['ratings'];
var studentsChile171 = data['SCL']['2017-1']['ratings'];
var studentsChile172 = data['SCL']['2017-2']['ratings'];

function satisfedStudentsAqp16() {

  var promotersArray = [];
  var sumaPromoters = null;
  for(var i = 0; i < studentsAqp16.length; i++) {
    var promoters = studentsAqp16[i]['nps']['promoters'];
    // console.log(detractors);
    promotersArray.push(promoters);
  }
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters = sumaPromoters + promotersResult[n];
  }
  var totalP = sumaPromoters/4;
  // console.log(totalP);
  return totalP;
}
satisfedStudentsAqp16();
document.write("<br>El promedio de alumnas satisfechas con la experiencia de Laboratoria en Arequipa 2016-2: "+ satisfedStudentsAqp16() + "%.<br>");


function satisfedStudentsAqp17(){

  var promotersArray = [];
  var sumaPromoters = 0;
  for(var i = 0; i < studentsAqp17.length; i++) {
    var promoters = studentsAqp17[i]['nps']['promoters'];
    // console.log(promoters);
    promotersArray.push(promoters);
  }
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  var totalP = sumaPromoters/4;
  // console.log(totalP);
  // console.log(promotersResult);
    return totalP;

}
satisfedStudentsAqp17();
document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Arequipa 2017-1: "+ satisfedStudentsAqp17() + "%.<br>");


function satisfedStudentsCdmx171(){
  var promotersArray = [];
  var sumaPromoters = 0;
  for(var i = 0; i < studentsCdmx171.length; i++) {
    var promoters = studentsCdmx171[i]['nps']['promoters'];
      // console.log(promoters);
    promotersArray.push(promoters);
  }
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }
  var totalP = sumaPromoters/4;
  // console.log(totalP);
    return totalP;

}
satisfedStudentsCdmx171();
document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en CDMX 2017-1: "+ satisfedStudentsCdmx171() + "%.<br>");

function satisfiedCdmx172() {
  //var accessDataPromoters = data['CDMX']['2017-2']['ratings']
  //console.log(accessDataPromoters);
  var satisfiedArray = [];
  sumSatisfied = null;
  for (var i = 0; i < studentsCdmx172.length; i++) {
    var dataPromoters = studentsCdmx172[i]['nps']['promoters'];
    //console.log(dataPromoters);
    //console.log(accessDataPromoters[i]);
    satisfiedArray.push(dataPromoters);
    //console.log(satisfiedArray);
  }
  var saveSatisfied = satisfiedArray;
  //console.log(saveSatisfied);
  for (var j = 0; j < saveSatisfied.length; j++) {
    sumSatisfied = sumSatisfied + saveSatisfied[j];
    //console.log(sumSatisfied);
    //console.log(saveSatisfied[j]);
  }
  var totalSatisfied = (sumSatisfied/3);
  console.log(totalSatisfied);
  return totalSatisfied;
}

satisfiedCdmx172();
document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en CDMX 2017-2: "+ satisfiedCdmx172() + "%.<br>");

function satisfiedLima16() {
  var accessDataPromoters = data['LIM']['2016-2']['ratings'];
  //console.log(accessDataPromoters);
  var satisfiedArray = [];
  sumSatisfied = null;
  for (var i = 0; i < accessDataPromoters.length; i++) {
    var dataPromoters = accessDataPromoters[i]['nps']['promoters']
    //console.log(accessDataPromoters[i]['nps']['promoters']);
    satisfiedArray.push(dataPromoters);
    //console.log(satisfiedArray);
  }
  var saveSatisfied = satisfiedArray;
  //console.log(saveSatisfied);
  for (var j = 0; j < saveSatisfied.length; j++) {
    sumSatisfied = sumSatisfied + saveSatisfied[j];
    //console.log(sumSatisfied);
    //console.log(saveSatisfied[j]);
  }
  var totalSatisfied = (sumSatisfied/2);
  //console.log(totalSatisfied);
  return totalSatisfied;
}

satisfiedLima16();
document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Lima-2016-2: "+ satisfiedLima16() + "%.<br>");

function satisfiedLima171() {
  var accessDataPromoters = data['LIM']['2017-1']['ratings'];
  //console.log(accessDataPromoters);
  var satisfiedArray = [];
  var sumSatisfied = null;
  for (var i = 0; i < accessDataPromoters.length; i++) {
    var dataPromoters = accessDataPromoters[i]['nps']['promoters']
    //console.log(dataPromoters);
    //console.log(accessDataPromoters[i]);
    satisfiedArray.push(dataPromoters);
    //console.log(satisfiedArray);
  }
  var saveSatisfied = satisfiedArray;
  //console.log(saveSatisfied);
  for (var j = 0; j < saveSatisfied.length; j++) {
    sumSatisfied = sumSatisfied + saveSatisfied[j];
    //console.log(sumSatisfied);
    //console.log(saveSatisfied[j]);
  }
  var totalSatisfied = (sumSatisfied/4);
  //console.log(totalSatisfied);
  return totalSatisfied;

}

satisfiedLima171();
document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Lima-2017-1: "+ satisfiedLima171() + "%.<br>");




function satisfedStudentsChile171(){
  var promotersArray = [];
  var sumaPromoters = 0;
  for(var i = 0; i < studentsChile171.length; i++) {
    var promoters = studentsChile171[i]['nps']['promoters'];
    // console.log(promoters);
    promotersArray.push(promoters);
  }
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }
  var totalP = sumaPromoters/4;
  // console.log(totalP);
  return totalP;

}
satisfedStudentsChile171();
document.write("<br><br>El promedio de alumnas satisfechas con la experiencia de Laboratoria en Santiago de Chile 2017-1: "+ satisfedStudentsChile171() + "%.<br>");

function satisfedStudentsChile172(){
  var promotersArray = [];
  var sumaPromoters = 0;
  for(var i = 0; i < studentsChile172.length; i++) {
    var promoters = studentsChile172[i]['nps']['promoters'];
    // console.log(promoters);
    promotersArray.push(promoters);
  }
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }
  var totalP = sumaPromoters/4;
  // console.log(totalP);
  // console.log(promotersResult);
  return totalP;
}
satisfedStudentsChile172();
document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Santiago de Chile 2017-2: "+ satisfedStudentsChile172() + "%.<br>");


function npsAqp16() {
  //sacamos la suma de promoters y detractors,
  //ambos lo dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = null;
  var sumaDetractors = null;
  for(var i = 0; i < studentsAqp16.length; i++) {
    var detractors = studentsAqp16[i]['nps']['detractors'];
    var promoters = studentsAqp16[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;
}
npsAqp16();

function npsAqp17(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsAqp17.length; i++) {
    var detractors = studentsAqp17[i]['nps']['detractors'];
    var promoters = studentsAqp17[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsAqp17();

function npsCdmx171(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsCdmx171.length; i++) {
    var detractors = studentsCdmx171[i]['nps']['detractors'];
    var promoters = studentsCdmx171[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsCdmx171();

function npsCdmx172(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsCdmx172.length; i++) {
    var detractors = studentsCdmx172[i]['nps']['detractors'];
    var promoters = studentsCdmx172[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsCdmx172();

function npsLima162(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsLima162.length; i++) {
    var detractors = studentsLima162[i]['nps']['detractors'];
    var promoters = studentsLima162[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsLima162();

function npsLima171(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsLima171.length; i++) {
    var detractors = studentsLima171[i]['nps']['detractors'];
    var promoters = studentsLima171[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsLima171();

function npsLima172(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsCdmx172.length; i++) {
    var detractors = studentsCdmx172[i]['nps']['detractors'];
    var promoters = studentsCdmx172[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsLima172();

function npsChile162(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsChile162.length; i++) {
    var detractors = studentsChile162[i]['nps']['detractors'];
    var promoters = studentsChile162[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsChile162();

function npsChile171(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsChile171.length; i++) {
    var detractors = studentsChile171[i]['nps']['detractors'];
    var promoters = studentsChile171[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsChile171();

function npsChile172(){
  //sacamos la suma de promoters y detractors,
  //ambos los dividimos entre 4 y el resultado lo restamos
  var promotersArray = [];
  var detractorsArray = [];
  var sumaPromoters = 0;
  var sumaDetractors = 0;
  for(var i = 0; i < studentsChile172.length; i++) {
    var detractors = studentsChile172[i]['nps']['detractors'];
    var promoters = studentsChile172[i]['nps']['promoters'];
    // console.log(detractors);
    // console.log(promoters);
    detractorsArray.push(detractors);
    promotersArray.push(promoters);
  }
  var detractorsResult = detractorsArray;
  var promotersResult = promotersArray;
  for(var n = 0; n < promotersResult.length; n++){
    sumaPromoters= sumaPromoters + promotersResult[n];
  }

  for (var j = 0; j < detractorsResult.length; j++) {
    sumaDetractors = sumaDetractors + detractorsResult[j];
  //console.log(sumaDetractors);
    //console.log(detractorsResult[j]);
  }
  var totalP = sumaPromoters/4;
  var totalD = sumaDetractors/4;
  // console.log(totalD);
  // console.log(totalP);
  var nps = totalP - totalD;
  // console.log(detractorsResult);
  // console.log(promotersResult);
  //console.log(nps);
  return nps;

}
npsChile172();

document.writeln("<br> El Net Promoter Score promedio de Arequipa 2016-2 es " + npsAqp16() + "%.")
document.writeln("<br> El Net Promoter Score promedio de Arequipa 2017-1 es " + npsAqp17() + "%.")
document.writeln("<br> El Net Promoter Score promedio de CDMX 2017-1 es " + npsCdmx171() + "%.")
document.writeln("<br> El Net Promoter Score promedio de CDMX 2017-2 es " + npsCdmx172() + "%.")
document.writeln("<br> El Net Promoter Score promedio de Lima 2016-2 es " + npsLima162() + "%.")
document.writeln("<br> El Net Promoter Score promedio de Lima 2017-1 es " + npsLima171() + "%.")
document.writeln("<br> El Net Promoter Score promedio de Lima 2017-2 es " + npsLima172() + "%.")
document.writeln("<br> El Net Promoter Score promedio de Chile 2016-2 es " + npsChile162() + "%.")
document.writeln("<br> El Net Promoter Score promedio de Chile 2017-1 es " + npsChile171() + "%.")
document.writeln("<br> El Net Promoter Score promedio de Chile 2017-2 es " + npsChile172() + "%.<br>")



function totalStudentsGen162Aqp() {
  var gen = aqp["2016-2"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen162Aqp();
document.write("<br>En la generación 2016-2 de Arequipa hay: "+ totalStudentsGen162Aqp() + " estudiantes.<br>");


function totalStudentsGen171Aqp() {
  var gen = aqp["2017-1"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen171Aqp();
document.write("En la generación 2017-1 de Arequipa hay: "+ totalStudentsGen171Aqp() + " estudiantes.<br><br>");

function totalStudentsGen171Cdmx() {
  var gen = cdmx["2017-1"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen171Cdmx();
document.write("En la generación 2017-1 de CDMX hay: "+ totalStudentsGen171Cdmx() + " estudiantes.<br>");


function totalStudentsGen172Cdmx() {
  var gen = cdmx["2017-2"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen172Cdmx();
document.write("En la generación 2017-2 de CDMX hay: "+ totalStudentsGen172Cdmx() + " estudiantes.<br><br>");


function totalStudentsGen162Lima() {
  var gen = lima["2016-2"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen162Lima();
document.write("En la generación 2016-2 de Lima hay: "+ totalStudentsGen162Lima() + " estudiantes.<br>");


function totalStudentsGen171Lima() {
  var gen = lima["2017-1"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen171Lima();
document.write("En la generación 2017-1 de Lima hay: "+ totalStudentsGen171Lima() + " estudiantes.<br>");


function totalStudentsGen172Lima() {
  var gen = lima["2017-2"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen172Lima();
document.write("En la generación 2017-2 de Lima hay: "+ totalStudentsGen172Lima() + " estudiantes.<br><br>");


function totalStudentsGen162Chile() {
  var gen = chile["2016-2"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen162Chile();
document.write("En la generación 2016-2 de Santiago de Chile hay: "+ totalStudentsGen162Chile() + " estudiantes.<br>");


function totalStudentsGen171Chile() {
  var gen = chile["2017-1"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen171Chile();
document.write("En la generación 2017-1 de Santiago de Chile hay: "+ totalStudentsGen171Chile() + " estudiantes.<br>");

function totalStudentsGen172Chile() {
  var gen = chile["2017-2"];
   //console.log(gen);
   for(var i in gen) {
     var result = gen[i];
      //console.log(result);
     var lengthTwo = result.length;
     //console.log(length);
     if(lengthTwo <= 4) {
       delete result;
     } else {
       //console.log(result);
       var lengthGen = result.length;
       // console.log(lengthGen);
     }
   }
   return lengthGen;
}
totalStudentsGen172Chile();
document.write("En la generación 2017-2 de Santiago de Chile hay: "+ totalStudentsGen172Chile() + " estudiantes.<br>");


function totalStudentsSedeAqp(){
  var suma = 0
  var counterStudents = [];
  for(var i in aqp){
     var result = aqp[i];
     var students = result['students'];
     var numero = students.length;
     counterStudents.push(numero);
   }
   var results = counterStudents;
   for (var n = 0; n < results.length; n++) {
     suma = suma + results[n];
   }
   // console.log(suma);
   return suma;
 }
totalStudentsSedeAqp();

function totalStudentsSedeCdmx(){
  var suma = 0;
  var counterStudents = [];
  for(var i in cdmx){
     var result = cdmx[i];
     var students = result['students'];
     var numero = students.length;
     counterStudents.push(numero);
   }
   var results = counterStudents;
   for (var n = 0; n < results.length; n++) {
     suma = suma + results[n];
   }
   // console.log(suma);
   return suma;
 }
totalStudentsSedeCdmx();

function totalStudentsSedeLima(){
  var suma = 0;
  var counterStudents = [];
  for(var i in lima){
     var result = lima[i];
     var students = result['students'];
     var numero = students.length;
     counterStudents.push(numero);
   }
   var results = counterStudents;
   for (var n = 0; n < results.length; n++) {
     suma = suma + results[n];
   }
   // console.log(suma);
   return suma;
 }
totalStudentsSedeLima();

function totalStudentsSedeChile(){
  var suma = 0;
  var counterStudents = [];
  for(var i in chile){
     var result = chile[i];
     var students = result['students'];
     var numero = students.length;
     counterStudents.push(numero);
   }
   var results = counterStudents;
   for (var n = 0; n < results.length; n++) {
     suma = suma + results[n];
   }
   // console.log(suma);
   return suma;
 }
totalStudentsSedeChile();

document.writeln("<br> Total de estudiantes sede Arequipa: "+ totalStudentsSedeAqp());
document.writeln("<br> Total de estudiantes sede CDMX: "+ totalStudentsSedeCdmx());
document.writeln("<br> Total de estudiantes sede Lima: "+ totalStudentsSedeLima());
document.writeln("<br> Total de estudiantes sede Santiago de chile: "+ totalStudentsSedeChile());


var aqpQuantityStudents20162 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsAqp16.length; i++) {
    var result = studentsAqp16[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (15*suma)/100;
    // console.log(cantidadEstudientes);
    // console.log(suma);
    return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
//primer sprint aqp hse y tech: 2016-2: 15*6/100 = supera 0.9 + cumple 12 + no cumple 2.1
aqpQuantityStudents20162();


var aqpQuantityStudents20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsAqp17.length; i++) {
    var result = studentsAqp17[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (15*suma)/100;
    // console.log(cantidadEstudientes);
    // console.log(suma);
    return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
//primer sprint aqp hse y tech: 2016-2: 15*6/100 = supera 0.9 + cumple 12 + no cumple 2.1
aqpQuantityStudents20171();

var cdmxQuantityStudents20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsCdmx171.length; i++) {

    var result = studentsCdmx171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (24*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
cdmxQuantityStudents20171();

var cdmxQuantityStudents20172 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsCdmx172.length; i++) {

    var result = studentsCdmx171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (46*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
cdmxQuantityStudents20172();

var limaQuantityStudents20162 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsLima162.length; i++) {

    var result = studentsLima162[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (35*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
limaQuantityStudents20162();


var limaQuantityStudents20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsLima171.length; i++) {

    var result = studentsLima171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (17*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
limaQuantityStudents20171();


var limaQuantityStudents20172 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsLima172.length; i++) {

    var result = studentsLima172[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (14*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
limaQuantityStudents20172();


var chileQuantityStudents20162 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsChile162.length; i++) {

    var result = studentsChile162[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (11*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
chileQuantityStudents20162();


var chileQuantityStudents20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsChile171.length; i++) {

    var result = studentsChile171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (23*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
chileQuantityStudents20171();


var chileQuantityStudents20172 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsChile172.length; i++) {

    var result = studentsChile172[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (61*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return cantidadEstudientes;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
chileQuantityStudents20172();

document.write("<br><br>En la Generación 2016-2 Arequipa: " + aqpQuantityStudents20162() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2017-1 Arequipa: " + aqpQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2017-1 CDMX: " + cdmxQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2017-2 CDMX: " + cdmxQuantityStudents20172() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2016-2 Lima: " + limaQuantityStudents20162() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2017-1 Lima: " + limaQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2017-2 Lima: " + limaQuantityStudents20172() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2016-2 de Santiago de Chile: " + chileQuantityStudents20162() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2017-1 de Santiago de Chile: " + chileQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
document.write("En la Generación 2017-2 de Santiago de Chile: " + chileQuantityStudents20172() + " estudiantes superan la meta de pts. tech y HSE.<br>");


var aqpPercentage20162 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsAqp16.length; i++) {
    var result = studentsAqp16[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (15*suma)/100;
    // console.log(cantidadEstudientes);
    // console.log(suma);
    return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
//primer sprint aqp hse y tech: 2016-2: 15*6/100 = supera 0.9 + cumple 12 + no cumple 2.1
aqpPercentage20162();

var aqpPercentage20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsAqp17.length; i++) {
    var result = studentsAqp17[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (15*suma)/100;
    // console.log(cantidadEstudientes);
    // console.log(suma);
    return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
//primer sprint aqp hse y tech: 2016-2: 15*6/100 = supera 0.9 + cumple 12 + no cumple 2.1
aqpPercentage20171();

//console.log(data['CDMX']['2017-1']['students']);
var cdmxPercentage20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsCdmx171.length; i++) {

    var result = studentsCdmx171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (24*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
cdmxPercentage20171();

//console.log(data['CDMX']['2017-2']['students']);
var cdmxPercentage20172 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsCdmx172.length; i++) {

    var result = studentsCdmx171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (46*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
cdmxPercentage20172();

// console.log(data['LIM']['2016-2']['students']);
var limaPercentage20162 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsLima162.length; i++) {

    var result = studentsLima162[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (35*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
limaPercentage20162();

//console.log(data['LIM']['2017-1']['students']);
var limaPercentage20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsLima171.length; i++) {

    var result = studentsLima171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (17*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
limaPercentage20171();

//console.log(data['LIM']['2017-2']['students']);
var limaPercentage20172 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsLima172.length; i++) {

    var result = studentsLima172[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (14*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
limaPercentage20172();

//console.log(data['SCL']['2016-2']['students']);
var chilePercentage20162 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsChile162.length; i++) {

    var result = studentsChile162[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (11*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
chilePercentage20162();

//console.log(data['SCL']['2017-1']['students']);
var chilePercentage20171 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsChile171.length; i++) {

    var result = studentsChile171[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (23*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
chilePercentage20171();

//console.log(data['SCL']['2017-2']['students']);
var chilePercentage20172 = function() {
  var contador = [];
  var suma = 0;
  for(var i = 0; i < studentsChile172.length; i++) {

    var result = studentsChile172[i]['student']['supera'];
        contador.push(result);
  }
   var results = contador;
  //console.log(results);
   for (var n = 0; n < results.length; n++) {
    //console.log(results[n]);
    suma = suma + results[n];
    //var porcentajeTotal = suma;
   }
    var cantidadEstudientes = (61*suma)/100;
    //  console.log(cantidadEstudientes);
    // console.log(suma);
     return suma;
  //Esta función nos da el porcentaje total des estudiantes que superan
  //la meta de puntos tech y HSE por generación.
};
chilePercentage20172();


document.write("<br><br> Generación 2016-2 Arequipa: " + aqpPercentage20162() + "% supero la meta de puntos Tech y HSE.");
document.write("<br> Generación del 2017-1 Arequipa: " + aqpPercentage20171() + "% supero la meta de puntos Tech y HSE.");
document.write("<br> Generación del 2017-1 CDMX: " + cdmxPercentage20171() + "% supero la meta de puntos Tech y HSE.");
document.write(" <br> Generación del 2017-2 CDMX: " + cdmxPercentage20172() + "% supero la meta de puntos Tech y HSE.");
document.writeln("<br> Generación del 2016-2 Lima: " + limaPercentage20162() + "% supero la meta de puntos Tech y HSE.");
document.writeln("<br> Generación del 2017-1 Lima: " + limaPercentage20171() + "% supero la meta de puntos Tech y HSE.");
document.writeln("<br> Generación del 2017-2 Lima: " + limaPercentage20172() + "% supero la meta de puntos Tech y HSE.");
document.writeln("<br> Generación del 2016-2 Santiago de Chile: " + chilePercentage20162() + "% supero la meta de puntos Tech y HSE.");
document.writeln("<br> Generación del 2017-1 Santiago de Chile: " + chilePercentage20171() + "% supero la meta de puntos Tech y HSE.");
document.writeln("<br> Generación del 2017-2 Santiago de Chile: " + chilePercentage20172() + "% supero la meta de puntos Tech y HSE.");


var averageTeachersAqp16 = function() {
  var accountTeachers = [];
  var sumTeachers = null;
  for (var i = 0; i < studentsAqp16.length; i++) {
    var accessDataTeachers = studentsAqp16[i]['teacher'];
    //console.log(accessDataTeachers);
    accountTeachers.push(accessDataTeachers);
  }
    var resultTeacher = accountTeachers;
    //console.log(resultTeacher);
    for (var j = 0; j < resultTeacher.length; j++) {
      sumTeachers = sumTeachers + resultTeacher[j];
      //console.log(sumTeachers);
    }
    var averageTeachers = (sumTeachers/4);
    //console.log(averageTeachers);
    return averageTeachers;
};
averageTeachersAqp16();
document.write("<br><br>Generacion 2016-2 Arequipa, el promedio de los profesores fue de " + averageTeachersAqp16());

function averageTeachersAqp17() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsAqp17.length; i++) {
    var accessDataTeachers17 = studentsAqp17[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/3);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersAqp17();
document.write("<br>Generacion 2017-1 Arequipa, el promedio de los profesores fue de " + averageTeachersAqp17());

function averageTeachersCdmx171() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsCdmx171.length; i++) {
    var accessDataTeachers17 = studentsCdmx171[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/3);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersCdmx171();
document.write("<br>Generacion 2017-1 CDMX, el promedio de los profesores fue de " + averageTeachersCdmx171());

function averageTeachersCdmx172() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsCdmx172.length; i++) {
    var accessDataTeachers17 = studentsCdmx172[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/3);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersCdmx172();
document.write("<br>Generacion 2017-2 CDMX, el promedio de los profesores fue de " + averageTeachersCdmx171());

function averageTeachersLima162() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsLima162.length; i++) {
    var accessDataTeachers17 = studentsLima162[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/2);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersLima162();
document.write("<br>Generacion 2016-2 Lima, el promedio de los profesores fue de " + averageTeachersLima162());

function averageTeachersLima171() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsLima171.length; i++) {
    var accessDataTeachers17 = studentsLima171[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/4);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersLima171();
document.write("<br>Generacion 2017-1 Lima, el promedio de los profesores fue de " + averageTeachersLima171());

function averageTeachersLima172() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsLima172.length; i++) {
    var accessDataTeachers17 = studentsLima172[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/2);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersLima172();
document.write("<br>Generacion 2017-2 Lima, el promedio de los profesores fue de " + averageTeachersLima172());

function averageTeachersChile162() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsChile162.length; i++) {
    var accessDataTeachers17 = studentsChile162[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/4);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersChile162();
document.write("<br>Generacion 2016-2 Santiago de Chile, el promedio de los profesores fue de " + averageTeachersChile162());

function averageTeachersChile171() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsChile171.length; i++) {
    var accessDataTeachers17 = studentsChile171[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/3);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersChile171();
document.write("<br>Generacion 2017-1 Santiago de Chile, el promedio de los profesores fue de " + averageTeachersChile171());

function averageTeachersChile172() {
  var addTeachers17 = [];
  var sumTeachers17 = null;
  for (var i = 0; i < studentsChile172.length; i++) {
    var accessDataTeachers17 = studentsChile172[i]['teacher'];
    addTeachers17.push(accessDataTeachers17);
  }
  var resultTeacher17 = addTeachers17;
  for (var j = 0; j < resultTeacher17.length; j++) {
    sumTeachers17 = sumTeachers17 + resultTeacher17[j];
  }
  var averageTeachers17 = (sumTeachers17/2);
  //console.log(averageTeachers17);
  return averageTeachers17;
};
averageTeachersChile172();
document.write("<br>Generacion 2017-2 Santiago de Chile, el promedio de los profesores fue de " + averageTeachersChile172());


//Esta funcion nos saca el porcentaje de deserción de las estudiantes
var studentsDesertionAqp1 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['AQP']['2016-2']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
  var accessDataDesertion = accessDataStudents[i]['active'];
  //console.log(accessDataDesertion);
  accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
  //console.log(dataDesertion);
  for (var n = 0; n < dataDesertion.length; n++) {
   if(dataDesertion[n] === false) {
     //console.log("siiii");
     //console.log(dataDesertion[n]);
    var containerDesertion = dataDesertion[n];
    //console.log(hola);
    arrayDesertion.push(containerDesertion);
   }
  }
  var saveArrayDesertion = arrayDesertion;
  //console.log(yoSuperPuedo);
  var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
  console.log(totalPercentageDesertion);
  return totalPercentageDesertion;
};
studentsDesertionAqp1();

var studentsDesertionAqp2 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['AQP']['2017-1']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
 if(dataDesertion[n] === false) {
    var containerDesertion = dataDesertion[n];
      arrayDesertion.push(containerDesertion);
    }
}
      var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
        var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
          console.log(totalPercentageDesertion);
              return totalPercentageDesertion;
};

studentsDesertionAqp2();

var studentsDesertionCdmx1 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['CDMX']['2017-1']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
 if(dataDesertion[n] === false) {
    var containerDesertion = dataDesertion[n];
      arrayDesertion.push(containerDesertion);
    }
}
      var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
        var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
          console.log(totalPercentageDesertion);
              return totalPercentageDesertion;
};

studentsDesertionCdmx1();

var studentsDesertionCdmx2 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['CDMX']['2017-2']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
if(dataDesertion[n] === false) {
  var containerDesertion = dataDesertion[n];
    arrayDesertion.push(containerDesertion);
  }
}
    var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
      var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
        console.log(totalPercentageDesertion);
            return totalPercentageDesertion;
};

studentsDesertionCdmx2();

var studentsDesertionLim1 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['LIM']['2016-2']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
if(dataDesertion[n] === false) {
  var containerDesertion = dataDesertion[n];
    arrayDesertion.push(containerDesertion);
  }
}
    var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
      var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
        console.log(totalPercentageDesertion);
            return totalPercentageDesertion;
};

studentsDesertionLim1();

var studentsDesertionLim2 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['LIM']['2017-1']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
if(dataDesertion[n] === false) {
  var containerDesertion = dataDesertion[n];
    arrayDesertion.push(containerDesertion);
  }
}
    var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
      var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
        console.log(totalPercentageDesertion);
            return totalPercentageDesertion;
};

studentsDesertionLim2();

var studentsDesertionLim3 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['LIM']['2017-2']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
if(dataDesertion[n] === false) {
  var containerDesertion = dataDesertion[n];
    arrayDesertion.push(containerDesertion);
  }
}
    var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
      var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
        console.log(totalPercentageDesertion);
            return totalPercentageDesertion;
};

studentsDesertionLim3();

var studentsDesertionSCL1 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['SCL']['2016-2']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
if(dataDesertion[n] === false) {
  var containerDesertion = dataDesertion[n];
    arrayDesertion.push(containerDesertion);
  }
}
    var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
      var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
        console.log(totalPercentageDesertion);
            return totalPercentageDesertion;
};

studentsDesertionSCL1();

var studentsDesertionSCL2 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['SCL']['2017-1']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
if(dataDesertion[n] === false) {
  var containerDesertion = dataDesertion[n];
    arrayDesertion.push(containerDesertion);
  }
}
    var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
      var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
        console.log(totalPercentageDesertion);
            return totalPercentageDesertion;
};

studentsDesertionSCL2();

var studentsDesertionSCL3 = function() {
var accountActive = [];
var arrayDesertion = [];
var accessDataStudents = data['SCL']['2017-2']['students'];
for (var i = 0; i < accessDataStudents.length; i++) {
var accessDataDesertion = accessDataStudents[i]['active'];
//console.log(accessDataDesertion);
accountActive.push(accessDataDesertion);
} var dataDesertion = accountActive;
//console.log(dataDesertion);
for (var n = 0; n < dataDesertion.length; n++) {
if(dataDesertion[n] === false) {
  var containerDesertion = dataDesertion[n];
    arrayDesertion.push(containerDesertion);
  }
}
    var saveArrayDesertion = arrayDesertion;
//console.log(yoSuperPuedo);
      var totalPercentageDesertion = (saveArrayDesertion.length*15)/100;
        console.log(totalPercentageDesertion);
            return totalPercentageDesertion;
};

studentsDesertionSCL3();

var DesertionAqp1 = ['2016-2', studentsDesertionAqp1()];
var DesertionAqp2 = ['2017-1', studentsDesertionAqp2()];
var DesertionCdmx1 = ['2017-1', studentsDesertionCdmx1()];
var DesertionCdmx2 = ['2017-2', studentsDesertionCdmx2()];
var DesertionLim1 = ['2016-2', studentsDesertionLim1()];
var DesertionLim2 = ['2017-1', studentsDesertionLim2()];
var DesertionLim3 = ['2017-2', studentsDesertionLim3()];
var DesertionChile1 = ['2016-2', studentsDesertionSCL1()];
var DesertionChile2 = ['2017-1', studentsDesertionSCL2()];
var DesertionChile3 = ['2017-2', studentsDesertionSCL3()];

// document.write("<br> <br> Generación 2016-2 Arequipa: " + studentsDesertionAqp1() + "% de deserción.");
// document.write("<br> Generación 2017-1 Arequipa: " + studentsDesertionAqp2() + "% de deserción.");
// document.write("<br> Generación 2017-1 CDMX: " + studentsDesertionCdmx1() + "% de deserción.");
// document.write("<br> Generación 2017-2 CDMX: " + studentsDesertionCdmx2() + "% de deserción.");
// document.write("<br> Generación 2016-2 LIMA: " + studentsDesertionLim1() + "% de deserción.");
// document.write("<br> Generación 2017-1 LIMA: " + studentsDesertionLim2() + "% de deserción.");
// document.write("<br> Generación 2017-2 LIMA: " + studentsDesertionLim3() + "% de deserción.");
// document.write("<br> Generación 2016-2 CHILE: " + studentsDesertionSCL1() + "% de deserción.");
// document.write("<br> Generación 2017-1 CHILE: " + studentsDesertionSCL2() + "% de deserción.");
// document.write("<br> Generación 2017-2 CHILE: " + studentsDesertionSCL3() + "% de deserción.");


function jedisAqp16() {
  var accessDataJedis16 = data['AQP']['2016-2']['ratings'];
  //console.log(accessDataJedis16);
  var addDataJedi = [];
  var sumJedi16 = null;
  for (var i = 0; i < accessDataJedis16.length; i++) {
    var dataJedi = accessDataJedis16[i]['jedi'];
    //console.log(dataJedi);
    //console.log(accessDataJedis16[i]['jedi']);
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
   }

   var saveDataJedi = addDataJedi;
   //console.log(saveDataJedi);
   for (var j = 0; j < saveDataJedi.length; j++) {
     sumJedi16 = sumJedi16 + saveDataJedi[j];
     //console.log(sumJedi16);
   }

   var averageJediAqp16 = (sumJedi16/4);
   //console.log(averageJediAqp16);
   return averageJediAqp16;
}

jedisAqp16();

function jedisAqp17() {
  var accessDataJedis17 = data['AQP']['2017-1']['ratings'];
  //console.log(accessDataJedis17);
  var addDataJediAqp17 = [];
  var sumJediAqp17 = null;
  for (var i = 0; i < accessDataJedis17.length; i++) {
    var dataJedi17 = accessDataJedis17[i]['jedi'];
    //console.log(accessDataJedis17[i]);
    //console.log(dataJedi17);
    addDataJediAqp17.push(dataJedi17);
    //console.log(addDataJediAqp17);
  }

  var saveDataJediAqp17 = addDataJediAqp17;
  //console.log(saveDataJediAqp17);
  for (var j = 0; j < saveDataJediAqp17.length; j++) {
    //console.log(saveDataJediAqp17[j]);
    sumJediAqp17 = sumJediAqp17 + saveDataJediAqp17[j];
    //console.log(sumJediAqp17);
  }

  var averageJediAqp17 = (sumJediAqp17/3);
  console.log(averageJediAqp17);
  return averageJediAqp17;
}
jedisAqp17();


//Graficas
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);
      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Move', 'Percentage'],
          DesertionAqp1,
          DesertionAqp2
        ]);
        var options = {
          //width: 600,
          legend: { position: 'none' },
          chart: {
            title: 'Arequipa',
            subtitle: 'Porcentaje de Desercion' },
          axes: {
            x: {
              0: { side: 'top', label: ''} // Top x-axis.
            }
          },
          bar: { groupWidth: "60%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };//Grafica Arequipa Desercion

      google.charts.load('current', {'packages':['bar']});
            google.charts.setOnLoadCallback(drawStuff1);
            function drawStuff1() {
              var data = new google.visualization.arrayToDataTable([
                ['Move', 'Percentage'],
                DesertionCdmx1,
               DesertionCdmx2
              ]);
              var options = {
                //width: 600,
                legend: { position: 'none' },
                chart: {
                  title: 'CDMX',
                  subtitle: 'Porcentaje de Desercion' },
                axes: {
                  x: {
                    0: { side: 'top', label: ''} // Top x-axis.
                  }
                },
                bar: { groupWidth: "60%" }
              };

              var chart = new google.charts.Bar(document.getElementById('top_i_div'));
              // Convert the Classic options to Material options.
              chart.draw(data, google.charts.Bar.convertOptions(options));
            };//Grafica CDMX deserción


            google.charts.load('current', {'packages':['bar']});
                  google.charts.setOnLoadCallback(drawStuff2);
                  function drawStuff2() {
                    var data = new google.visualization.arrayToDataTable([
                      ['Move', 'Percentage'],
                      DesertionLim1,
                      DesertionLim2,
                      DesertionLim3
                    ]);
                    var options = {
                      //width: 600,
                      legend: { position: 'none' },
                      chart: {
                        title: 'Lima',
                        subtitle: 'Porcentaje de Desercion' },
                      axes: {
                        x: {
                          0: { side: 'top', label: ''} // Top x-axis.
                        }
                      },
                      bar: { groupWidth: "60%" }
                    };

                    var chart = new google.charts.Bar(document.getElementById('top_f_div'));
                    // Convert the Classic options to Material options.
                    chart.draw(data, google.charts.Bar.convertOptions(options));
                  };

                  google.charts.load('current', {'packages':['bar']});
                        google.charts.setOnLoadCallback(drawStuff3);
                        function drawStuff3() {
                          var data = new google.visualization.arrayToDataTable([
                            ['Move', 'Percentage'],
                            DesertionChile1,
                            DesertionChile2,
                            DesertionChile3
                          ]);
                          var options = {
                            //width: 600,
                            legend: { position: 'none' },
                            chart: {
                              title: 'Santiago de Chile',
                              subtitle: 'Porcentaje de Desercion' },
                            axes: {
                              x: {
                                0: { side: 'top', label: ''} // Top x-axis.
                              }
                            },
                            bar: { groupWidth: "60%" }
                          };

                          var chart = new google.charts.Bar(document.getElementById('top_g_div'));
                          // Convert the Classic options to Material options.
                          chart.draw(data, google.charts.Bar.convertOptions(options));
                        };
