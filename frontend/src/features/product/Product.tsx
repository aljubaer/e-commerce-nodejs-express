import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import ProductsGrid from "../../components/products/ResponsiveGrid";
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
            <ProductsGrid products={products} />
        </>
    );
};

export default ProductList;
