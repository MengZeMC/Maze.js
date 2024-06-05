# Maze.js

This is a simple JavaScript maze generator implemented using a recursive segmentation algorithm. The generator generates the maze as a two-dimensional array of two emojis.

## How to use
First you need to install the project, Clone repository:
```shell
git clone https://github.com/MengZeMC/Maze.js
` ` `
Then go to the project directory:
```shell
cd Maze.js
` ` `
Start using items:
Make sure seedrandom is installed. You can install it via npm:

```bash
npm i
` ` `
To start the maze, use the following command directly to start the maze
```shell
node Maze.js
` ` `

## Instantiation Maze (Deep Development)
Create an instance of the 'Maze' class by providing the desired width, height, and seed (optional). For example:

```javascript
const seedrandom = require('seedrandom');
const Maze = require('./Maze');

// Generate a random seed
const randomSeed = Math.floor(Math.random() * 1000000);

// Create a maze with a width of 35 and a height of 20 and use random seeds
const maze = new Maze(35, 20, randomSeed.toString());
` ` `

1. ** generate a maze ** : Call the 'generate()' method of the maze instance to generate a maze.

```javascript
maze.generate();
` ` `

2. ** Show the maze ** : Use the 'toString()' method to get a string representation of the maze.

```javascript
console.log(' Maze :');
console.log(maze.toString());
` ` `

3. ** Get a unique identifier ** : If needed, you can get a unique identifier (seed) for generating the maze.

```javascript
console.log(' Maze unique identifier :', randomSeed);
` ` `

#### Maze class

The 'Maze' class provides the following methods:

- 'constructor(width, height, seed)' : initializes a new maze with the specified width, height, and optional seed.
- 'generate()' : Generates a maze using a recursive segmentation algorithm.
- 'toString()' : returns a string representation of the maze.
- 'findDeadEnds(x, y)' : Finds all dead ends in the maze.
- 'removeDeadEnds()' : Removes dead ends from the maze to create more complex structures.

#### Example

```javascript
const seedrandom = require('seedrandom');
const Maze = require('./Maze');

// Generate a random seed
const randomSeed = Math.floor(Math.random() * 1000000);

// Create a maze with a width of 35 and a height of 20 and use random seeds
const maze = new Maze(35, 20, randomSeed.toString());

// Generate a maze
maze.generate();

// Show the maze
console.log(' Maze :');
console.log(maze.toString());

// Show the maze's unique identifier (seed)
console.log(' Maze unique identifier :', randomSeed);
` ` `

Feel free to customize the size of the maze as needed and try to generate unique mazes using different seeds.

## Update log:
-1.0.0: The first version was released with imperfect algorithms and many bugs
-1.0.1: Improved the algorithm, used emoji instead of characters, and added entrances and exits and clearance paths, so that the maze can be used normally
