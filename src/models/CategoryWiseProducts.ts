import { Product } from "./Product";

export class CategoryWiseProducts{
    categoryName:string='';
    data:{products:Product[],totalItems:number}={products:[],totalItems:0}
}