# Random Numbers in p.5

Randomness is a key component of many software applications. Think about something as simple as a game of Tetris.

![](tetris.gif)

The game needs to always (1) generate a random shape and (2) generate a random position on the screen for the shape to appear at. Without this randomnes, the game would be far less fun!

## Task
Today we will be learning how to use the [`p5` function `random()`](https://p5js.org/reference/#/p5/random).

The `random()` function accepts a MIN and MAX value and produces a random number between these two numbers that is inclusive of the MIN and exclusive of the MAX.

**GOAL**: Using previous skills and our new `random` function, Generate the image shown to the below. The final image should:
- Randomly draw an ellipse at an x and y position
- Randomly change the R, G, and/or B values 
- BONUS: Make the circles transparent.

![](FinalImage.gif)