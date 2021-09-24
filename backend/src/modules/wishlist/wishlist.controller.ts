import { WishList } from './wishlist.model';
import { Request, Response, NextFunction } from 'express';
import WishListService from './wishlist.service';
import ProductService from '@modules/product/product.service';

export default class WishListController {
  public wishListService = new WishListService();
  private productService = new ProductService();

  public getWishLists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllWishListsData: WishList[] = await this.wishListService.findAllWishList();

      res.status(200).json({ data: findAllWishListsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getWishListsByUserId = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { user } = req.body;

    try {
      const foundWishLists: WishList[] = await this.wishListService.findWishList({
        userId: user.id,
      });

      const wishlistJoinProducts = await foundWishLists.map(async wish => {
        const product = await this.productService.findProductById(wish.productId);
        return { ...wish, product };
      });

      Promise.all(wishlistJoinProducts).then(results => {
        res.status(200).json({ data: results, message: 'findMany' });
      })

    } catch (error) {
      next(error);
    }
  };

  public getWishListById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const WishListId = Number(req.params.id);
      const findOneWishListData: WishList = await this.wishListService.findWishListById(WishListId);

      res.status(200).json({ data: findOneWishListData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createWishList = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const wishListData = req.body;

      const newWishList = await this.wishListService.createWishList(wishListData);

      res.status(201).json({ data: newWishList, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}
