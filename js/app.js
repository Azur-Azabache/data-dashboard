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
  function showGeneration(event) {
    switch (true) {
    case event.target.value === 'lima2016II':
    // Llenar la cantidad de alumnos por generación y sede
      section.classList.remove('display-none');
      var student = data.LIM['2016-2'];
      var arrStudent = student['students'];
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
      enrolled.textContent = arrStudent.length;
      // Llenar la cantidad de alumnos desertores
      function countOff(obj) {
        var counter = 0;
        for (var i = 0; i < arrStudent.length; i++) {
          if (arrStudent[i]['active'] === false) {
            counter++;
          }
        }
        return counter;
      }
      dropout.textContent = countOff(student);
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
