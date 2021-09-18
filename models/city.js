const Sequelize = require('sequelize');

/**
 * This command is used to create the model.
 * sequelize-auto -o "./models" -d world -h localhost -u root -x root -e mysql -C -t TABLE_NAME --noInitModels

 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('city', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.CHAR(35),
      allowNull: false,
      defaultValue: ""
    },
    CountryCode: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: "",
      references: {
        model: 'country',
        key: 'Code'
      }
    },
    District: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ""
    },
    Population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'city',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "CountryCode",
        using: "BTREE",
        fields: [
          { name: "CountryCode" },
        ]
      },
    ]
  });
};
