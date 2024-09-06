### By Aboyade Matthew

# _Pig Dice + AI_


## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Description](#description)
- [How to play](#play)
- [Features](#features)
- [License](#license)
- [Contact](#contact)






## Technologies
```bash
* GIT
* CSS
* HTML
* JAVASCRIPT
* JQUARY
* Googlefont
```

## Description

 _This is a simple two-player dice game where each player rolls a virtual die to accumulate points. The first player to reach a specific score (e.g., 10) wins the game. The game includes some visual effects and logic for controlling player turns, score updates, and dice rolling animations. There is also an AI rolling feature that rolls the dice automatically. This is a JavaScript-based turn-based dice game for two players, where each player rolls a die to accumulate points. Players take turns rolling the die, and if they roll a 1, their turn ends without adding points. Players can "bank" their scores by saving them, and the first player to reach the winning score (default is 10 points) wins the game._

#### The game includes:
* Dice roll animations using CSS 3D transformations.
* Score tracking for both players.
* A simple AI player for automated rolls.
* Special effects when there’s a significant score difference.
* A reset function to restart the game at any time.

## Features

* Two-player game.
* Players take turns rolling a die.
* Dice rolling animations.
* Score accumulation system.
* AI-controlled rolling option.
* Game reset and score comparison.
* Win condition with a threshold (e.g., 10 points).
* Special effects when there is a significant score difference.
 
 
## HTML Elements
### Buttons: These buttons control the flow of the game.
```bash
"#roll": Button for rolling the dice.

* reset: Button for resetting the game
* save: Button for saving the score after a turn.
Score Elements:

* score1: Displays Player 1’s current score
* score2: Displays Player 2’s current score.

"#count": Displays the current dice roll score.
Player Input:

* "#player1": Player 1's username.
* "#player2": Player 2's username.

Other Elements:

* playerSwitch: Stores the value representing which player’s turn it is (1 or 2).
* "#cube": The dice element where rotations and animations happen.
* effect: Display area for special effects during the game.
```

## Functions
### Game Functions


```bash
"startGame():"
* Starts the game by hiding the initial input section and removing certain classes to transition to the game phase.

"game():"
* Constructor function to create a game object. Each game object holds the player information and records.

"Player(username):"
* Constructor function to create a player object. Each player object contains a username and a score.

"dieNumber():"
* Generates a random number between 1 and 6 (the dice roll result).

"addPlayer(player):"
* Adds a player to the game object.

"findPlayer(username):"
* Finds a player by their username in the current game session.
Turn Management Functions

"saveSWichplayer():"
* Saves the current player’s score and switches turns between Player 1 and Player 2.

"rollOneSwitch():"
* Rolls the dice for the current player, updates the score, and switches turns if necessary.

"rollAI():"
* Handles AI-controlled dice rolling. AI rolls until it meets certain conditions, such as reaching a threshold score or rolling a 1.

"saveSWichplayer2():"
* Saves the score and switches turns between Player 1 and Player 2 when AI is involved.

"rollOneSwitch2():"
* Alternative method for handling dice rolls in the AI game mode.
```

# Play
## How to Play

* Enter the names for Player 1 and Player 2.
* Click the Roll button to roll the die.
* The die will display a random number between 1 and 6, and the current player’s score will be updated.
* Players take turns, and their scores are displayed on the screen.
* The first player to reach the goal (e.g., 100 points) wins.
* Special effects are triggered if the score difference exceeds a certain threshold (e.g., 20 points).
* You can reset the game by clicking the Reset button.
* Play swiches turn if any of the players roll 1 and score wont be recorded.
* Play swiches turn if any of the players click save and score will be recorded.
* It is advised not to be greedy click save as soon as you get up to 15.

## AI Functionality

* The AI rolls automatically with a delay and attempts to accumulate points. It will stop rolling once it meets certain conditions (e.g., total score reaches a threshold or it rolls a 1).

## Customization
#### You can easily modify the following:

* Winning Score: Change the goal variable in the completeGame() function.
* Effect Triggers: Adjust the effectFigure or conditions in the effectTimer() function to change when visual effects are shown.
* AI Behavior: Modify the AI rolling logic in rollAI() to change how the AI makes decisions.

## Credits
* Dice rolling animation inspired by common dice rotation techniques.
* Special effects using simple GIFs and fade animations in jQuery.


#### Enjoy the game!

## Installation

### Clone to system
```bash
# Repository Address

git clone https://github.com/martic01/pigdice.git
```
### Navigate to top directory
```bash
# Project Name

cd pigdice

```
### Open the application

```bash
# Open file

Open index.html in your web browser to use the application.
```


## Known Bugs
* All record will be lost when you refresh

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

```bash

* Phone no : 09125701625

     *   GMAIL    *
```
 aboyadematthew2@gmail.com