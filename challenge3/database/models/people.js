module.exports = (sequelize, DataTypes) => {
    const people = sequelize.define(
      'people',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        name: DataTypes.STRING,
        role: DataTypes.STRING,
        isCompanyGroupHead: {
            type: DataTypes.STRING,
            defaultValue: false,
          },
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
        tableName: 'peoples',
      }
    );
    
    return people;
  };