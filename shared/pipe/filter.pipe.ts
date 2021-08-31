import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    if(!value.length || searchTerm == '') {
      return value
    }
    return value.filter((item) => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 )
  }

}
