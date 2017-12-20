var menu = document.getElementById("menu");
var container = document.getElementById("container");
var containerSedes = document.getElementById("container-sedes");

var sedeArequipa = document.getElementById("sede-arequipa");
var sedeCDMX = document.getElementById("sede-cdmx");
var sedeLima = document.getElementById("sede-lima");
var sedeChile = document.getElementById("sede-chile");
var information = document.getElementById("information");

var tabArequipa = document.getElementById("arequipa");
var tabCDMX = document.getElementById("cdmx");
var tabLima = document.getElementById("lima");
var tabChile = document.getElementById("chile");
var nps = document.getElementById("nps");

var icon = document.getElementById('home');

tabArequipa.addEventListener('click', showArequipa);
tabCDMX.addEventListener('click', showCdmx);
tabLima.addEventListener('click', showLima);
tabChile.addEventListener('click', showChile);
nps.addEventListener('click', showNps);
//icon.addEventListener('click', home);

var paragraph = document.createElement('p');
var paragraph1 = document.createElement('p');
var paragraph2 = document.createElement('p');
var graphContainer = document.createElement('div');


var dataStudents = document.getElementById("data-students");

var studentsArequipa = document.getElementById("students-arequipa");
var studentsArequipa162 = document.getElementById("students-arequipa-16-2");
var studentsArequipa171 = document.getElementById("students-arequipa-17-1");

var studentsCdmx = document.getElementById('students-cdmx');
var studentsCdmx171 = document.getElementById("students-cdmx-17-1");
var studentsCdmx172 = document.getElementById("students-cdmx-17-2");

var studentsLima = document.getElementById('students-lima');
var studentsLima162 = document.getElementById("students-lima-16-2");
var studentsLima171 = document.getElementById("students-lima-17-1");
var studentsLima172 = document.getElementById("students-lima-17-2");

var studentsChile = document.getElementById('students-chile');
var studentsChile162 = document.getElementById("students-chile-16-2");
var studentsChile171 = document.getElementById("students-chile-17-1");
var studentsChile172 = document.getElementById("students-chile-17-2");


var dataStaff = document.getElementById("data-staff");

var staffArequipa = document.getElementById("staff-arequipa");
var staffArequipa162 = document.getElementById("staff-arequipa-16-2");
var staffArequipa171 = document.getElementById("staff-arequipa-17-1");

var staffCdmx = document.getElementById("staff-arequipa");
var staffCdmx171 = document.getElementById("staff-cdmx-17-1");
var staffCdmx172 = document.getElementById("staff-cdmx-17-2");

var staffLima = document.getElementById("staff-lima");
var staffLima162 = document.getElementById("staff-lima-16-2");
var staffLima171 = document.getElementById("staff-lima-17-1");
var staffLima172 = document.getElementById("staff-lima-17-2");

var staffChile = document.getElementById("staff-chile");
var staffChile162 = document.getElementById("staff-chile-16-2");
var staffChile171 = document.getElementById("staff-chile-17-1");
var staffChile172 = document.getElementById("staff-chile-17-2");


dataStudents.addEventListener('click', preventD);
studentsArequipa.addEventListener('click', preventD);
studentsCdmx.addEventListener('click', preventD);
studentsLima.addEventListener('click', preventD);
studentsChile.addEventListener('click', preventD);
dataStaff.addEventListener('click', preventD);
staffArequipa.addEventListener('click', preventD);
staffCdmx.addEventListener('click', preventD);
staffLima.addEventListener('click', preventD);
staffChile.addEventListener('click', preventD);

//Eventos Menu
studentsArequipa162.addEventListener('click', aqpStdnts16);
studentsArequipa171.addEventListener('click', aqpStdnts17);
studentsCdmx171.addEventListener('click', cdmxStdnts171);
studentsCdmx172.addEventListener('click', cdmxStdnts172);
studentsLima162.addEventListener('click', limaStdnts162);
studentsLima171.addEventListener('click', limaStdnts171);
studentsLima172.addEventListener('click', limaStdnts172);
studentsChile162.addEventListener('click', chileStdnts162);
studentsChile171.addEventListener('click', chileStdnts171);
studentsChile172.addEventListener('click', chileStdnts172);

