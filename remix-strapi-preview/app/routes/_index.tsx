import Layout from "~/components/Layout";
import {checkEnvVars, checkStatus} from "~/utils/errorHandling";
import {useLoaderData} from "react-router";
import Product from "~/components/Product";
import {STRAPI_API_TOKEN} from "~/utils/url";

export async function loader() {
  checkEnvVars(); // check environmental variables
  const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/products?populate=*`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json"
    }
  }); // get the blogs

  checkStatus(response); // check the status

  const data = await response.json(); // get the json response

  if (data.error) { // error check
    throw new Response("Error loading data from strapi", { status: 500 });
  }

  return data.data; // return the data
}
export default function Index() {
  const products:any = useLoaderData();
  return (
      <Layout>
        {
          products.length > 0 ? (
              products.map((prod: any) => (
                  <Product product={prod}/>
                  )
              )
          ) : (
              <p>No products found!</p>
          )
        }
      </Layout>
  );
}
