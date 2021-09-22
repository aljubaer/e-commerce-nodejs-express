import { CreateProductDto } from './product.dto';
import { logger } from '@utils/logger';
import { Request, Response, NextFunction } from 'express';
import { Product } from './product.model';
import ProductService from './product.service';

class ProductsController {
  public productService = new ProductService();

  public getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllProductsData: Product[] = await this.productService.findAllProduct();

      res.status(200).json({ data: findAllProductsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const ProductId = Number(req.params.id);
      const findOneProductData: Product = await this.productService.findProductById(ProductId);

      res.status(200).json({ data: findOneProductData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const productData = req.body;

      const newProduct = await this.productService.createProduct({
        ...productData,
        imageUrl: req.file.path,
      });

      res.status(201).json({ data: newProduct, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;
