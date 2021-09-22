import upload from './../../services/upload.service';
import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import ProductsController from './product.controller';

class ProductRoute implements Route {
  public path = '/products';
  public router = Router();
  public productController = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.productController.getProducts);
    this.router.get(`${this.path}/:id`, this.productController.getProductById);
    this.router.post(
      `${this.path}`,
      upload.single('image'),
      this.productController.createProduct,
    );
  }
}

export default ProductRoute;
