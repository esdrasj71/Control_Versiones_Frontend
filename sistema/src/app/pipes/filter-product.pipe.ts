import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {
  transform(value: any, arg:any): any {
    if(arg === '' || arg.length<3) return value;
    const resultado_product =[];
    for(const product of value){
      if(product.Name.toLowerCase().indexOf(arg.toLowerCase())> -1)
      {
        resultado_product.push(product);
      }
      if(product.Correlative_Product.toLowerCase().indexOf(arg.toLowerCase())> -1)
      {
        resultado_product.push(product);
      }
   
    }
    return resultado_product;
  }
}
