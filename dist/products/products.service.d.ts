import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private products;
    getAll(): any[];
    getById(id: string): any;
    create(productDto: CreateProductDto): void;
}
