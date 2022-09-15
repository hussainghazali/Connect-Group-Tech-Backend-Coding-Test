module.exports = (sequelize, DataTypes) => {
    const location = sequelize.define(
      'location',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        country: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        tableName: 'locations',
      }
    );
    
    location.associate = function (models) {
        
      location.belongsTo(models.schedule, {
      as: 'schedules',
      foreignKey: 'locationId',
    });
  };
    return location;
  };