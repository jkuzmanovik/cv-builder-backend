const Responses = require('./API_Responses');
const Dynamo = require('./Dynamo');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.userId) {
        // failed without an userId 
        return Responses._400({ message: 'missing the userId from the path' });
    }

    let userId = event.pathParameters.userId;

    const newCV = await Dynamo.get(userId, tableName).catch(err => {
        console.log('error in Dynamo Get', err);
        return null;
    });

    if (!newCV) {
        return Responses._400({ message: 'Failed to get user by userId' });
    }

    return Responses._200json({ newCV });
};