/* Amplify Params - DO NOT EDIT
  AUTH_PORTATY_USERPOOLID
  ENV
  REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = "https://fuzb4c27pzdkfea7mvbjrkq3li.appsync-api.us-east-1.amazonaws.com/graphql";
const AWS_REGION = 'us-east-1';
const APPSYNC_ID = "zajoupn5szdfjfucr7vavz63u4"
const { Sha256 } = crypto;

const query = /* GraphQL */ `
  query LIST_TODOS {
    listTodos {
      items {
        id
        name
        description
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

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey
    },
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host,
      "authorization": event.request.headers.authorization
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query }),
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  console.log("SIGNED: ", signed)
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    console.log("RESPONSE: ", response)
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
  }

  return {
    statusCode,
    //  Uncomment below to enable CORS requests
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*"
    // }, 
    body: JSON.stringify(body)
  };
};