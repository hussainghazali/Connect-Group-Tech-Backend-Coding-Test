module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('locations', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          country: { type: Sequelize.STRING },
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('locations', [
            {
              id: 1,
              country: 'Pakistan',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('locations');
    },
  };
  