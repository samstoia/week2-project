$(document).ready(function() {
  $("#trackQuestions").submit(function(event) {
    event.preventDefault();

    var environment = parseInt($("input:radio[name=environment]:checked").val());

    var personality = parseInt($("input:radio[name=personality]:checked").val());

    var learning = parseInt($("input:radio[name=learning]:checked").val());

    var language = parseInt($("input:radio[name=language]:checked").val());

    var goal = parseInt($("input:radio[name=goal]:checked").val());

    var schedule = parseInt($("input:radio[name=schedule]:checked").val());

    var total = environment + personality + learning + language + goal + schedule;

    match(total);

    console.log(environment, personality, learning, language, goal, schedule);
  });
});

function match(total) {
  if (total < 8) {
  $("#cssShow").show();

  }

  else if (total > 7 && total < 11) {
  $("#javaShow").show();

  }

  else if (total > 10) {
  $("#csharpShow").show();

  };

};
