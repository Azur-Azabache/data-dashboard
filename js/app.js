window.addEventListener('load', function(event) {
  console.log(event);/* me da propiedades del evento*/
  console.log(event.target);/* recibe y ejecuta el evento me bota document*/
  console.log(event.currentTarget);/* escucha el click (tiene el addeventlistener por default)el evento me bota window*/
  /* escribir las funcione*/
  var selectGeneration = document.getElementById('select-generation');
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
    case event.target.value === 'aqp2016ii':
      console.log(section);
      section.classList.remove('display-none');
      /* 13 funciones*/
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
    case event.target.value === 'aqp2017ii':
      section.classList.remove('display-none');
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
    case event.target.value === 'cdm2017i':
      selector.appendChild(optionThree);
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
    case event.target.value === 'lim2017i':
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
    case event.target.value === 'lim2016ii':
      section.classList.remove('display-none');
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
    case event.target.value === 'lim2017i':
      section.classList.remove('display-none');
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
    case event.target.value === 'lim2017ii':
      section.classList.remove('display-none');
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
    case event.target.value === 'scl2016ii':
      section.classList.remove('display-none');
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
    case event.target.value === 'scl2017i':
      section.classList.remove('display-none');
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
    case event.target.value === 'scl2017ii':
      section.classList.remove('display-none');
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
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
