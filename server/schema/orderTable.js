export default function (sequelize, DataTypes) {
    return sequelize.define('orderTable', {
        id: {
            type: DataTypes.INTEGER(11), // 字段类型
            allowNull: false, // 是否允许为NULL
            primaryKey: true, // 主键
            autoIncrement: true // 是否自增
        },
        city: {
            type: DataTypes.CHAR(45), // 最大长度为45的字符串
            allowNull: false
        },
        order_sn: {
            type: DataTypes.CHAR(45), // 最大长度为45的字符串
            allowNull: false
        },
        bike_sn: {
            type: DataTypes.CHAR(45), // 最大长度为45的字符串
            allowNull: false
        },
        user_name: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        mobile: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        distance: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        total_time: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        status: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        start_time: {
            type: DataTypes.DATE(),
            allowNull: false
        },
        end_time: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        total_fee: {
            type: DataTypes.CHAR(45),
            allowNull: false
        }
    }, {
            tableName: 'orderTable' // 表名
        })
};
