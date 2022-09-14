module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('peoples', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          name: { type: Sequelize.STRING },
          role: { type: Sequelize.STRING },
          isCompanyGroupHead: {type: Sequelize.STRING , allowNull: true},
          companyId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          companyGroupId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('peoples', [
            {
              id: 1,
              name: 'Hussain',
              role: 'Manager',
              isCompanyGroupHead: null,
              companyId: 1,
              companyGroupId: null,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'Ghazali',
                role: 'Employee',
                isCompanyGroupHead: 1,
                companyId: 1,
                companyGroupId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('peoples');
    },
  };
  