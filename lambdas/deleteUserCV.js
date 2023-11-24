const Dynamo = require('./Dynamo');
const Responses = require('./API_Responses');


const tableName = process.env.tableName;



exports.handler = async event => {
    if (!event.pathParameters || !event.pathParameters.userId || !event.pathParameters.id) {
        // failed without an ID
        return Responses._400({ message: 'missing the id from the path ' });
    }
    let userId = event.pathParameters.userId;
    let id = event.pathParameters.id;
    console.log('userId', userId)
    console.log('id', id)


    //All cvs for the current userId
    const newCV = await Dynamo.get(userId, tableName).catch(err => {
        console.log('error in Dynamo Get', err);
        return null;
    });

    if (!newCV) {
        return Responses._400({ message: 'Failed to get CV by userId' });
    }

    //Deleteing the cv with the id from the path

    delete newCV.CVS[id]

     let returned = await Dynamo.write(newCV, tableName).catch(err => {
        console.log('error in dynamo write', err);
        return null;
    });

    if (!returned) {
        return Responses._400({ message: 'Failed to write CV by userId' });
    }

    return Responses._200json({ returned });

}