staffArequipa162.addEventListener('click', staffAqp162);
staffArequipa171.addEventListener('click', staffAqp171);
staffCdmx171.addEventListener('click', cdmxStf171);
staffCdmx172.addEventListener('click', cdmxStf172);
staffLima162.addEventListener('click', limaStf162);
staffLima171.addEventListener('click', limaStf171);
staffLima172.addEventListener('click', limaStf172);
staffChile162.addEventListener('click', chileStf162);
staffChile171.addEventListener('click', chileStf171);
staffChile172.addEventListener('click', chileStf172);



//Funciones tabs
function showArequipa(e) {
  event.preventDefault();
  paragraph.innerText = 'Información general de la sede de Arequipa';
  paragraph1.innerText = '\nEstudiantes satisfechas con la experencia de Laboratoria: \n 2016-2: ' + satisfedStudentsAqp16()+ '% \n 2017-1: '+ satisfedStudentsAqp17()+ '%';
  paragraph2.innerText = '\nTotal de estudiantes: ' + totalStudentsSedeAqp();
  paragraph.id = 'information';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // satisfedStudentsAqp16();
  // satisfedStudentsAqp17();
}

function showCdmx(e) {
  event.preventDefault();
  paragraph.innerText = 'Información general de la sede de CDMX';
  paragraph1.innerText = '\nEstudiantes satisfechas con la experencia de Laboratoria:\n 2017-1: ' + satisfedStudentsCdmx171()+ '% \n 2017-2: ' + satisfiedCdmx172()+ '%';
  paragraph2.innerText = '\nTotal de estudiantes: ' + totalStudentsSedeCdmx();
  sedeCDMX.appendChild(paragraph);
  sedeCDMX.appendChild(paragraph1);
  sedeCDMX.appendChild(paragraph2);
  sedeCDMX.appendChild(graphContainer);
  // satisfedStudentsCdmx171();
  // satisfiedCdmx172();
}

function showLima(e) {
  event.preventDefault();
  paragraph.innerText = 'Información general de la sede de Lima';
  paragraph1.innerText = '\nEstudiantes satisfechas con la experencia de Laboratoria:\n 2016-2: ' + satisfiedLima16()+ '% \n 2017-1: ' + satisfiedLima171()+'% \n 2017-2: '+ satisfiedLima172()+ '%';
  paragraph2.innerText = '\nTotal de estudiantes: ' + totalStudentsSedeLima();
  sedeLima.appendChild(paragraph);
  sedeLima.appendChild(paragraph1);
  sedeLima.appendChild(paragraph2);
  sedeLima.appendChild(graphContainer);
  // satisfiedLima16();
  // satisfiedLima171();
  // satisfiedLima172();
}

function showChile(e) {
  event.preventDefault();
  paragraph.innerText = 'Información general de la sede de Santiago de Chile';
  paragraph1.innerText = '\nEstudiantes satisfechas con la experencia de Laboratoria:\n 2016-2: ' + satisfiedChile16()+ '% \n 2017-1: ' + satisfedStudentsChile171()+'% \n 2017-2: '+ satisfedStudentsChile172()+ '%';
  paragraph2.innerText = '\nTotal de estudiantes: ' + totalStudentsSedeChile();
  sedeChile.appendChild(paragraph);
  sedeChile.appendChild(paragraph1);
  sedeChile.appendChild(paragraph2);
  sedeChile.appendChild(graphContainer);
  // satisfiedChile16
  // satisfedStudentsChile171
  // satisfedStudentsChile172
}

