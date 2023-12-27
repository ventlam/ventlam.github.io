---
title: Hexo 版本升级
categories: Hexo
date: 2023-12-25
tags: 
    - hexo
---
### 
- 以下指令均在Hexo目录下操作，先定位到Hexo目录  
- 查看当前版本，判断是否需要升级  
```sh
hexo version
```

  
### 全局升级hexo-cli  
```sh
npm i hexo-cli -g 
```
 
  
### 再次查看版本，看hexo-cli是否升级成功  
```sh
hexo version
```

### 安装npm-check，若已安装可以跳过  

```sh
npm install -g npm-check 
```

### 检查系统插件是否需要升级  
```sh
npm-check  
```
 
### 安装npm-upgrade，若已安装可以跳过  

```sh
npm install -g npm-upgrade  
```

### 更新package.json  

```sh
npm-upgrade  
``` 
### 更新全局插件  
```sh
npm update -g  
``` 
### 更新系统插件  
```sh
npm update --save  
```

### 再次查看版本，判断是否升级成功  
```sh
hexo version
```