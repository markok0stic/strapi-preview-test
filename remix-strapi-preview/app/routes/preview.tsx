import {fetchProductsPreview} from "~/services/products";
import Layout from "~/components/Layout";
import Product from "~/components/Product";
import {useLoaderData} from "react-router";
import type {LoaderArgs} from "@remix-run/node";

export async function loader({ request }: LoaderArgs)
{
    const url: URL = new URL(request.url);
    return await fetchProductsPreview(url.searchParams.get("slug") as string);
}

export default function Preview() {
    const products:any = useLoaderData();
    return (
        <Layout>
             {
                 products.length > 0 ? (
                     products.map((prod: any) => (
                             <Product product={prod} key={prod.id}/>
                         )
                     )
                 ) : (
                     <p>No products found!</p>
                 )
             }
         </Layout>
    );
}
