module.exports = (sequelize, DataTypes) => {
    const schedule = sequelize.define(
      'schedule',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        day: DataTypes.STRING,
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
        tableName: 'schedules',
      }
    );

    schedule.associate = function (models) {
        
      schedule.hasMany(models.attendance, {
        as: 'attendances',
        foreignKey: 'scheduleId',
      });
    };
    return schedule;
  };