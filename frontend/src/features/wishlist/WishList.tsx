import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ProductsGrid from "../../components/products/ResponsiveGrid";
import { fetchAllWishLists } from "./wishlistApi";
import { loadAsync, selectWish } from "./wishlistSlice";

const WishList = () => {

    const dispatch = useAppDispatch();
    const wishlist = useAppSelector(selectWish);

    const initProducts: any[] = [];
    const [products, setProducts] = useState(initProducts);

    useEffect(() => {
        dispatch(loadAsync());
    }, [dispatch]);

    useEffect(() => {
        const _wishs = wishlist.value;
        const _products = _wishs?.map((wish: any) => ({ wishId: wish.id, ...wish.product }));
            // console.log(_products);
            setProducts(_products);
    }, [wishlist]);

    return (
        <>
            <ProductsGrid products={products} wish={true} />
        </>
    );
};

export default WishList;
