// Creating our Score model
module.exports = function (sequelize, DataTypes) {
    var Score = sequelize.define('Score', {
      // The email cannot be null, and must be a proper email before creation
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The password cannot be null
      score: {
        type: DataTypes.INTEGER
      }
    });
  
    return Score;
  };