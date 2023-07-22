const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class weather extends Model {}
//Sequelize will create this table if it doesn't exist on
weather.init(
  {
    city: {type: DataTypes.STRING, allowNull: false, required: true},
    temperature: {type: DataTypes.FLOAT, allowNull: false, required: true},
    condition: {type: DataTypes.STRING, allowNull: false, required: true},
  },
  {
    sequelize: sequelizeInstance,
    modelName: "weather",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = weather;
