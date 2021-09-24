import { useEffect, useState } from "react";
import ProductsGrid from "../../components/products/ResponsiveGrid";
import { fetchAllWishLists } from "./wishlistApi";

const WishList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const _wishs = await fetchAllWishLists();
            const _products = _wishs?.map((wish: any) => wish.product);
            setProducts(_products);
        })();
    }, []);

    return (
        <>
            <ProductsGrid products={products} wish={true} />
        </>
    );
};

export default WishList;
