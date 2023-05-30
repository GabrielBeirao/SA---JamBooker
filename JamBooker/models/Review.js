import { Sequelize } from 'sequelize';
import connection from '../config/db.js';
import Studio from './Studio.js';
import User from './User.js';

const Review = connection.define(
    'review',
     {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
            
        },
 
        idRestaurant: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'studios',
                key: 'id'
            }
            
        },
        stars: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        comment: {
            type: Sequelize.STRING,
            allowNull: false
        }

     }
);
Review.belongsTo(Studio, {
    foreignKey: 'idStudio'
});

Review.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Review;