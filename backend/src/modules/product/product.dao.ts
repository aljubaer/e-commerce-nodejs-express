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
