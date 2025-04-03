const { execSync } = require('child_process');
const path = require('path');

// 执行命令的函数
function executeCommand(command) {
    try {
        console.log(`Executing: ${command}`);
        execSync(command, { stdio: 'inherit' });
        console.log(`Successfully executed: ${command}`);
    } catch (error) {
        console.error(`Error executing ${command}:`, error);
        process.exit(1);
    }
}

// 部署流程
function deploy() {
    // 切换到项目根目录
    process.chdir(path.join(__dirname, '..'));

    // 清理
    executeCommand('hexo clean');

    // 生成静态文件
    executeCommand('hexo generate');

    // 部署
    executeCommand('hexo deploy');

    console.log('Deployment completed successfully!');
}

// 执行部署
deploy(); 