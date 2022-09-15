module.exports = (sequelize, DataTypes) => {
    const attendance = sequelize.define(
      'attendance',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        available: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        tableName: 'attendances',
      }
    );
    attendance.associate = function (models) {
        
      attendance.hasMany(models.attendanceFault, {
        as: 'attendanceFaults',
        foreignKey: 'attendanceId',
      });
    };
    return attendance;
  };