import { PRODUCT_URL } from '../../constants/index';

export const fetchAllProduct = async () => {
    return (await (await fetch(PRODUCT_URL)).json()).data;
}