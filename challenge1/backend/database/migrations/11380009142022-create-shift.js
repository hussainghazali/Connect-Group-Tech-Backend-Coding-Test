module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('shifts', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          startTime: { type: Sequelize.STRING },
          endTime: { type: Sequelize.STRING },
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('shifts', [
            {
              id: 1,
              startTime: '09:00 AM',
              endTime: '17:00 PM',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('shifts');
    },
  };
  