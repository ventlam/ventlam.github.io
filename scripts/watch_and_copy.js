const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

// 配置
const config = {
    sourceDir: '../source/_posts/raw',  // 源目录
    targetDir: '../source/_posts',      // 目标目录
    processedFiles: new Set(),          // 用于记录已处理的文件
    maxAge: 30 * 24 * 60 * 60 * 1000   // 30天的毫秒数
};

// 确保目标目录存在
if (!fs.existsSync(config.targetDir)) {
    fs.mkdirSync(config.targetDir, { recursive: true });
}

// 检查文件年龄
function checkFileAge(filePath) {
    try {
        const stats = fs.statSync(filePath);
        const age = Date.now() - stats.mtimeMs;
        return age;
    } catch (error) {
        console.error(`Error checking file age for ${filePath}:`, error);
        return 0;
    }
}

// 初始化已处理文件列表
function initProcessedFiles() {
    const targetFiles = fs.readdirSync(config.targetDir)
        .filter(file => file.endsWith('.md'));
    
    targetFiles.forEach(file => {
        const filePath = path.join(config.targetDir, file);
        const age = checkFileAge(filePath);
        
        if (age > config.maxAge) {
            console.warn(`警告: 文件 ${file} 已经超过30天未更新！`);
            console.warn(`最后修改时间: ${new Date(Date.now() - age).toLocaleString()}`);
        }
        
        config.processedFiles.add(file);
    });
}

// 复制文件
function copyFile(sourcePath, targetPath) {
    const content = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(targetPath, content);
    console.log(`Copied: ${path.basename(sourcePath)}`);
}

// 处理新文件
function handleNewFile(filePath) {
    const fileName = path.basename(filePath);
    const targetPath = path.join(config.targetDir, fileName);
    
    // 如果目标文件存在，检查其年龄
    if (fs.existsSync(targetPath)) {
        const age = checkFileAge(targetPath);
        if (age > config.maxAge) {
            console.warn(`警告: 目标文件 ${fileName} 已经超过30天未更新！`);
            console.warn(`最后修改时间: ${new Date(Date.now() - age).toLocaleString()}`);
            console.warn('停止复制操作！');
            return;
        }
    }
    
    // 如果文件已经处理过，跳过
    if (config.processedFiles.has(fileName)) {
        console.log(`Skipping already processed file: ${fileName}`);
        return;
    }

    copyFile(filePath, targetPath);
    config.processedFiles.add(fileName);
}

// 初始化
initProcessedFiles();

// 设置文件监控
const watcher = chokidar.watch(config.sourceDir, {
    ignored: /(^|[\/\\])\../, // 忽略隐藏文件
    persistent: true
});

// 监听事件
watcher
    .on('add', path => handleNewFile(path))
    .on('error', error => console.error(`Watcher error: ${error}`));

console.log(`Watching for new markdown files in ${config.sourceDir}`); 