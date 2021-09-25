import { Dao } from '@interfaces/dao.interface';
import { Product } from './product.model';
export class ProductDao implements Dao {
  private static products: Product[] = [
    new Product({
      id: 1,
      name: 'HeadPhone',
      description: 'A black wireless headphone',
      imageUrl: 'http://localhost:5000/uploads/1632310880465photo-1505740420928-5e560c06d30e.jpg',
    }),
    new Product({
      id: 2,
      name: 'Demo Product 1',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      imageUrl: 'https://via.placeholder.com/180',
    }),
    new Product({
      id: 3,
      name: 'Demo Product 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: 'https://via.placeholder.com/180',
    }),
    new Product({
      id: 4,
      name: 'Demo Product 3',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
      imageUrl: 'https://via.placeholder.com/180',
    }),
    new Product({
      id: 5,
      name: 'Demo Product 4',
      description: 'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaer',
      imageUrl: 'https://via.placeholder.com/180',
    }),
    new Product({
      id: 6,
      name: 'Demo Product 5',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
      imageUrl: 'https://via.placeholder.com/180',
    }),
  ];

  public findAll(): Product[] {
    return [...ProductDao.products];
  }

  public findById(id: number): Product {
    const product = ProductDao.products.find(Product => Product.id === id);
    return product;
  }

  public find(criteria: object): Product[] {
    return ProductDao.products.filter(Product => {
      let matched = true;
      Object.keys(criteria).forEach(key => {
        if (Product[key] !== criteria[key]) matched = false;
      });
      return matched;
    });
  }

  public create({ name, description, imageUrl }): Product {
    const newProduct = new Product({ id: this.genId(), name, description, imageUrl });
    ProductDao.products.push(newProduct);
    return this.findById(newProduct.id);
  }

  private genId() {
    return this.length() + 1;
  }

  private length() {
    return ProductDao.products.length;
  }
}
