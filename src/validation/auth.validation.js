import joi from 'joi';

export const ValidateSignup = (userData) => {
    const Schema = joi.object({
        fullName: joi.string().required().min(5),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        address: joi.array().items(joi.object({ detail: joi.string(), for: joi.string() })),
        phoneNumber: joi.array().items(joi.number().min(10).max(10)),
    });

    return Schema.validateAsync(userData);
};

export const ValidateSignin = (userData) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });

    return Schema.validateAsync(userData);
};