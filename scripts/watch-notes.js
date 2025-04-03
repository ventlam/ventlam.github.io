// const chokidar = require('chokidar');
// const fs = require('fs');
// const path = require('path');
// const { exec } = require('child_process');

// // 配置
// const config = {
//   // Obsidian 笔记目录
//   sourceDir: process.env.OBSIDIAN_DIR || '/Users/vent/github/obnotes/Just-In-Vent',
//   // Hexo 博客文章目录
//   targetDir: path.join(__dirname, '../source/_posts'),
//   // 忽略的文件和目录
//   ignored: /(^|[\/\\])\../,
//   // 文件扩展名
//   extensions: '.md'
// };

// // 确保目标目录存在
// if (!fs.existsSync(config.targetDir)) {
//   fs.mkdirSync(config.targetDir, { recursive: true });
// }

// // 初始化文件监控
// const watcher = chokidar.watch(config.sourceDir, {
//   ignored: config.ignored,
//   persistent: true
// });

// // 执行 Hexo 命令的函数
// const runHexoCommand = (command) => {
//   return new Promise((resolve, reject) => {
//     console.log(`执行命令: ${command}`);
//     exec(command, { cwd: path.join(__dirname, '..') }, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`执行错误: ${error}`);
//         console.error(`错误输出: ${stderr}`);
//         reject(error);
//         return;
//       }
//       console.log(`命令输出: ${stdout}`);
//       resolve(stdout);
//     });
//   });
// };

// // 处理文件变化
// const handleFileChange = async (filePath) => {
//   if (!filePath.endsWith(config.extensions)) return;
  
//   const fileName = path.basename(filePath);
//   const targetPath = path.join(config.targetDir, fileName);
  
//   try {
//     // 复制文件
//     fs.copyFileSync(filePath, targetPath);
//     console.log(`已复制: ${fileName}`);
    
//     // 生成和部署
//     try {
//       await runHexoCommand('hexo clean');
//       await runHexoCommand('hexo generate');
//       await runHexoCommand('hexo deploy');
//       console.log(`部署成功: ${fileName}`);
//     } catch (error) {
//       console.error(`Hexo 命令执行失败: ${error}`);
//     }
//   } catch (error) {
//     console.error(`处理文件时出错: ${error}`);
//   }
// };

// // 监听事件
// watcher
//   .on('add', handleFileChange)
//   .on('change', handleFileChange)
//   .on('unlink', async (filePath) => {
//     if (!filePath.endsWith(config.extensions)) return;
//     const fileName = path.basename(filePath);
//     const targetPath = path.join(config.targetDir, fileName);
    
//     try {
//       fs.unlinkSync(targetPath);
//       console.log(`已删除: ${fileName}`);
      
//       // 重新生成和部署
//       try {
//         await runHexoCommand('hexo clean');
//         await runHexoCommand('hexo generate');
//         await runHexoCommand('hexo deploy');
//         console.log(`部署成功: ${fileName}`);
//       } catch (error) {
//         console.error(`Hexo 命令执行失败: ${error}`);
//       }
//     } catch (error) {
//       console.error(`删除文件时出错: ${error}`);
//     }
//   });

// console.log(`开始监控目录: ${config.sourceDir}`); 