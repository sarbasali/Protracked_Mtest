// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilerPipe implements PipeTransform {

//   transform(value:any=[], filterSting:string, propName:string): any[] {
//       const result:any=[]
//       if(!value || filterSting==='' || propName===''){
//         return value
//       }
//       value.forEach((a:any )=> {
//         if (a[propName].trim().toLowerCase().includes(filterSting.toLowerCase())) {
//           result.puch(a)
//         }
//       });
//       return result

    
//   }

// }


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilerPipe implements PipeTransform {

  transform(value: any[] = [], filterString: string, propName: string): any[] {
    const result: any[] = [];
    if (!value || filterString === '' || propName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a); // Corrected from puch to push
      }
    });
    return result;
  }
}
