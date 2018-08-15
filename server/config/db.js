const Sequelize = require('sequelize'); // 引入sequelize

// 使用url连接的形式进行连接
const Management = new Sequelize('mysql://root:778899@localhost/Management',{
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})

module.exports = {
  Management // 将Management暴露出接口方便Model调用
}
