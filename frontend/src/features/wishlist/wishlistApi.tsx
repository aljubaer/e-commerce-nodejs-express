import { WISHLIST_URL } from "../../constants/index";

export const fetchAllWishLists = async () => {
    return (
        await (
            await fetch(WISHLIST_URL, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("jwt"),
                },
            })
        ).json()
    ).data;
};
