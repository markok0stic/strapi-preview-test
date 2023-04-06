import Layout from "~/components/Layout";
import {useLoaderData} from "react-router";
import Product from "~/components/Product";
import {fetchProducts, fetchProductsPreview} from "~/services/products";
export async function loader()
{
  return await fetchProducts(); // return the data
}

export default function Index() {
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
