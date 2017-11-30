window.addEventListener('load', function(event) {
  var selectGeneration = document.getElementById('mySelect');
  var section = document.getElementById('section-display-none');
  /* Accediendo a los divs vacios donde agregaremos los valores de los indicadores solicitados*/
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
  /* Accediendo a los filtros por sprint de tech skills y life skills*/
  var selectSprintTech = document.getElementById('select-sprint-tech');
  var selectSprintLife = document.getElementById('select-sprint-life');
  /* EVENTO UNO: "CHANGE" PARA EL FILTRO POR GENERACIONES*/
  selectGeneration.addEventListener('change', showGeneration);
  /* Función a ejecutar*/
  function showGeneration(event) {
    switch (true) {
    case event.target.value === 'aqp2016II':
      /* Al entrar a la generación 'aqp2016II' se remueve la clase "display-none" a section que contiene la informacion deseada de esa generación*/
      section.classList.remove('display-none');
      /* Llamando a la funcion de la GRAFICO ENROLLMENT (ver graphics.js, line:3)"aqp2016II"*/
      enrollmentGraphic(10, 124);
      /* Llamando a la funcion de la GRAFICO ACHIEVEMENT (ver graphics.js, line:4)"aqp2016II"*/
      achievementGraphic(15, 50);
      /* Llamando a la funcion de la GRAFICO NET PROMOTER SCORE(ver graphics.js, line:37)"aqp2016II"*/
      netPromoterScoreGraphic(20, 50, 17);
      /* Llamando a la funcion de la GRAFICO TECH SKILLS (ver graphics.js, line:56)"aqp2016II"*/
      techSkillsGraphic(18, 30);
      /* Llamando a la funcion de la GRAFICO TECH SKILLS por sprints(ver graphics.js, line:73)"aqp2016II"*/
      techSkillsSprintsGraphic(15, 5, 6, 10);
      /* Llamando a la funcion de la GRAFICO LIFE SKILLS (ver graphics.js, line:110)"aqp2016II"*/
      lifesSkillsGraphic(14, 18);
      /* Llamando a la funcion de la GRAFICO TECH SKILLS por sprints(ver graphics.js, line:127)"aqp2016II"*/
      lifeSkillsSprintsGraphic(5, 6, 7, 8);
      /* Llamando a la funcion de la GRAFICO STUDENTS SATISFACTION (ver graphics.js, line:163)"aqp2016II"*/
      studentSatisfactionGraphic(3, 5, 7, 10);
      /* Llamando a la funcion de la GRAFICO TEACHER RATING(ver graphics.js, line:182, line:201)"aqp2016II"*/
      teacherRatingGraphic(35, 54, 23, 22);
      /* Llamando a la funcion de la GRAFICO JEDI MASTER RATING (ver graphics.js)"aqp2016II"*/
      jediMasterRatingGraphic(34, 12, 23, 34);

      /* 13 funciones*/
      /* Evento para tech y life por sprint*/
      selectSprintTech.addEventListener('change', showSprintTech);
      function showSprintTech(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        /* Llamando a la funcion de la GRAFICO TECH SKILLS POR SPRINT(cada sprint individual)(ver graphics.js, line:92)"aqp2016II"*/
          techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint2':
          techSkillsSprintGraphic(9, 8);
          break;
        case event.target.value === 'sprint3':
          techSkillsSprintGraphic(7, 8);
          break;
        case event.target.value === 'sprint4':
          techSkillsSprintGraphic(7, 8);
          break;
        default:
        }
      }
      selectSprintLife.addEventListener('change', showSprintLife);
      function showSprintLife(event) {
        switch (true) {
        case event.target.value === 'sprint1':
        /* Llamando a la funcion de la GRAFICO TECH SKILLS POR SPRINT(cada sprint individual)(ver graphics.js, line:146)"aqp2016II"*/
          lifeSkillsSprintGraphic(7, 8);
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
      break;
    case event.target.value === 'aqp2017I':
      section.classList.remove('display-none');
      enrollmentGraphic(10, 23);
      achievementGraphic(15, 50);
      netPromoterScoreGraphic(20, 50, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 5, 6);
      lifesSkillsGraphic(14, 18);
      lifeSkillsSprintsGraphic(5, 6, 7);
      studentSatisfactionGraphic(3, 5, 7);
      teacherRatingGraphic(35, 54, 23);
      jediMasterRatingGraphic(34, 12, 23);
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
    case event.target.value === 'cdm2017I':
      section.classList.remove('display-none');
      enrollmentGraphic(10, 84);
      achievementGraphic(15, 50);
      netPromoterScoreGraphic(20, 50, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 5, 6);
      lifesSkillsGraphic(14, 18);
      lifeSkillsSprintsGraphic(5, 6, 7);
      studentSatisfactionGraphic(3, 5, 7);
      teacherRatingGraphic(35, 54, 23);
      jediMasterRatingGraphic(34, 12, 23);
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
    case event.target.value === 'cdm2017II':
      section.classList.remove('display-none');
      enrollmentGraphic(3, 24);
      achievementGraphic(15, 50);
      netPromoterScoreGraphic(20, 50, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 5);
      lifesSkillsGraphic(14, 18);
      lifeSkillsSprintsGraphic(5, 6);
      studentSatisfactionGraphic(3, 5);
      teacherRatingGraphic(35, 54);
      jediMasterRatingGraphic(34, 12);
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
    case event.target.value === 'lima2016II':
      section.classList.remove('display-none');
      enrollmentGraphic(7, 12);
      achievementGraphic(15, 50);
      netPromoterScoreGraphic(20, 50, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 5);
      lifesSkillsGraphic(14, 18);
      lifeSkillsSprintsGraphic(5, 6);
      studentSatisfactionGraphic(3, 5);
      teacherRatingGraphic(35, 54);
      jediMasterRatingGraphic(34, 12);
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
    case event.target.value === 'lima2017I':
      section.classList.remove('display-none');
      enrollmentGraphic(10, 56);
      achievementGraphic(15, 34);
      netPromoterScoreGraphic(20, 50, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 5, 34, 34);
      lifesSkillsGraphic(14, 18);
      lifeSkillsSprintsGraphic(5, 6, 34, 45);
      studentSatisfactionGraphic(3, 5, 32, 34);
      teacherRatingGraphic(35, 54, 23, 34);
      jediMasterRatingGraphic(34, 12, 45, 36);
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
    case event.target.value === 'lima2017II':
      section.classList.remove('display-none');
      enrollmentGraphic(10, 13);
      achievementGraphic(15, 46);
      netPromoterScoreGraphic(20, 50, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 5);
      lifesSkillsGraphic(14, 18);
      lifeSkillsSprintsGraphic(5, 6);
      studentSatisfactionGraphic(3, 5);
      teacherRatingGraphic(35, 54);
      jediMasterRatingGraphic(34, 12);
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
      enrollmentGraphic(10, 24);
      achievementGraphic(15, 34);
      netPromoterScoreGraphic(34, 50, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(6, 5, 34, 34);
      lifesSkillsGraphic(14, 3);
      lifeSkillsSprintsGraphic(5, 6, 7, 45);
      studentSatisfactionGraphic(3, 3, 32, 34);
      teacherRatingGraphic(35, 54, 5, 34);
      jediMasterRatingGraphic(34, 4, 45, 36);

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
      enrollmentGraphic(10, 13);
      achievementGraphic(15, 23);
      netPromoterScoreGraphic(20, 50, 12);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 5, 23);
      lifesSkillsGraphic(14, 18);
      lifeSkillsSprintsGraphic(5, 6, 23);
      studentSatisfactionGraphic(3, 34, 32);
      teacherRatingGraphic(35, 54, 56);
      jediMasterRatingGraphic(34, 12, 32);
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
    case event.target.value === 'scl2017II':
      section.classList.remove('display-none');
      enrollmentGraphic(10, 39);
      achievementGraphic(15, 56);
      netPromoterScoreGraphic(20, 45, 17);
      techSkillsGraphic(18, 30);
      techSkillsSprintsGraphic(15, 34);
      lifesSkillsGraphic(14, 23);
      lifeSkillsSprintsGraphic(6, 6);
      studentSatisfactionGraphic(3, 34);
      teacherRatingGraphic(35, 34);
      jediMasterRatingGraphic(34, 23);
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
      section.classList.add('display-none');
    }
  }
});
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
