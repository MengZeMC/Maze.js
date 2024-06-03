# Maze.js
这是一个使用递归分割算法实现的简单 JavaScript 迷宫生成器。该生成器将迷宫生成为一个字符的二维数组，其中 `' '` 表示通道，`'#'` 表示墙壁。

## 使用方法

要使用迷宫生成器，请按照以下步骤进行：

1. **实例化迷宫**：通过提供所需的宽度、高度和种子（可选）来创建 `Maze` 类的实例。例如：

   ```javascript
   const seedrandom = require('seedrandom');
   const Maze = require('./Maze');

   // 生成一个随机种子
   const randomSeed = Math.floor(Math.random() * 1000000);

   // 创建宽度为 35，高度为 20 的迷宫，并使用随机种子
   const maze = new Maze(35, 20, randomSeed.toString());
   ```

2. **生成迷宫**：调用迷宫实例的 `generate()` 方法来生成迷宫。

   ```javascript
   maze.generate();
   ```

3. **显示迷宫**：使用 `toString()` 方法获取迷宫的字符串表示形式。

   ```javascript
   console.log('迷宫:');
   console.log(maze.toString());
   ```

4. **获取唯一标识符**：如果需要，您可以获取用于生成迷宫的唯一标识符（种子）。

   ```javascript
   console.log('迷宫唯一标识符:', randomSeed);
   ```

## 迷宫类

`Maze` 类提供以下方法：

- `constructor(width, height, seed)`: 使用指定的宽度、高度和可选的种子初始化新的迷宫。
- `generate()`: 使用递归分割算法生成迷宫。
- `toString()`: 返回迷宫的字符串表示形式。
- `findDeadEnds(x, y)`: 查找迷宫中的所有死胡同。
- `removeDeadEnds()`: 从迷宫中移除死胡同以创建更复杂的结构。

## 示例

```javascript
const seedrandom = require('seedrandom');
const Maze = require('./Maze');

// 生成一个随机种子
const randomSeed = Math.floor(Math.random() * 1000000);

// 创建宽度为 35，高度为 20 的迷宫，并使用随机种子
const maze = new Maze(35, 20, randomSeed.toString());

// 生成迷宫
maze.generate();

// 显示迷宫
console.log('迷宫:');
console.log(maze.toString());

// 显示迷宫的唯一标识符（种子）
console.log('迷宫唯一标识符:', randomSeed);
```

随时根据需要自定义迷宫的尺寸，并尝试使用不同的种子生成独特的迷宫。
