import { Dao } from '@interfaces/dao.interface';
import { WishList } from './wishlist.model';
export class WishListDao implements Dao {
  private static wishLists = [
      new WishList({
          id: 1,
          userId: 1,
          productId: 1
      }),
  ];

  public findAll(): WishList[] {
    return [...WishListDao.wishLists];
  }

  public findById(id: number): WishList {
    const wishList = WishListDao.wishLists.find(wishList => wishList.id === id);
    return wishList;
  }

  public find(crieteria: object): WishList[] {
    return WishListDao.wishLists.filter(wishList => {
      let matched = true;
      Object.keys(crieteria).forEach(key => {
        if (wishList[key] !== crieteria[key]) matched = false;
      });
      return matched;
    });
  }

  public create({ userId, productId }): WishList {
    const newWishList = new WishList({ id: this.genId(), userId, productId });
    WishListDao.wishLists.push(newWishList);
    return this.findById(newWishList.id);
  }

  private genId() {
    return this.length() + 1;
  }

  private length() {
    return WishListDao.wishLists.length;
  }
}
