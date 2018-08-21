export default function (sequelize, DataTypes) {
    return sequelize.define('personnelTable', {
        id: {
            type: DataTypes.INTEGER(11), // 字段类型
            allowNull: false, // 是否允许为NULL
            primaryKey: true, // 主键
            autoIncrement: true // 是否自增
        },
        username: {
            type: DataTypes.CHAR(45), // 最大长度为50的字符串
            allowNull: false
        },
        sex: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        state: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        interest: {
            type: DataTypes.CHAR(45)
        },
        isMarried: {
            type: DataTypes.CHAR(45)
        },
        birthday: {
            type: DataTypes.DATE(),
            allowNull: false
        },
        address: {
            type: DataTypes.CHAR(128),
            allowNull: false
        },
        time: {
            type: DataTypes.CHAR(45)
        }
    }, {
            tableName: 'personnelTable' // 表名
        })
};
