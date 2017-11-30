window.addEventListener('load', function(event) {
  console.log(event);/* me da propiedades del evento*/
  console.log(event.target);/* recibe y ejecuta el evento me bota document*/
  console.log(event.currentTarget);/* escucha el click (tiene el addeventlistener por default)el evento me bota window*/
  /* escribir las funcione*/
  var selectGeneration = document.getElementById('mySelect');
  var section = document.getElementById('section-display-none');
  /* accediendo a los divs vacios dodne agregaremos los valores de los indicadores*/
  var enrolled = document.getElementById('enrolled');
  var dropout = document.getElementById('dropout');
  var achievement = document.getElementById('achievement');
  var achievementPercent = document.getElementById('achievement-percent');
  var cumulativeNps = document.getElementById('cumulative-nps');
  var promotersPassiveDetractors = document.getElementById('promoters-passive-detractors');
  var techSkills = document.getElementById('tech-skills');
  var techSkillsPercent = document.getElementById('tech-skills-percent');
  var lifeSkills = document.getElementById('life-skills');
  var lifeSkillsPercent = document.getElementById('life-skills-percent');
  var studentSatisfaction = document.getElementById('student-satisfaction');
  var teacherRating = document.getElementById('teacher-rating');
  var jediMasterRating = document.getElementById('jedi-master-rating');
  /* Accediendo a los filtros por sprint*/
  var selectSprintTech = document.getElementById('select-sprint-tech');
  var selectSprintLife = document.getElementById('select-sprint-life');
  /* EVENTO CHANGE PARA EL FILTRO POR GENERACIONES*/
  selectGeneration.addEventListener('change', showGeneration);
  /* Función a ejecutar*/

  // Funcion para llenar la cantidad de alumnos desertores
  function showGeneration(event) {
    function countOff(obj) {
      var counter = 0;
      for (var i = 0; i < arrStudent.length; i++) {
        if (arrStudent[i]['active'] === false) {
          counter++;
        }
      }
      return Math.round(100 * counter / arrStudent.length) + '%';
    }
    // Funcion para cantidad de alumnos que superan el 70% del puntaje total

    function countProm(obj) {
      var promedioMinimo = 2100;
      var counter = 0;
      var arrPromStudent = [];
      var arrProm = [];
      for (var i = 0; i < arrStudent.length; i++) {
        if (arrStudent[i]['active'] === true) {
          for (var x = 0; x < arrStudent[0]['sprints'].length; x++) {
            var arr = Object.values(arrStudent[i]['sprints'][x]['score']);
            var sum = (arr[0] + arr[1]);
            arrProm.push(sum);
          }
        }
      }
      for (var z = 0; z < arrProm.length; z += 4) {
        var studentSprint = (arrProm[z] + (arrProm[z + 1]) + (arrProm[z + 2]) + (arrProm[z + 3])) / 4;
        arrPromStudent.push(studentSprint);
      }
      for (var y = 0; y < arrPromStudent.length; y++) {
        if (arrPromStudent[y] > promedioMinimo) {
          counter++;
        }
      }
      return counter;
    }
    // Funcion para sacar el porcentaje del requisito anterior

    // Funcion para obtener el porcentaje de satisfacción por generación
    function studentsSatisfaction (obj){
      var arrSatisfaction = [];
      var prome = 0;
      for (var i=0; i<rating.length; i++){
        var sum = rating[i]['student']['cumple'] + rating[i]['student']['supera'];
        arrSatisfaction.push(sum);
      }
      for (var m = 0; m<arrSatisfaction.length; m++){
        prome += arrSatisfaction[m];
      }
      return prome/rating.length + '%';
    }
    // Función para promediar puntaje de profesores
    function teacherProm (obj){
      var arr = [];
      var prome = 0;
      for (var i = 0; i<rating.length; i++){
        arr.push(rating[i]['teacher']);
      }
      for (var x= 0; x<arr.length; x++){
        prome += arr[x];
      }
      return Math.round(prome/rating.length);
    }
    //Función para promediar puntaje de Jedis Masters
    function jdProm (obj){
      var arr = [];
      var prome = 0;
      for (var i = 0; i<rating.length; i++){
        arr.push(rating[i]['jedi']);
      }
      for (var x= 0; x<arr.length; x++){
        prome += arr[x];
      }
      return Math.round(prome/rating.length);
    }


    switch (true) {
    case event.target.value === 'lima2016II':
    // Llenar la cantidad de alumnos por generación y sede
      section.classList.remove('display-none');
      var student = data.LIM['2016-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* Evento para tech y life por sprint*/
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        case event.target.value === 'sprint4':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        case event.target.value === 'sprint4':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'lima2017I':
      section.classList.remove('display-none');
      var student = data.LIM['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* Evento para tech y life por sprint*/
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'lima2017II':
      section.classList.remove('display-none');
      var student = data.LIM['2017-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* Evento para tech y life por sprint*/
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'aqp2016II':
      section.classList.remove('display-none');
      var student = data.AQP['2016-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* Evento para tech y life por sprint*/
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'aqp2017I':
      section.classList.remove('display-none');
      var student = data.AQP['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'scl2016II':
      section.classList.remove('display-none');
      var student = data.SCL['2016-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        case event.target.value === 'sprint4':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        case event.target.value === 'sprint4':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'scl2017I':
      section.classList.remove('display-none');
      var student = data.SCL['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'scl2017II':
      section.classList.remove('display-none');
      var student = data.SCL['2017-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        case event.target.value === 'sprint4':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        case event.target.value === 'sprint4':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'cdm2017I':
      section.classList.remove('display-none');
      var student = data.CDMX['2017-1'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievement.textContent = countProm(student);
      achievementPercent.textContent = Math.round((countProm(student) * 100) / arrStudent.length) + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        case event.target.value === 'sprint3':
          break;
        default:
        }
      }*/
      break;
    case event.target.value === 'cdm2017II':
      section.classList.remove('display-none');
      var student = data.CDMX['2017-2'];
      var arrStudent = student['students'];
      var rating = student['ratings'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      dropout.textContent = countOff(student);
      achievementPercent.textContent = (countProm(student) * 100) / arrStudent.length + '%';
      studentSatisfaction.textContent = studentsSatisfaction(rating);
      teacherRating.textContent = teacherProm(rating);
      jediMasterRating.textContent = jdProm(rating);
      /* selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
          break;
        case event.target.value === 'sprint2':
          break;
        default:
        }
      }*/

      break;
    default:
    }
  }
});
