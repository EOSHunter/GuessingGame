# R7 repository context: Guessing Game

This repository contains a small React number-guessing game in `guessinggamefinal/`. `src/App.js` owns the game state, mode buttons, guess feedback, reset action, and on-screen counters. `src/App.css` styles it; `package.json` defines the Create React App scripts.

Standard picks a number from 1 to 10; Expert picks from 1 to 100. Submitting a guess reports too low, too high, or correct and increments the guess count. The displayed “Highscore” is set to 900 on a correct guess by subtracting 100 from a fixed 1000; it is not a persisted or comparative score.

This describes the `master` branch at `fca799aac41fbbc9c0e2982ad37e25401b67dbb2`. See [2017 changes](changes/2017-09.md) and [decisions](decisions.md). Runtime behavior has not been tested.
