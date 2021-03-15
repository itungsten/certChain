# Cert-Chain
test_chain for crypto2021 developed by web3.js and node.js

------

### 环境部署

 1. node v8.12.0 with npm v6.4.1（未在其他版本测试）

    

 2. 以项目目录为工作目录

    直接执行 `npm install`

    或

    ```cmd
    npm install web3@0.20.7
    npm install ganache-cli@6.1.8
    ```

    （注：可能需要科学上网或者使用镜像。）
    
    ```cmd
    //使用镜像  https://registry.npmjs.org/
    npm config set registry https://repo.huaweicloud.com/repository/npm/
    npm config set registry https://registry.npm.taobao.org
    npm cache clean -f
    ```
    
    

### 文件说明

1. `ca.sol` 由`solidity`编写的智能合约的源文件
2. `setup.js` 在链上部署智能合约的安装部署文件
3. `set.js` 修改证书字典的脚本
4. `get.js` 读取证书字典的脚本
5. `utils.js`  项目常用工具函数
6. `config.js` `node.js`项目的配置文件
7. `run.cmd` ganache-cli启动脚本

### 使用方法

1. 启动`ganache-cli`测试链

   双击`run.cmd`

   ![1](pics\1.png)

2. 在测试链上部署智能合约

   以项目文件夹为工作目录，执行`node setup.js`

   ![2](pics\2.png)

3. 测试`set`方法

   以项目文件夹为工作目录，执行`node set.js <email> <cert>`

   ![3](pics\3.png)

4. 测试`get`方法

   以项目文件夹为工作目录，执行`node get.js <email>`

   ![4](pics\4.png)

   ![5](pics\5.png)