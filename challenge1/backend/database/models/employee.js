module.exports = (sequelize, DataTypes) => {
    const employee = sequelize.define(
      'employee',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        name: DataTypes.STRING,
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
        tableName: 'employees',
      }
    );
    employee.associate = function (models) {
        
      employee.hasMany(models.attendanceFault, {
      as: 'attendanceFaults',
      foreignKey: 'employeeId',
    });

    employee.hasMany(models.attendance, {
      as: 'attendances',
      foreignKey: 'employeeId',
    });

    employee.belongsTo(models.schedule, {
      as: 'schedules',
      foreignKey: 'employeeId',
    });  
  };
    return employee;
  };