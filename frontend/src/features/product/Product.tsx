import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import ProductsGrid from "../../components/ResponsiveGrid";
import { fetchAllProduct } from "./productApi";

type TParams = { id: string };

const ProductList = ({ match }: RouteComponentProps<TParams>) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const _products = await fetchAllProduct();
            setProducts(_products);
        })();
    }, []);

    return (
        <>
            <h1>
                This is a page for product with ID: {match.params.id ?? ""}{" "}
            </h1>
            <ProductsGrid products={products} />
        </>
    );
};

export default ProductList;
