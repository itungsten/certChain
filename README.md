# Cert-Chain
test_chain for crypto2021 developed by web3.js and node.js

------

### 环境部署

 1. node v8.12.0 with npm v6.4.1（未在其他版本测试）

 2. ```node
    npm install web3@0.20.7
    npm install sloc@0.4.25
    npm install ganache-cli@6.1.8
    ```

### 文件说明

1. `ca.sol` 由`solidity`编写的智能合约的源文件
2. `setup.js` 在链上部署智能合约的安装部署文件
3. `set.js` 修改证书字典的脚本
4. `get.js` 读取证书字典的脚本
5. `utils.js`  项目常用工具函数
6. `config.js` `node.js`项目的配置文件

### 使用方法

1. 启动`ganache-cli`测试链

   ![1](pics\1.png)

2. 在测试链上部署智能合约

   ![2](pics\2.png)

3. 测试`set`方法

   ![3](pics\3.png)

4. 测试`get`方法

   ![4](pics\4.png)

   ![5](pics\5.png)