const seedrandom = require('seedrandom');

class Maze {
  constructor(width, height, seed) {
    this.width = width;
    this.height = height;
    this.seed = seed;
    this.maze = [];
    this.rng = seedrandom(seed);

    // 初始化迷宫二维数组
    for (let i = 0; i < height; i++) {
      this.maze[i] = [];
      for (let j = 0; j < width; j++) {
        this.maze[i][j] = '🏢'; // 初始化为墙壁
      }
    }

    // 生成迷宫
    this.generate();
  }

  generate() {
    this.divide(0, 0, this.width - 1, this.height - 1);
    this.removeDeadEnds();
    this.connectEntranceAndExit();
  }

  divide(x, y, width, height) {
    if (width < 2 || height < 2) {
      return;
    }

    let vertical = width > height;
    if (vertical) {
      let wallX = x + Math.floor(this.rng() * (width - 2)) + 1;
      for (let i = y; i < y + height; i++) {
        this.maze[i][wallX] = '  ';
      }
      let passageY = y + Math.floor(this.rng() * height);
      this.maze[passageY][wallX] = '  ';
      this.divide(x, y, wallX - x, height);
      this.divide(wallX + 1, y, x + width - wallX - 1, height);
    } else {
      let wallY = y + Math.floor(this.rng() * (height - 2)) + 1;
      for (let i = x; i < x + width; i++) {
        this.maze[wallY][i] = '  ';
      }
      let passageX = x + Math.floor(this.rng() * width);
      this.maze[wallY][passageX] = '  ';
      this.divide(x, y, width, wallY - y);
      this.divide(x, wallY + 1, width, y + height - wallY - 1);
    }
  }

  removeDeadEnds() {
    let deadEnds = this.findDeadEnds();
    while (deadEnds.length > 0) {
      let deadEnd = deadEnds.pop();
      let [x, y] = deadEnd;
      this.maze[y][x] = '🏢';
      let directions = this.shuffleDirections();
      for (let dir of directions) {
        let nx = x + dir[0];
        let ny = y + dir[1];
        if (this.isInBounds(nx, ny) && this.maze[ny][nx] === '  ') {
          let nextDeadEnds = this.findDeadEnds(nx, ny);
          if (nextDeadEnds.length === 1) {
            this.maze[y][x] = '  ';
            break;
          }
        }
      }
    }
  }

  findDeadEnds(x = 0, y = 0) {
    let deadEnds = [];
    for (let i = y; i < this.height; i++) {
      for (let j = x; j < this.width; j++) {
        if (this.maze[i][j] === '  ') {
          let exits = 0;
          for (let dir of this.directions) {
            let nx = j + dir[0];
            let ny = i + dir[1];
            if (this.isInBounds(nx, ny) && this.maze[ny][nx] === '  ') {
              exits++;
            }
          }
          if (exits === 1) {
            deadEnds.push([j, i]);
          }
        }
      }
    }
    return deadEnds;
  }

  isInBounds(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  shuffleDirections() {
    let directions = [...this.directions];
    for (let i = directions.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [directions[i], directions[j]] = [directions[j], directions[i]];
    }
    return directions;
  }

  connectEntranceAndExit() {
    let entranceX = 0;
    let entranceY = Math.floor(this.rng() * this.height);
    this.maze[entranceY][entranceX] = '🚪';

    let exitX = this.width - 1;
    let exitY = Math.floor(this.rng() * this.height);
    this.maze[exitY][exitX] = '🚪';

    while (entranceX !== exitX || entranceY !== exitY) {
      if (entranceX < exitX) {
        entranceX++;
      } else if (entranceX > exitX) {
        entranceX--;
      }
      if (entranceY < exitY) {
        entranceY++;
      } else if (entranceY > exitY) {
        entranceY--;
      }
      this.maze[entranceY][entranceX] = '  ';
    }
  }

  toString() {
    let mazeString = '';
    for (let row of this.maze) {
      mazeString += row.join('') + '\n';
    }
    return mazeString;
  }
}

Maze.prototype.directions = [
  [0, 1], // down
  [0, -1], // up
  [1, 0], // right
  [-1, 0] // left
];

const randomSeed = Math.floor(Math.random() * 1000000);
const maze = new Maze(35, 20, randomSeed.toString());
console.log('迷宫:');
console.log(maze.toString());
console.log('迷宫唯一识别号:', randomSeed);