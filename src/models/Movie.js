const Sequelize = require('sequelize');

class Movie extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rating: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: true,
    });
  }
}

module.exports = Movie;

