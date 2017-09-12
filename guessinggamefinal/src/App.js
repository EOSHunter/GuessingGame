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
    this.handleHighscore = this.handleHighscore.bind(this);

    this.state = {
      input: "",
      guessesMade: 0,
      highscore: 0,
      newHighscore: 1000,
      gamemode: "",
      correctNum: 0,
      message: "",
      contentID: "hidden",
      instructions: "",
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
    let message;
    const totalGuesses = this.state.guessesMade+1;
    let newHighscore = this.state.newHighscore;

    if (userInput < this.state.correctNum) {
      message = "Guess is too low!"
    } else if (userInput > this.state.correctNum){
      message = "Guess is too high!"
    } else {
      message = "Correct, you got it!"
      this.setState({
      highscore: this.state.newHighscore-100,
      })
    }

    this.setState({
      message: message,
      guessesMade: totalGuesses,
    })
  }

  Standard(){
    let randomNum = Math.floor((Math.random()* 10) + 1);
    let instructions = this.state.instructions;
    this.setState({
      correctNum: randomNum,
      gamemode: "Standard",
      instructions: "Guess a number between 1 and 10",
      contentID: "",
    })
  }

  Expert(){
    let randomNum = Math.floor((Math.random()* 100) + 1);
    let instructions = this.state.instructions;
    this.setState({
      correctNum: randomNum,
      gamemode: "Expert",
      contentID: "",
      instructions: "Guess a number between 1 and 100",
    })
  }


  Reset(){
    this.setState({
      input: "",
      guessesMade: 0,
      highscore: 0,
      gamemode: "",
      correctNum: 0,
      message: "",
      contentID: "hidden",
      instructions: "",
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
            <p>{this.state.instructions}</p>
            <p className="message-wrong">{this.state.message}</p>
            
            <label for="guess">Your Guess: <input type="guess" id="guess" name="guess" placeholder="Guess" onChange={this.getUserInput} onClick={this.Guess} required=""/></label>
            
            <div id="response"></div>
            
            <p className="totalGuesses">Total guesses:</p>
            <p className="number-guesses">{this.state.guessesMade}</p>
            <p className="highschore">Highscore</p>
            <p className="highscore-number">{this.state.highscore}</p>
            
            <div>
              <input id="btn-submit" onClick={this.state.guessesMade} onClick={this.handleUserInput} type="submit" name="submit" value="Submit"/>
              <input id="btn-reset" onClick={this.Reset} type="reset" name="reset" value="Reset"/>
            </div>
            <div className="background-image">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
