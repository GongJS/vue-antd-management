export default function (sequelize, DataTypes) {
    return sequelize.define('basicTable', {
        id: {
            type: DataTypes.INTEGER(11), // 字段类型
            allowNull: false, // 是否允许为NULL
            primaryKey: true, // 主键
            autoIncrement: true // 是否自增
        },
        userName: {
            type: DataTypes.CHAR(45), // 最大长度为50的字符串
            allowNull: false
        },
        sex: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        state: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        interest: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        isMarried: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        birthday: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        address: {
            type: DataTypes.CHAR(128),
            allowNull: false
        },
        time: {
            type: DataTypes.CHAR(45),
            allowNull: false
        }
    }, {
            tableName: 'basicTable' // 表名
        })
};