function showNps(event){
  event.preventDefault();
  paragraph.innerText = 'Net Promoter Score (NPS)';
  paragraph1.innerText = '\nNPS Arequipa 2016-2: ' + npsAqp16() +'%'+ '\nNPS Arequipa 2017-1: ' + npsAqp17()+'%' + '\nNPS CDMX 2017-1: ' + npsCdmx171()+'%' + '\nNPS CDMX 2017-2: ' + npsCdmx172()+'%' + '\nNPS Lima 2016-2: ' + npsLima162()+'%';
  paragraph2.innerText = 'NPS Lima 2017-1: ' + npsLima171()+'%' + '\nNPS Lima 2017-2: ' + npsLima172()+'%' + '\nNPS Chile 2016-2: ' + npsChile162()+'%' + ' \nNPS Chile 2017-1: ' + npsChile171()+'%' + '\nNPS Chile 2017-2: ' + npsChile172()+'%';
  sedeChile.appendChild(paragraph);
  sedeChile.appendChild(paragraph1);
  sedeChile.appendChild(paragraph2);
  sedeChile.appendChild(graphContainer);
  //    npsAqp16();
  //    npsAqp17();
  //    npsCdmx171();
  //    npsCdmx172();
  //    npsLima162();
  //
  //    npsLima171();
  //    npsLima172();
  //    npsChile162();
  //    npsChile171();
  //    npsChile172();
 }

// function home() {
//   container.innerHTML = " ";
// }



//funciones menu
// sedeArequipa
// sedeCDMX
// sedeLima
// sedeChile
function preventD(event){
  event.preventDefault();
}

function aqpStdnts16(event){
  paragraph.innerText = 'Arequipa generación 2016-2';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionAqp1()+'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + aqpQuantityStudents20162() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ aqpPercentage20162()+'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionAqp1();
  // aqpQuantityStudents20162();
  // aqpPercentage20162();
}

function aqpStdnts17(event){
  paragraph.innerText = 'Arequipa generación 2017-1';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionAqp2()+'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + aqpQuantityStudents20171() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ aqpPercentage20171() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionAqp2()
  // aqpQuantityStudents20171()
  // aqpPercentage20171()
}

function cdmxStdnts171(event){
  paragraph.innerText = 'CDMX generación 2017-1';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionCdmx1()+'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + cdmxQuantityStudents20171() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ cdmxPercentage20171() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionCdmx1()
  // cdmxQuantityStudents20171()
  // cdmxPercentage20171()
}

function cdmxStdnts172(event){
  paragraph.innerText = 'CDMX generación 2017-2';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionCdmx2()+'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + cdmxQuantityStudents20172() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ cdmxPercentage20172() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);

  // studentsDesertionCdmx2()
  // cdmxQuantityStudents20172()
  // cdmxPercentage20172()
}

function limaStdnts162(event){
  paragraph.innerText = 'Lima generación 2016-2';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionLim1() +'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + limaQuantityStudents20162() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ limaPercentage20162() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionLim1()
  // limaQuantityStudents20162()
  // limaPercentage20162()
}

function limaStdnts171(event){
  paragraph.innerText = 'Lima generación 2017-1';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionLim2() +'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + limaQuantityStudents20171() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ limaPercentage20171() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionLim2()
  // limaQuantityStudents20171()
  // limaPercentage20171()

}

function limaStdnts172(event){
  paragraph.innerText = 'Lima generación 2017-2';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionLim3() +'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + limaQuantityStudents20172() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ limaPercentage20172() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionLim3()
  // limaQuantityStudents20172()
  // limaPercentage20172()

}

function chileStdnts162(event){
  paragraph.innerText = 'Santiago de Chile generación 2016-2';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionSCL1() +'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + chileQuantityStudents20162() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ chilePercentage20162() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionSCL1()
  // chileQuantityStudents20162()
  // chilePercentage20162()
}

function chileStdnts171(event){
  paragraph.innerText = 'Santiago de Chile generación 2017-1';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionSCL2() +'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + chileQuantityStudents20171() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ chilePercentage20171() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionSCL2()
  // chileQuantityStudents20171()
  // chilePercentage20171()

}

function chileStdnts172(event){
  paragraph.innerText = 'Santiago de Chile generación 2017-2';
  paragraph1.innerText = '\nPromedio de estudiantes que desertaron: ' + studentsDesertionSCL3() +'%';
  paragraph2.innerText = '\nCantidad promedio de estudiantes que superan la meta de puntos Tech y HSE: ' + chileQuantityStudents20172() + '\nPorcentaje promedio de estudiantes que superan la meta de puntos Tech y HSE: '+ chilePercentage20172() +'%';
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // studentsDesertionSCL3()
  // chileQuantityStudents20172()
  // chilePercentage20172()
}

