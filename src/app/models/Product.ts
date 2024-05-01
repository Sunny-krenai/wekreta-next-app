export class Product{

    id:number=0;
	description:string=''
	keywords:string='';
	mediaUrl:string='';
	category:Category[]=[];
	name:string='';
	rating:number=0;
	variants:Variant[]=[];
	promotionalTag:string='';
	addedVariant:string[]=[];
	inWishlist:number=0;
}

class Category{
    id:number=0;
    name:string='';
}

export class Variant{
	sku:string='';
	variant:string='';
	isOutOfStock:number=0;
	sellingPrice:number=0;
	mrp:number=0;
}

export class DatabaseHelper {
    searchBy:string="";
    search: string = '';

    currentPage: number = 1;
    itemsPerPage: number= 10;
    
    sortBy: string='createdDate';
    sortOrder: string = 'desc';
    
    noOfPage: number=0;
}