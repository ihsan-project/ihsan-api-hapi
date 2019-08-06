'use strict';

const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class User extends Schwifty.Model {

    static get tableName() {

        return 'Users';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            firstName: Joi.string().required(),
            lastName: Joi.string(),
            email: Joi.string().email().required(),
            username: Joi.string().required(),
            password: Joi.binary()
        });
    }
};