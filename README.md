# Maze.js

这是一个使用递归分割算法实现的简单 JavaScript 迷宫生成器。该生成器将迷宫生成为两个emoji的二维数组。

## 使用方法
首先得安装项目，克隆版仓库：
```shell
git clone https://github.com/MengZeMC/Maze.js
```
然后进入项目目录：
```shell
cd Maze.js
```
开始使用项目：
 确保已安装 `seedrandom`。您可以通过 npm 安装它：

   ```bash
   npm i
   ```
启动迷宫，直接使用以下命令启动迷宫
```shell
node Maze.js
```

## 实例化迷宫(深度开发)
通过提供所需的宽度、高度和种子（可选）来创建 `Maze` 类的实例。例如：

   ```javascript
   const seedrandom = require('seedrandom');
   const Maze = require('./Maze');

   // 生成一个随机种子
   const randomSeed = Math.floor(Math.random() * 1000000);

   // 创建宽度为 35，高度为 20 的迷宫，并使用随机种子
   const maze = new Maze(35, 20, randomSeed.toString());
   ```

1. **生成迷宫**：调用迷宫实例的 `generate()` 方法来生成迷宫。

   ```javascript
   maze.generate();
   ```

2. **显示迷宫**：使用 `toString()` 方法获取迷宫的字符串表示形式。

   ```javascript
   console.log('迷宫:');
   console.log(maze.toString());
   ```

3. **获取唯一标识符**：如果需要，您可以获取用于生成迷宫的唯一标识符（种子）。

   ```javascript
   console.log('迷宫唯一标识符:', randomSeed);
   ```

#### 迷宫类

`Maze` 类提供以下方法：

- `constructor(width, height, seed)`: 使用指定的宽度、高度和可选的种子初始化新的迷宫。
- `generate()`: 使用递归分割算法生成迷宫。
- `toString()`: 返回迷宫的字符串表示形式。
- `findDeadEnds(x, y)`: 查找迷宫中的所有死胡同。
- `removeDeadEnds()`: 从迷宫中移除死胡同以创建更复杂的结构。

#### 示例

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

## 更新日志：
- 1.0.0：初代版本发布，算法不完善且bug多
- 1.0.1：完善了算法，使用emoji代替字符，并添加了出入口和通关路径，使迷宫可以正常使用
