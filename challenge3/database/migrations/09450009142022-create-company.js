module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('companies', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          name: { type: Sequelize.STRING },
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('companies', [
            {
              id: 1,
              name: 'CAREER CONSULTANTS (PVT.) LTD',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('companies');
    },
  };
  