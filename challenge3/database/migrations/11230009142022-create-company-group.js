module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('companyGroups', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          name: { type: Sequelize.STRING },
          subGroupId: { type: Sequelize.INTEGER, autoIncrement: false},
          companyId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('companyGroups', [
            {
              id: 1,
              name: 'Development Group',
              subGroupId: null,
              companyId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'Frontend Sub-Group',
                subGroupId: 1,
                companyId: null,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              {
                id: 3,
                name: 'Backend Sub-Group',
                subGroupId: 1,
                companyId: null,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('companyGroups');
    },
  };
  