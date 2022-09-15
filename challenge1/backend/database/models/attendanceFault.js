module.exports = (sequelize, DataTypes) => {
    const attendanceFault = sequelize.define(
      'attendanceFault',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        workingHours: DataTypes.STRING,
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
        tableName: 'attendanceFaults',
      }
    );

    return attendanceFault;
  };