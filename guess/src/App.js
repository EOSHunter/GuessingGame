import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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

class App extends Component {
  render() {
    return (
      <div>
        <div id="container">
          <div className="starting-screen" ref="hide" onClick={this.difficutlyOption}>
            <h1>Guessing Game</h1>
            <h2>Start Game</h2>
            <p>Game modes</p>
            <button className="btn-standard">Standard</button>
            <button className="btn-expert">Expert</button>
          </div>
            
          <div id="standard">
            <div className="text">
              <h2>Standard</h2>
              <p>Guess a number between 1 and 10</p>
              <div id="response"></div> 

              <div>
                <input id="btn-expert" type="submit" name="submit" value="Save"/>
                <input id="btn-reset" type="reset" name="reset" value="Reset"/>
            </div>

            </div>
          </div>

          <div id="expert">
            <div className="text">
              <h2>Expert</h2>
              <p>Guess a number between 1 and 100</p>
            </div>
              <div id="response"></div> 
              <div>
                <input id="btn-expert" type="submit" name="submit" value="Save"/>
                <input id="btn-reset" type="reset" name="reset" value="Reset"/>
            </div>

          </div>
        
        </div>

        <div className="background-image"></div>
      </div>
    );
  }
}

export default App;
