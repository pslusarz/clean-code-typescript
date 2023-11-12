Implement a game of tic-tac-toe. 

Start small
===========
Instantiate a game board.
Each square on the 3x3 board is assigned a number from left to right and from top to bottom. 
Select a move by indicating the square number to place the piece.
When a player gets 3 in a row, the game is finished.

Introduce players
=================
You will need a game engine that will hold reference to two agent objects and a game board.
The engine will query one player at a time what move to make, and execute that move on the board.
Once game is over, display who won and exit.

Introduce an interactive game
=============================
One of the agents is a human, taking input from the console.
Display the board state before human makes a move.
Ignore invalid moves, just redisplay the board.
