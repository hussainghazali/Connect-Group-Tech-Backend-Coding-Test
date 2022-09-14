module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('assets', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          name: { type: Sequelize.STRING },
          companyId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('assets', [
            {
              id: 1,
              name: 'Stocks & Shares',
              companyId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'Gold Bars',
                companyId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('assets');
    },
  };
  