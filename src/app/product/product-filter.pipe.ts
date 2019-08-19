import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    // value: Product[] gelen datanın product array olduğunu söylüyoruz
    // filterText ismini verdik
    // Product[] dönüş tipini belirttik
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    // filterText = filterText ? filterText.toLocaleLowerCase()
    // filterText? varmı
    // varsa filterText.toLocaleLowerCase() küçük harfe çevir
    // :null yoksa boş ata
    return filterText ? value.filter((p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
    // filterText? varmı
    // value.filter varsa filtrele
    // (p: Product) product türündeki p için
    // p.name.toLocaleLowerCase() her bir p için p'nin adını küçük harfe çevir
    // indexOf(filterText) içinde arama ifadesi varmı bak
    // : value yoksa değeri döndür
  }

}
