import {fetchProducts, fetchProductsPreview} from "~/services/products";
import {useLoaderData} from "react-router";
import Layout from "~/components/Layout";
import Product from "~/components/Product";

export async function loader(/*type:string,locale:string,slug:string,secret:string*/)
{
    return await fetchProductsPreview("slug"); // return the data
}

export default function Index() {

    return (
        <div>

            WOW
        </div>
       /* <Layout>
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
        </Layout>*/
    );
}
