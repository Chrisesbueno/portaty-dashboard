import { AppSyncClient, GetIntrospectionSchemaCommand } from "@aws-sdk/client-appsync"


const GRAPHQL_ENDPOINT = "https://fuzb4c27pzdkfea7mvbjrkq3li.appsync-api.us-east-1.amazonaws.com/graphql";
const AWS_REGION = 'us-east-1';
const APPSYNC_ID = "zajoupn5szdfjfucr7vavz63u4"
const query = `
  query LIST_TODOS {
    listTodos {
      items {
        id
        name
      }
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`CREDENTIALS: ${event.arguments.credentials}`);
  const { accessKeyId, secretAccessKey } = JSON.parse(event.arguments.credentials)
  console.log("KEYID: ", accessKeyId)
  console.log("SCRECETKEY: ", secretAccessKey)

  // Configurar el cliente de AppSync con la información de configuración de AWS Amplify
  const client = new AppSyncClient({
    region: AWS_REGION,
    endpoint: GRAPHQL_ENDPOINT,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey
    },
  });

  console.log("CLIENT: ", client)

  const command = new GetIntrospectionSchemaCommand({
    apiId: APPSYNC_ID,
    format: "JSON",
    includeDirectives: true

  })
  const result = await client.send(command)
  console.log("Result: ", result)

  return JSON.stringify({
    statusCode: 200,
    body: event.arguments.credentials
  });




};