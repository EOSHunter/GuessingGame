import React, { Component } from 'react';
import './App.css';



class App extends Component {

    constructor() {
    super();
    this.getUserInput = this.getUserInput.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.Standard = this.Standard.bind(this);
    this.Expert = this.Expert.bind(this);
    this.Reset = this.Reset.bind(this);
    this.Guess = this.Guess.bind(this);

    this.state = {
      input: "",
      guessesMade: 0,
      standardHighscore: 0,
      gamemode: "",
      ExpertHighscore: 0,
      correctNum: 0,
      message: "",
      contentID: "hidden"
    }
  }

  getUserInput(event) {
    let userInput = event.target.value;
    this.setState({
      input: userInput,
    })
  }

  handleUserInput(){
    let userInput = this.state.input;
    let guessesMade = this.state.guessesMade;
    guessesMade.push(userInput);
    let message;

    if (userInput < this.state.correctNum) {
      message = "Guess is too low!"
    } else if (userInput > this.state.correctNum){
      message = "Guess is too high!"
    } else {
      message = "Correct, you got it!"
    }

    this.setState({
      guessesMade: guessesMade,
      message: message,
    })
  }

  Standard(){
    let randomNum = Math.floor((Math.random()* 10) + 1);
    this.setState({
      correctNum: randomNum,
      gamemode: "Standard",
      contentID: ""
    })
  }

  Expert(){
    let randomNum = Math.floor((Math.random()* 100) + 1);
    this.setState({
      correctNum: randomNum,
      gamemode: "Expert",
      contentID: ""
    })
  }

  Guess(){
    this.setState({
      guessesMade: +1
    })
  }

  Reset(){
    this.setState({
      input: "",
      guessesMade: 0,
      gamemode: "",
      correctNum: 0,
      message: "",
      contentID: "hidden"
    })
  }



  render() {
    return (
      <div id="container">
        <div className="starting-screen">
          <h1>Guessing Game</h1>
          <h2>Start Game</h2>
          <p>Game modes</p>
          <button className="btn-standard" onClick={this.Standard}>Standard</button>
          <button className="btn-expert" onClick={this.Expert}>Expert</button>
        </div>
          
        <div id={this.state.contentID} className="game">
          <div className="text">
            <h2 className="gamemode-title">{this.state.gamemode}</h2>
            <p>Guess a number between 1 and 10</p>
            <p className="message-wrong">{this.state.message}</p>
            
            <label for="guess">Your Guess: <input type="guess" id="guess" name="guess" placeholder="Guess" onChange={this.getUserInput} onClick={this.Guess} required=""/></label>
            
            <div id="response"></div>
            
            <p className="totalGuesses">Total guesses</p>
            <p className="number-guesses"></p>
            <p className="highschore">Highscore</p>
            <p className="highscore-number"></p>
            
            <div>
              <input id="btn-submit" onClick={this.handleUserInput} type="submit" name="submit" value="Submit"/>
              <input id="btn-reset" onClick={this.Reset} type="reset" name="reset" value="Reset"/>
            </div>
            
          </div>

          <div>
            <div className="background-image"></div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
