module.exports = (sequelize, DataTypes) => {
    const shift = sequelize.define(
      'shift',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        startTime: DataTypes.STRING,
        endTime: DataTypes.STRING,
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
        tableName: 'shifts',
      }
    );
    shift.associate = function (models) {
        
      shift.belongsTo(models.schedule, {
      as: 'schedules',
      foreignKey: 'shiftId',
    });
  };
    return shift;
  };