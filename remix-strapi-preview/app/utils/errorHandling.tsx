// Custom error class for errors from Strapi API
import {STRAPI_API_TOKEN, STRAPI_URL_BASE} from "~/utils/url";

class APIResponseError extends Error {
    constructor(response: any) {
        super(`API Error Response: ${response.status} ${response.statusText}`);
    }
}

export const checkStatus = (response: any) => {
    if (response.ok) {
        // response.status >= 200 && response.status < 300
        return response;
    } else {
        throw new APIResponseError(response);
    }
}

class MissingEnvironmentVariable extends Error {
    constructor(name: string) {
        super(`Missing Environment Variable: The ${name} environment variable must be defined`);
    }
}

export const checkEnvVars = () => {
    const envVars = [
        'STRAPI_URL_BASE',
        'STRAPI_API_TOKEN'
    ];

    process.env['STRAPI_URL_BASE'] = STRAPI_URL_BASE;
    process.env['STRAPI_API_TOKEN'] = STRAPI_API_TOKEN;

    for (const envVar of envVars) {
        if (!process.env[envVar]) {
            throw new MissingEnvironmentVariable(envVar)
        }
    }
}