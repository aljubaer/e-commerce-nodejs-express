import upload from './../../services/upload.service';
import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import WishListController from './wishlist.controller';
import authMiddleware from '@middlewares/auth.middleware';

class WishlistRoute implements Route {
  public path = '/wishlist';
  public router = Router();
  public wishListController = new WishListController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.wishListController.getWishListsByUserId);
    this.router.get(`${this.path}/:id`, authMiddleware, this.wishListController.getWishListById);
    this.router.post(`${this.path}`, authMiddleware, this.wishListController.createWishList);
  }
}

export default WishlistRoute;
