export default function (sequelize, DataTypes) {
    return sequelize.define('cityTable', {
        id: {
            type: DataTypes.INTEGER(11), // 字段类型
            allowNull: false, // 是否允许为NULL
            primaryKey: true, // 主键
            autoIncrement: true // 是否自增
        },
        name: {
            type: DataTypes.CHAR(45), // 最大长度为50的字符串
            allowNull: false
        },
        mode: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        op_mode: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        franchisee_name: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        city_admins: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        open_time: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        update_time: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        sys_user_name: {
            type: DataTypes.CHAR(45),
            allowNull: false
        },
        status: {
            type: DataTypes.CHAR(45),
            allowNull: false
        }
    }, {
            tableName: 'cityTable' // 表名
        })
};
