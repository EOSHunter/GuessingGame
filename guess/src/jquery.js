// Create a guessing game app in React.

// When the page loads, display a header that says Start Game and underneath that have two buttons. 
// One button should read Standard and the other should read Expert. 
// If the user clicks Standard, randomly generate a number between 1 and 10 for the user to guess. 
// Expert should be between 1 and 100. Once either of these buttons is clicked, the game starts.
// There should be an input for the user to guess a number and submit.
// There should be a place that shows how many guesses they have made.
// Once the user guesses, tell them whether their guess was too high or too low. 
// Once the user wins, display a message telling them that they have won and how many guesses it took. 
// Keep track of the least number of tries it takes the user to win. This is the "High Score". If the user beats their high score, congratulate them.
// Keep separate track of the high score for the standard and expert levels.
// Have a reset button if the user gets tired of trying.

$('#standard').hide();
$('#expert').hide();


// Standard
$('.btn-standard').click(function(e) {
  $('.starting-screen').fadeOut(1000, function() {
    $('#standard').fadeIn(1000, function(){
      let randomNumberStandard = Math.floor(Math.random() * 11);
      console.log(randomNumberStandard);
      
      function userGuess() {
        var guess = document.getElementById('btn-standard')
        console.log(guess);
      }
      
      $('#btn-standard').click(function(e) {
        if (guess === randomNumberStandard) {
          console.log("Congrats");
        }         
      });
    });
  });
});


// Expert
$('.btn-expert').click(function(e) {
  $('.starting-screen').fadeOut(1000, function() {
    $('#expert').fadeIn(1000, function(){
      let randomNumberStandard = Math.floor(Math.random() * 101);
      console.log(randomNumberStandard);
      
      function userGuess() {
        var guess = document.getElementById('btn-standard')
        console.log(guess);
      }
      
      $('#btn-expert').click(function(e) {
        if (guess === randomNumberStandard) {
          console.log("Congrats");
        }         
      });
    });
  });
});



// $('#btn-reset').click(function(e) {
//   $('#expert').fadeOut(1000, function() {
//     $('.starting-screen').fadeIn(1000, function() {
//       console.log('resetting');
//     });
//    });                    
// });

$('#btn-reset').click(function(e) {
  $('#standard').fadeOut(1000, function() {
    $('.starting-screen').fadeIn(1000, function() {
      console.log('resetting');
    });
   });                    
});