//Funciones staff
//staffAqp162
// staffAqp171
// cdmxStf171
// cdmxStf172
// limaStf162
// limaStf171
// limaStf172
// chileStf162
// chileStf171
// chileStf172

function staffAqp162(event){
  paragraph.innerText = 'Arequipa generación 2016-2';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersAqp16();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisAqp16();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
  // averageTeachersAqp16();
  // jedisAqp16();
}

function staffAqp171(event){
  paragraph.innerText = 'Arequipa generación 2017-1';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersAqp17();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisAqp17();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);

}

function cdmxStf171(event){
  paragraph.innerText = 'CDMX generación 2017-1';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersCdmx171();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisCdmx171();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
}

function cdmxStf172(event){
  paragraph.innerText = 'CDMX generación 2017-2';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersCdmx172();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisCdmx172();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
}

function limaStf162(event){
  paragraph.innerText = 'Lima generación 2016-2';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersLima162();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisLima16();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
}

function limaStf171(event){
  paragraph.innerText = 'Lima generación 2017-1';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersLima171();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisLima171();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
}

function limaStf172(event){
  paragraph.innerText = 'Lima generación 2017-2';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersLima172();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisLima172();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
}

function chileStf162(event){
  paragraph.innerText = 'Santiago de Chile generación 2016-2';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersChile162();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisChile16();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
}

function chileStf171(event){
  paragraph.innerText = 'Santiago de Chile generación 2017-1';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersChile171();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisChile171();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);

}

function chileStf172(event){
  paragraph.innerText = 'Santiago de Chile generación 2017-2';
  paragraph1.innerText = '\nLa puntuación promedio de l@s profesores.: ' + averageTeachersChile172();
  paragraph2.innerText = '\nLa puntuación promedio de l@s jedi masters: ' + jedisChile172();
  sedeArequipa.appendChild(paragraph);
  sedeArequipa.appendChild(paragraph1);
  sedeArequipa.appendChild(paragraph2);
  sedeArequipa.appendChild(graphContainer);
}



// var showHide = function(e) {
//   var tabSedes = e.target.dataset.tabSedes;
//   if(tabSedes === "arequipa") {
//
//    var paragraph = document.createElement('p')
//    // paragraph.createTextNode = "Información general de la sede de Arequipa";
//    // paragraph.id = "informationArequipa";
//    // sedeArequipa.appendChild(paragraph);
//     //asignar display a los elementos creados
//
//     sedeCDMX.style.display = "none";
//     sedeLima.style.display = "none";
//     sedeChile.style.display = "none";
//     sedeArequipa.style.display = "block";
//
//   } else if(tabSedes === "cdmx") {
//     sedeArequipa.style.display = "none";
//     sedeLima.style.display = "none";
//     sedeChile.style.display = "none";
//     sedeCDMX.style.display = "block";
//
//   } else if(tabSedes === "lima") {
//     sedeArequipa.style.display = "none";
//     sedeCDMX.style.display = "none";
//     sedeChile.style.display = "none";
//     sedeLima.style.display = "block";
//
//   } else if(tabSedes === "chile") {
//     sedeArequipa.style.display = "none";
//     sedeCDMX.style.display = "none";
//     sedeLima.style.display = "none";
//     sedeChile.style.display = "block";
//   }
// };
//
// //se declara la función que ejecutará el conteo de los tabs
// var loadPage = function() { //nombramos a la función
//   sedeCDMX = document.getElementById("sede-cdmx");
//   sedeLima = document.getElementById("sede-lima");
//   sedeChile = document.getElementById("sede-chile");
//
//   //var globales de elemntos creados
//
//
//   //display none a todos los elementos creados
//   sedeCDMX.style.display = "none";
//   sedeLima.style.display = "none";
//   sedeChile.style.display = "none";
//   var tabsElements = document.getElementsByClassName("tab"); //se crea una variable y en ella guardamos el elemento que se traera del HTML por medio del DOM.
//   for (var i = 0; i < tabsElements.length; i++) { //se crea un for, el cual hará el conteo de los tabs concatenándolos uno en uno.
//     tabsElements[i].addEventListener("click", showHide); //los tabs en su posición i (índice) tendrán el evento 'click' cada que el usuario dé click en uno de ellos
//   } //y al momento de dar click se ejecutará la función chowHide.
// }
// loadPage();


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
// document.write("<br>El promedio de alumnas satisfechas con la experiencia de Laboratoria en Arequipa 2016-2: "+ satisfedStudentsAqp16() + "%.<br>");


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
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Arequipa 2017-1: "+ satisfedStudentsAqp17() + "%.<br>");



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
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en CDMX 2017-1: "+ satisfedStudentsCdmx171() + "%.<br>");


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
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en CDMX 2017-2: "+ satisfiedCdmx172() + "%.<br>");

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
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Lima-2016-2: "+ satisfiedLima16() + "%.<br>");

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
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Lima-2017-1: "+ satisfiedLima171() + "%.<br>");

