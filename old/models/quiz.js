// const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define('quiz', {
        image: {
            type: Sequelize.STRING,
        },
        nomor: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        soal: {
            type: Sequelize.STRING,
        },
        a: {
            type: Sequelize.STRING,
        },
        b: {
            type: Sequelize.STRING,
        },
        c: {
            type: Sequelize.STRING,
        },
        d: {
            type: Sequelize.STRING,
        },
        key: {
            type: Sequelize.STRING,
        },
        categoryId: {
            type: Sequelize.STRING,
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'categories',
                key: 'id'
            }
        },
        pembahasan: {
            type: Sequelize.STRING,
        },
    });
    return Quiz;
}