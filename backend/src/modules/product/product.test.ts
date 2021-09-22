import request from 'supertest';
import App from '../../app';
import { ProductDao } from './product.dao';
import { Product } from './product.model';
import ProductRoute from './product.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Products', () => {
  const productDao = new ProductDao();
  describe('[GET] /Products', () => {
    it('response statusCode 200 / findAll', () => {
      const Products: Product[] = productDao.findAll();
      const ProductsRoute = new ProductRoute();
      const app = new App([ProductsRoute]);

      return request(app.getServer()).get(`${ProductsRoute.path}`).expect(200);
    });
  });

  describe('[GET] /products/:id', () => {
    it('response statusCode 200 / findOne', () => {
      const productId = 1;
      const foundProduct: Product = productDao.findById(productId);
      const ProductsRoute = new ProductRoute();
      const app = new App([ProductsRoute]);

      return request(app.getServer()).get(`${ProductsRoute.path}/${productId}`).expect(200);
    });
  });
});
