import { WISHLIST_URL } from "../../constants/index";
import { httpProtectedRequest } from "../../request/httpProtectedRequest";

export const fetchAllWishLists = async () => {
    return httpProtectedRequest(WISHLIST_URL);
};

export const addToWish = async (productId: number) => {
    const body = { productId };
    return httpProtectedRequest(WISHLIST_URL, {
        method: "POST",
        body: JSON.stringify(body),
    });
};

export const removeFromWish = async (id: number) => {
    console.log(id);
    return httpProtectedRequest(`${WISHLIST_URL}/${id}`, {
        method: "DELETE",
    });
};
