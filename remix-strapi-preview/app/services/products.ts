import {checkEnvVars, checkStatus} from "~/utils/errorHandling";

async function fetchProducts(slug:string) {
    checkEnvVars();
    const requestUrl = `${process.env.STRAPI_URL_BASE}/api/products?populate=*&filters[slug][$eq]=${slug}`;
    const response = await fetch(requestUrl,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
                "Content-Type": "application/json"
            }
        });
    checkStatus(response); // check the status

    const data = await response.json(); // get the json response

    if (data.error) { // error check
        throw new Response("Error loading data from strapi", { status: 500 });
    }
    return data.data;
}
async function fetchProductsPreview(slug:string) {
    checkEnvVars();
    console.log(process.env.STRAPI_URL_BASE);
    console.log(process.env.STRAPI_API_TOKEN);
    console.log(slug);
    const requestUrl = `${process.env.STRAPI_URL_BASE}/api/products?publicationState=preview&filters[slug][$eq]=${slug}`;
    const response = await fetch(requestUrl,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
                "Content-Type": "application/json"
            }
        });
    checkStatus(response); // check the status

    const data = await response.json(); // get the json response

    if (data.error) { // error check
        throw new Response("Error loading data from strapi", {status: 500});
    }

    return data.data;
}

export { fetchProducts, fetchProductsPreview };