function satisfiedLima172() {
  var accessDataPromoters = data['LIM']['2017-2']['ratings'];
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

satisfiedLima172();
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Lima-2017-2: "+ satisfiedLima172() + "%.<br>");

function satisfiedChile16() {
  var accessDataPromoters = data['SCL']['2016-2']['ratings'];
  //console.log(accessDataPromoters);
  var satisfiedArray = [];
  var sumSatisfied = null;
  for (var i = 0; i < accessDataPromoters.length; i++) {
    var dataPromoters = accessDataPromoters[i]['nps']['promoters'];
    //console.log(dataPromoters);
    //console.log(accessDataPromoters[i]);
    satisfiedArray.push(dataPromoters);
    //console.log(satisfiedArray);
  }
  var saveSatisfied = satisfiedArray;
  //console.log(saveSatisfied);
  for (var j = 0; j < saveSatisfied.length; j++) {
    sumSatisfied = sumSatisfied = saveSatisfied[j];
    //console.log(sumSatisfied);
  }
  var totalSatisfied = (sumSatisfied/4);
  //console.log(totalSatisfied);
  return totalSatisfied;
}

satisfiedChile16();
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Santiago de Chile 2016-2: "+ satisfiedChile16() + "%.<br>");

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
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Santiago de Chile 2017-1: "+ satisfedStudentsChile171() + "%.<br>");

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
// document.write("El promedio de alumnas satisfechas con la experiencia de Laboratoria en Santiago de Chile 2017-2: "+ satisfedStudentsChile172() + "%.<br>");
//Variables en las que creamos los arreglos para las funicones de las Graficas

var satisfiedAqp1= [' 2016-2', satisfedStudentsAqp16() ];
var satisfiedAqp2= [' 2017-1', satisfedStudentsAqp17() ];
var satisfiedCdmx1= [' 2017-1', satisfedStudentsCdmx171()];
var satisfiedCdmx2= [' 2017-2', satisfiedCdmx172()];
var satisfiedSCL1 = ['2016-2', satisfiedChile16()]
var satisfiedSCL2 = ['2017-1', satisfedStudentsChile171() ]
var satisfiedSCL2 = ['2017-2', satisfedStudentsChile172() ]
var satisfiedLim1 = ['2016-2', satisfiedLima16() ]
var satisfiedLim2 = ['2017-1', satisfiedLima171()]
var satisfiedLim3 = ['2017-2', satisfiedLima172()]


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

// document.writeln("<br> El Net Promoter Score promedio de Arequipa 2016-2 es " + npsAqp16() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de Arequipa 2017-1 es " + npsAqp17() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de CDMX 2017-1 es " + npsCdmx171() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de CDMX 2017-2 es " + npsCdmx172() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de Lima 2016-2 es " + npsLima162() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de Lima 2017-1 es " + npsLima171() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de Lima 2017-2 es " + npsLima172() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de Chile 2016-2 es " + npsChile162() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de Chile 2017-1 es " + npsChile171() + "%.")
// document.writeln("<br> El Net Promoter Score promedio de Chile 2017-2 es " + npsChile172() + "%.<br>")



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
// document.write("<br>En la generación 2016-2 de Arequipa hay: "+ totalStudentsGen162Aqp() + " estudiantes.<br>");


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
// document.write("En la generación 2017-1 de Arequipa hay: "+ totalStudentsGen171Aqp() + " estudiantes.<br><br>");

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
// document.write("En la generación 2017-1 de CDMX hay: "+ totalStudentsGen171Cdmx() + " estudiantes.<br>");


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
// document.write("En la generación 2017-2 de CDMX hay: "+ totalStudentsGen172Cdmx() + " estudiantes.<br><br>");


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
// document.write("En la generación 2016-2 de Lima hay: "+ totalStudentsGen162Lima() + " estudiantes.<br>");


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
// document.write("En la generación 2017-1 de Lima hay: "+ totalStudentsGen171Lima() + " estudiantes.<br>");


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
// document.write("En la generación 2017-2 de Lima hay: "+ totalStudentsGen172Lima() + " estudiantes.<br><br>");


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
// document.write("En la generación 2016-2 de Santiago de Chile hay: "+ totalStudentsGen162Chile() + " estudiantes.<br>");


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
// document.write("En la generación 2017-1 de Santiago de Chile hay: "+ totalStudentsGen171Chile() + " estudiantes.<br>");

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
// document.write("En la generación 2017-2 de Santiago de Chile hay: "+ totalStudentsGen172Chile() + " estudiantes.<br>");


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

// document.writeln("<br> Total de estudiantes sede Arequipa: "+ totalStudentsSedeAqp());
// document.writeln("<br> Total de estudiantes sede CDMX: "+ totalStudentsSedeCdmx());
// document.writeln("<br> Total de estudiantes sede Lima: "+ totalStudentsSedeLima());
// document.writeln("<br> Total de estudiantes sede Santiago de chile: "+ totalStudentsSedeChile());


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

// document.write("<br><br>En la Generación 2016-2 Arequipa: " + aqpQuantityStudents20162() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2017-1 Arequipa: " + aqpQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2017-1 CDMX: " + cdmxQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2017-2 CDMX: " + cdmxQuantityStudents20172() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2016-2 Lima: " + limaQuantityStudents20162() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2017-1 Lima: " + limaQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2017-2 Lima: " + limaQuantityStudents20172() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2016-2 de Santiago de Chile: " + chileQuantityStudents20162() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2017-1 de Santiago de Chile: " + chileQuantityStudents20171() + " estudiantes superan la meta de pts. tech y HSE.<br>");
// document.write("En la Generación 2017-2 de Santiago de Chile: " + chileQuantityStudents20172() + " estudiantes superan la meta de pts. tech y HSE.<br>");


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


// document.write("<br><br> Generación 2016-2 Arequipa: " + aqpPercentage20162() + "% supero la meta de puntos Tech y HSE.");
// document.write("<br> Generación del 2017-1 Arequipa: " + aqpPercentage20171() + "% supero la meta de puntos Tech y HSE.");
// document.write("<br> Generación del 2017-1 CDMX: " + cdmxPercentage20171() + "% supero la meta de puntos Tech y HSE.");
// document.write(" <br> Generación del 2017-2 CDMX: " + cdmxPercentage20172() + "% supero la meta de puntos Tech y HSE.");
// document.writeln("<br> Generación del 2016-2 Lima: " + limaPercentage20162() + "% supero la meta de puntos Tech y HSE.");
// document.writeln("<br> Generación del 2017-1 Lima: " + limaPercentage20171() + "% supero la meta de puntos Tech y HSE.");
// document.writeln("<br> Generación del 2017-2 Lima: " + limaPercentage20172() + "% supero la meta de puntos Tech y HSE.");
// document.writeln("<br> Generación del 2016-2 Santiago de Chile: " + chilePercentage20162() + "% supero la meta de puntos Tech y HSE.");
// document.writeln("<br> Generación del 2017-1 Santiago de Chile: " + chilePercentage20171() + "% supero la meta de puntos Tech y HSE.");
// document.writeln("<br> Generación del 2017-2 Santiago de Chile: " + chilePercentage20172() + "% supero la meta de puntos Tech y HSE.");


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
// document.write("<br><br>Generacion 2016-2 Arequipa, el promedio de los profesores fue de " + averageTeachersAqp16());

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
// document.write("<br>Generacion 2017-1 Arequipa, el promedio de los profesores fue de " + averageTeachersAqp17());

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
// document.write("<br>Generacion 2017-1 CDMX, el promedio de los profesores fue de " + averageTeachersCdmx171());

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
// document.write("<br>Generacion 2017-2 CDMX, el promedio de los profesores fue de " + averageTeachersCdmx171());

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
// document.write("<br>Generacion 2016-2 Lima, el promedio de los profesores fue de " + averageTeachersLima162());

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
// document.write("<br>Generacion 2017-1 Lima, el promedio de los profesores fue de " + averageTeachersLima171());

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
// document.write("<br>Generacion 2017-2 Lima, el promedio de los profesores fue de " + averageTeachersLima172());

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
// document.write("<br>Generacion 2016-2 Santiago de Chile, el promedio de los profesores fue de " + averageTeachersChile162());

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
// document.write("<br>Generacion 2017-1 Santiago de Chile, el promedio de los profesores fue de " + averageTeachersChile171());

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
// document.write("<br>Generacion 2017-2 Santiago de Chile, el promedio de los profesores fue de " + averageTeachersChile172());


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
  //console.log(averageJediAqp17);
  return averageJediAqp17;
}
jedisAqp17();

