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
  $("#javaShow").hide()
  $("#csharpShow").hide()
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  }

  else if (total > 7 && total < 11) {
  $("#javaShow").show();
  $("#cssShow").hide();
  $("#csharpShow").hide()
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  }

  else if (total > 10) {
  $("#csharpShow").slideDown();
  $("#javaShow").hide();
  $("#cssShow").hide();
  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  }

  else if (total != 6, 7, 8, 9, 10, 11, 12) [
    alert("Please Make Sure All Questions are Answered!")
  ]

};
