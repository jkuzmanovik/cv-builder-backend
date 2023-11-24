const Dynamo = require('./Dynamo');
const Responses = require('./API_Responses');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.userId) {
        // failed without an ID
        return Responses._400({ message: 'missing the userId from the path' });
    }

    let userId = event.pathParameters.userId;
    const data = JSON.parse(event.body);
    console.log('user', data)

    const newCV = await Dynamo.get(userId, tableName).catch(err => {
        console.log('error in Dynamo Get', err);
        return null;
    });
    if(!newCV){
        newCV = {}
    }
    if(newCV.CVS){
        newCV.CVS = [...newCV.CVS, data]
    }else{
        newCV.CVS = {
            ...data
        }
    }
    newCV.userId = userId

     let returned = await Dynamo.write(newCV, tableName).catch(err => {
        console.log('error in dynamo write', err);
        return null;
    });

    if (!returned) {
        return Responses._400({ message: 'Failed to write CV by userId' });
    }

    return Responses._200json({ returned });
};