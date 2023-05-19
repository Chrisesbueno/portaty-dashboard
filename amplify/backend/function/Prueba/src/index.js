

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return JSON.stringify({
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda2!'),
    });
};
