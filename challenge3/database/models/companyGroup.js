module.exports = (sequelize, DataTypes) => {
    const companyGroup = sequelize.define(
      'companyGroup',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        name: DataTypes.STRING,
        subGroupId: {
            type:DataTypes.INTEGER,
            allowNull: true,
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
        tableName: 'companyGroups',
      }
    );
    companyGroup.associate = function (models) {
        
        companyGroup.hasMany(models.companyGroup, {
        as: 'subGroups',
        foreignKey: 'subGroupId',
      });

      companyGroup.hasMany(models.people, {
        as: 'peoples',
        foreignKey: 'companyGroupId',
      });
    };
    return companyGroup;
  };