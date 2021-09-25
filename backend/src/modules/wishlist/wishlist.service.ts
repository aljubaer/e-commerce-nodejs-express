import HttpException from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { WishListDao } from './wishlist.dao';
import { WishList } from './wishlist.model';

class WishListService {
  private wishListDao = new WishListDao();

  public async findAllWishList(): Promise<WishList[]> {
    const wishLists: WishList[] = this.wishListDao.findAll();
    return wishLists;
  }

  public async findWishList(criteria): Promise<WishList[]> {
    const wishLists: WishList[] = this.wishListDao.find(criteria);
    return wishLists;
  }

  public async findWishListById(wishListId: number): Promise<WishList> {
    const foundWishList: WishList = this.wishListDao.findById(wishListId);
    if (!foundWishList) throw new HttpException(404, 'WishList not found');

    return foundWishList;
  }

  public async createWishList(wishListData): Promise<WishList> {
    if (isEmpty(wishListData)) throw new HttpException(400, "You're not WishListData");

    const foundWishList: WishList = this.wishListDao.find( wishListData )[0];
    if (foundWishList)
      throw new HttpException(409, `Product with ID: ${wishListData.productId} already exists`);

    const newWishList: WishList = this.wishListDao.create({ ...wishListData });

    return newWishList;
  }

  public async deleteWishList(wishId) {
    this.wishListDao.delete(wishId);
  }
}

export default WishListService;
