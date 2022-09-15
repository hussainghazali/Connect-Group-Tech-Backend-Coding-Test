module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('schedules', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          day: { type: Sequelize.STRING },
          employeeId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          locationId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          shiftId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('schedules', [
            {
              id: 1,
              day: 'Monday',
              employeeId: 1,
              locationId: 1,
              shiftId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('schedules');
    },
  };
  