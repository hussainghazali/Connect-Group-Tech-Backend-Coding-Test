module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('employees', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          name: { type: Sequelize.STRING },
          employeeId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('employees', [
            {
              id: 1,
              name: 'Hussain Ghazali',
              employeeId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('employees');
    },
  };
  