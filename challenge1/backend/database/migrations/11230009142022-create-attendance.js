module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('attendances', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          available: { type: Sequelize.STRING },
          employeeId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          scheduleId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('attendances', [
            {
              id: 1,
              available: "true",
              employeeId: 1,
              scheduleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('attendances');
    },
  };
  