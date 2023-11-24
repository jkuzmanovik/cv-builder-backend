const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get(userId, TableName) {
        const params = {
            TableName,
            Key: {
                userId,
            },
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            return {};
        }
        console.log(data);

        return data.Item;
    },

    async write(data, TableName) {
        if (!data.userId) {
            throw Error('no userId on the data');
        }

        const params = {
            TableName,
            Item: data,
        };

        const res = await documentClient.put(params).promise();

        if (!res) {
            throw Error(`There was an error inserting userId of ${data.userId} in table ${TableName}`);
        }

        return data;
    },
};
module.exports = Dynamo;