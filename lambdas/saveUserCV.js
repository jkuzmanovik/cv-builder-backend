const Dynamo = require('./Dynamo');
const Responses = require('./API_Responses');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        // failed without an ID
        return Responses._400({ message: 'missing the ID from the path' });
    }

    let ID = event.pathParameters.ID;
    const data = JSON.parse(event.body);
    data.ID = ID;
    console.log('user', data)

    const newCV = await Dynamo.write(data, tableName).catch(err => {
        console.log('error in dynamo write', err);
        return null;
    });

    if (!newCV) {
        return Responses._400({ message: 'Failed to write user by ID' });
    }

    return Responses._200json({ newCV });
};