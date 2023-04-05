import Product from "./Product"

export default function Layout({children} : any) {
    return (
        <div>
            <div className="home">
                <h1 className="title">
                    This is title
                </h1>
                <h3 className="content">
                    This is content
                </h3>
            </div>
            <div className="productsContainer">
                {children}
            </div>
        </div>
    );
}