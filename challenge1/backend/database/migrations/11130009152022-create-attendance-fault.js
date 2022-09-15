module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface
        .createTable('attendanceFaults', {
          id: { type: Sequelize.INTEGER, autoIncrement: false, primaryKey: true },
          workingHours: { type: Sequelize.STRING },
          employeeId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          attendanceId: { type: Sequelize.INTEGER, autoIncrement: false, allowNull: true},
          createdAt: { type: Sequelize.DATE, allowNull: true },
          updatedAt: { type: Sequelize.DATE, allowNull: true },
        })
        .then(() => {
          queryInterface.bulkInsert('attendanceFaults', [
            {
              id: 1,
              workingHours: '8 hours',
              employeeId: 1,
              attendanceId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]);
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('attendanceFaults');
    },
  };
  