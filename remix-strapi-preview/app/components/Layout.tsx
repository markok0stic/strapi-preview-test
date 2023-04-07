import Product from "./Product"

export default function Layout({children} : any) {
    return (
        <div>
            <h1>Hello World</h1>
            <div className="productsContainer">
                {children}
            </div>
        </div>
    );
}
