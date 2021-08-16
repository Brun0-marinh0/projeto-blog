const Sequelize = require("sequelize");

const connection = new Sequelize('blognode','bruno_03','12345',{
    host:'192.168.2.77',
    dialect: 'mysql',  
});

module.exports = connection;