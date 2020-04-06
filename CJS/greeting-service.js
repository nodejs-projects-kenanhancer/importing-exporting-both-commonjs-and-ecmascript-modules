const greetingHelper = require('./greeting-helper');

module.exports = {
    sayHello: ({ firstName, lastName }) => {
        const fullName = greetingHelper.getFullName({ firstName, lastName });

        return `Hello ${fullName}`;
    },
    sayGoodbye: ({ firstName, lastName }) => {
        const fullName = greetingHelper.getFullName({ firstName, lastName });

        return `Goodbye, ${fullName}`;
    }
};