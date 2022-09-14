module.exports = (sequelize, DataTypes) => {
    const company = sequelize.define(
      'company',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: false,
          primaryKey: true,
        },
        name: DataTypes.STRING,
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
        tableName: 'companies',
      }
    );

    company.associate = function (models) {
        
        company.hasMany(models.location, {
        as: 'locations',
        foreignKey: 'companyId',
      });

        company.hasMany(models.asset, {
        as: 'assets',
        foreignKey: 'companyId',
    });
        company.hasMany(models.people, {
        as: 'peoples',
        foreignKey: 'companyId',
      });

       company.hasMany(models.companyGroup, {
        as: 'companyGroups',
        foreignKey: 'companyId',
      });
    };
    return company;
  };