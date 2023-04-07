export default function Product({ product }:any) {
    let data = product.attributes;
    return (
        <div className="product">
            <h1>{data.sku}</h1>
            <h3>{data.description}</h3>
            <h3>{data.slug}</h3>
        </div>
    )
}
