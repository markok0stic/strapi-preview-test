// Custom error class for errors from Strapi API
import {CLIENT_PREVIEW_SECRET, STRAPI_API_TOKEN, STRAPI_URL_BASE} from "~/utils/consts";
import * as process from "process";

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
        'STRAPI_API_TOKEN',
        'CLIENT_PREVIEW_SECRET'
    ];
    process.env['STRAPI_URL_BASE'] = STRAPI_URL_BASE;
    process.env['STRAPI_API_TOKEN'] = STRAPI_API_TOKEN;
    process.env['CLIENT_PREVIEW_SECRET'] = CLIENT_PREVIEW_SECRET;

    for (const envVar of envVars) {
        if (!process.env[envVar]) {
            throw new MissingEnvironmentVariable(envVar)
        }
    }
}
