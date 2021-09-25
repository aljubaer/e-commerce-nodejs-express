import { PRODUCT_URL } from '../../constants/index';
import { httpRequest } from '../../request/httpRequest';

export const fetchAllProduct = async () => {
    return httpRequest(PRODUCT_URL);
}