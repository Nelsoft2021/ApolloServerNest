import { ProductService } from './product.service';
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    products(): Promise<import("./product.model").ProductDocument[]>;
}
