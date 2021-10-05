import { Model } from 'mongoose';
import { ProductDocument } from './product.model';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    list(): Promise<ProductDocument[]>;
}
