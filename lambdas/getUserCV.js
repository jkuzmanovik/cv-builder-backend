const Responses = require('./API_Responses');
const Dynamo = require('./Dynamo');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ message: 'missing the ID from the path' });
    }

    let ID = event.pathParameters.ID;

    const newCV = await Dynamo.get(ID, tableName).catch(err => {
        console.log('error in Dynamo Get', err);
        return null;
    });

    if (!newCV) {
        return Responses._400({ message: 'Failed to get user by ID' });
    }

    return Responses._200json({ newCV });
};