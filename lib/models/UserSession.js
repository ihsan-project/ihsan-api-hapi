'use strict';

const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class UserSession extends Schwifty.Model {

    static get tableName() {

        return 'UserSessions';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            userId: Joi.number().integer().greater(0).required(),
            token: Joi.string().integer().required(),
            platform: Joi.string().integer().required(),
            createdAt: Joi.date().required(),
            expiresAt: Joi.date().required()
        });
    }

    static get relationMappings() {

        const User = require('./User');

        return {
            author: {
                relation: Schwifty.Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'UserSession.userId',
                    to: 'Users.id'
                }
            }
        };
    }
};