function jedisCdmx171() {
  var accessDataJedis = data['CDMX']['2017-1']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/3);
  //console.log(averageJedi);
  return averageJedi;
}

jedisCdmx171();

function jedisCdmx172() {
  var accessDataJedis = data['CDMX']['2017-2']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/2);
  //console.log(averageJedi);
  return averageJedi;
}

jedisCdmx172();

function jedisLima16() {
  var accessDataJedis = data['LIM']['2016-2']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/2);
  //console.log(averageJedi);
  return averageJedi;
}

jedisLima16();

function jedisLima171() {
  var accessDataJedis = data['LIM']['2017-1']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/4);
  //console.log(averageJedi);
  return averageJedi;
}

jedisLima171();

function jedisLima172() {
  var accessDataJedis = data['LIM']['2017-2']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/2);
  //console.log(averageJedi);
  return averageJedi;
}

jedisLima172();

function jedisChile16() {
  var accessDataJedis = data['SCL']['2016-2']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/4);
  //console.log(averageJedi);
  return averageJedi;
}

jedisChile16();

function jedisChile171() {
  var accessDataJedis = data['SCL']['2017-1']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/3);
  //console.log(averageJedi);
  return averageJedi;
}

jedisChile171();

function jedisChile172() {
  var accessDataJedis = data['SCL']['2017-2']['ratings'];
  //console.log(accessDataJedis);
  var addDataJedi = [];
  var sumJedi = null;
  for (var i = 0; i < accessDataJedis.length; i++) {
    //console.log(accessDataJedis[i]);
    var dataJedi = accessDataJedis[i]['jedi'];
    addDataJedi.push(dataJedi);
    //console.log(addDataJedi);
  }
  var saveDataJedi = addDataJedi;
  //console.log(saveDataJedi);
  for (var j = 0; j < saveDataJedi.length; j++) {
    sumJedi = sumJedi + saveDataJedi[j];
    //console.log(sumJedi);
    //console.log(saveDataJedi[j]);
  }
  var averageJedi = (sumJedi/2);
  //console.log(averageJedi);
  return averageJedi;
}

