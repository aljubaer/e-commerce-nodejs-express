import HttpException from "@exceptions/HttpException";
import { isEmpty } from "@utils/util";
import { ProductDao } from "./product.dao";
import { Product } from "./product.model";

class ProductService {
    private productDao = new ProductDao();
  
    public async findAllProduct(): Promise<Product[]> {
      const Products: Product[] = this.productDao.findAll();
      return Products;
    }
  
    public async findProductById(ProductId: number): Promise<Product> {
      const foundProduct: Product = this.productDao.findById(ProductId);
      if (!foundProduct) throw new HttpException(404, "Product not found");
  
      return foundProduct;
    }
  
    public async createProduct(productData): Promise<Product> {
      if (isEmpty(productData)) throw new HttpException(400, "You're not ProductData");
  
      const foundProduct: Product = this.productDao.find({ name: productData.name })[0];
      if (foundProduct) throw new HttpException(409, `Your email ${productData.name} already exists`);
  
      const newProduct: Product = this.productDao.create({ ...productData });
  
      return newProduct;
    }
  }
  
  export default ProductService;