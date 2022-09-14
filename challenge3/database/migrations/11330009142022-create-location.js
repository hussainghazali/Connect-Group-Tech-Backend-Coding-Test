module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('locations', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          country: { type: Sequelize.STRING },
          companyId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('locations', [
            {
              id: 1,
              country: 'Pakistan',
              companyId: 1,
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
  