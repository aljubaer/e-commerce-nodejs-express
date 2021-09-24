import { WishList } from './wishlist.model';
import { WishListDao } from './wishlist.dao';
import request from 'supertest';
import App from '../../app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

// describe('Testing WishList', () => {
//   const wishListDao = new WishListDao();
//   describe('[GET] /wishlists', () => {
//     it('response statusCode 200 / findMany', () => {
//       const wishList: Product[] = wishListDao.find();
//       const ProductsRoute = new ProductRoute();
//       const app = new App([ProductsRoute]);

//       return request(app.getServer()).get(`${ProductsRoute.path}`).expect(200);
//     });
//   });

//   describe('[GET] /products/:id', () => {
//     it('response statusCode 200 / findOne', () => {
//       const productId = 1;
//       const foundProduct: Product = productDao.findById(productId);
//       const ProductsRoute = new ProductRoute();
//       const app = new App([ProductsRoute]);

//       return request(app.getServer()).get(`${ProductsRoute.path}/${productId}`).expect(200);
//     });
//   });
// });