jedisChile172();

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

                        //Comienzan Graficas de estudiantes Satisfechas
                        google.charts.load('current', {'packages':['bar']});
                              google.charts.setOnLoadCallback(satisfiedAqp);

                              function satisfiedAqp() {
                                var data = new google.visualization.arrayToDataTable([
                                  ['Generacion', 'Percentage'],
                                  satisfiedAqp1,
                                  satisfiedAqp2,
                                ]);

                                var options = {
                                  title: 'Estudiantes Satisfechas con la experiencia Laboratoria',
                                  // width: 900,
                                  legend: { position: 'none' },
                                  chart: { title: 'Arequipa',
                                           subtitle: 'Estudiantes Satisfechas ' },
                                  bars: 'horizontal', // Required for Material Bar Charts.
                                  hAxis: {format: 'decimal'},
                                  // height: 400,
                                  colors: [ '#d95f02',],
                                  axes: {
                                    x: {
                                      0: { side: 'top', label: 'Percentage'} // Top x-axis.
                                    }
                                  },
                                  bar: { groupWidth: "90%" }
                                };

                                var chart = new google.charts.Bar(document.getElementById('top_1_div'));
                                chart.draw(data, options);
                              };

                                  google.charts.setOnLoadCallback(satisfiedCdmx);
                              function satisfiedCdmx() {
                                var data = new google.visualization.arrayToDataTable([
                                  ['Generacion', 'Percentage'],
                                  satisfiedCdmx1,
                                  satisfiedCdmx2,
                                ]);

                                var options = {
                                  title: 'Estudiantes Satisfechas con la experiencia Laboratoria',
                                  // width: 900,
                                  legend: { position: 'none' },
                                  chart: { title: 'CDMX',
                                           subtitle: 'Estudiantes Satisfechas ' },
                                  bars: 'horizontal', // Required for Material Bar Charts.
                                  hAxis: {format: 'decimal'},
                                  // height: 400,
                                  colors: [ '#b173dd',],
                                  axes: {
                                    x: {
                                      0: { side: 'top', label: 'Percentage'} // Top x-axis.
                                    }
                                  },
                                  bar: { groupWidth: "90%" }
                                };

                                var chart = new google.charts.Bar(document.getElementById('top_2_div'));
                                chart.draw(data, options);
                              };

                              google.charts.setOnLoadCallback(satisfiedLim);
                          function satisfiedLim() {
                            var data = new google.visualization.arrayToDataTable([
                              ['Generacion', 'Percentage'],
                              satisfiedLim1,
                              satisfiedLim2,
                              satisfiedLim3,
                            ]);

                            var options = {
                              title: 'Estudiantes Satisfechas con la experiencia Laboratoria',
                              // width: 900,
                              legend: { position: 'none' },
                              chart: { title: 'LIMA',
                                       subtitle: 'Estudiantes Satisfechas ' },
                              bars: 'horizontal', // Required for Material Bar Charts.
                              hAxis: {format: 'decimal'},
                              // height: 400,
                              colors: [ '#eacd27'],
                              axes: {
                                x: {
                                  0: { side: 'top', label: 'Percentage'} // Top x-axis.
                                }
                              },
                              bar: { groupWidth: "90%" }
                            };

                            var chart = new google.charts.Bar(document.getElementById('top_3_div'));
                            chart.draw(data, options);
                          };

                          google.charts.setOnLoadCallback(satisfiedSCL);
                        function satisfiedSCL() {
                        var data = new google.visualization.arrayToDataTable([
                          ['Generacion', 'Percentage'],
                          satisfiedSCL1,
                          satisfiedSCL2,
                          satisfiedSCL2,
                        ]);

                        var options = {
                          title: 'Estudiantes Satisfechas con la experiencia Laboratoria',
                          // width: 900,
                          legend: { position: 'none' },
                          chart: { title: 'Santiago de Chile',
                                   subtitle: 'Estudiantes Satisfechas ' },
                          bars: 'horizontal', // Required for Material Bar Charts.
                          hAxis: {format: 'decimal'},
                          // height: 400,
                          colors: [ '#4dc8ea'],
                          axes: {
                            x: {
                              0: { side: 'top', label: 'Percentage'} // Top x-axis.
                            }
                          },
                          bar: { groupWidth: "90%" }
                        };

                        var chart = new google.charts.Bar(document.getElementById('top_4_div'));
                        chart.draw(data, options);
                        };
