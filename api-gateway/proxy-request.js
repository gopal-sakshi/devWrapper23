function getLambdaEvent(stage, endpoint, req, path, query, body) {
    let headers = req.headers;
	headers["Accept"] = headers["accept"]; delete headers["accept"];        // delete accept, use Accept
	headers["Accept-Encoding"] = headers["accept-encoding"]; delete headers["accept-encoding"];
	headers["Accept-Language"] = headers["accept-language"]; delete headers["accept-language"];
	headers["Host"] = headers["host"]; delete headers["host"];
	headers["User-Agent"] = headers["user-agent"]; delete headers["user-agent"];

    let event = {
		"resource": endpoint, 								// api-endpoint
		"path": req.path, 									// path without stage
		"httpMethod": req.method, 							// request method
		"headers": headers,
		"queryStringParameters": query, 					// query string object
		"pathParameters": path,
		"stageVariables": null,
		"requestContext": {
			"resourceId": "resource1",
			"resourcePath": endpoint, 						// api-endpoint
			"httpMethod": req.method.toUpperCase(), 		// request-method
			"extendedRequestId": "resourceId-in-base64",
			"requestTime": "05/Sep/2018:14:02:56 +0000",
			"path": req.rawUrl, 							// url including stage
			"accountId": "1234567890",
			"protocol": "HTTP/1.1",
			"stage": stage.replace('/', ''), 				//basepath api-stage
			"requestTimeEpoch": 1536156176549,
			"requestId": "",
			"identity": {
				"cognitoIdentityPoolId": null,
				"accountId": null,
				"cognitoIdentityId": null,
				"caller": null,
				"sourceIp": req.connection ? req.connection.remoteAddress : "127.0.0.1", // client ip address
				"accessKey": null,
				"cognitoAuthenticationType": null,
				"cognitoAuthenticationProvider": null,
				"userArn": null,
				"userAgent": headers["User-Agent"], 			// client browser or application
				"user": null
			},
			"apiId": "api1"
		},
		"body": body,
		"isBase64Encoded": false
	}

    return event;
}

module.exports.getLambdaEvent = getLambdaEvent;