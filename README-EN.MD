# Maze.js

This is a simple JavaScript maze generator implemented using the recursive division algorithm. The generator produces a maze as a two-dimensional array of two emojis.

## Usage
First, install the project by cloning the repository:
```shell
git clone https://github.com/MengZeMC/Maze.js
```
Then navigate to the project directory:
```shell
cd Maze.js
```
To start using the project:
Ensure `seedrandom` is installed. You can install it via npm:
```bash
npm i
```
Start the maze by directly running the following command:
```shell
node Maze.js
```

## Instantiate a Maze (Advanced Usage)
Create an instance of the `Maze` class by providing the desired width, height, and seed (optional). For example:
```javascript
const seedrandom = require('seedrandom');
const Maze = require('./Maze');

// Generate a random seed
const randomSeed = Math.floor(Math.random() * 1000000);

// Create a maze with width 35, height 20, and using a random seed
const maze = new Maze(35, 20, randomSeed.toString());
```

1. **Generate the Maze**: Call the `generate()` method of the maze instance to generate the maze.
```javascript
maze.generate();
```
2. **Display the Maze**: Use the `toString()` method to get a string representation of the maze.
```javascript
console.log('Maze:');
console.log(maze.toString());
```
3. **Get Unique Identifier**: If needed, you can obtain the unique identifier (seed) used to generate the maze.
```javascript
console.log('Maze Unique Identifier:', randomSeed);
```

#### Maze Class
The `Maze` class provides the following methods:

- `constructor(width, height, seed)`: Initialize a new maze with the specified width, height, and optional seed.
- `generate()`: Generate the maze using the recursive division algorithm.
- `toString()`: Return a string representation of the maze.
- `findDeadEnds(x, y)`: Find all dead ends in the maze.
- `removeDeadEnds()`: Remove dead ends from the maze to create more complex structures.

#### Example
```javascript
const seedrandom = require('seedrandom');
const Maze = require('./Maze');

// Generate a random seed
const randomSeed = Math.floor(Math.random() * 1000000);

// Create a maze with width 35, height 20, and using a random seed
const maze = new Maze(35, 20, randomSeed.toString());

// Generate the maze
maze.generate();

// Display the maze
console.log('Maze:');
console.log(maze.toString());

// Display the unique identifier (seed) of the maze
console.log('Maze Unique Identifier:', randomSeed);
```

Feel free to customize the size of the maze as needed and experiment with different seeds to generate unique mazes.

## Changelog:
- 1.0.0: Initial release, algorithm incomplete with many bugs.
- 1.0.1: Improved algorithm, replaced characters with emojis, added entrances, exits, and paths, making the maze fully functional.
