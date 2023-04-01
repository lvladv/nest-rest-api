import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAll(): any[];
    getOne(id: string): string;
    create(createProductDto: CreateProductDto): void;
    remove(id: string): string;
    update(updateProductDto: UpdateProductDto, id: string): string;
}
