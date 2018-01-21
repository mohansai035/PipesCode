import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'modifyName'
})
export class ModifyName implements PipeTransform {
  transform(value: string): ReturnModel[] {
    const splittedArray = value.match(/[a-zA-Z]+|[0-9]+/g);
    const returnModel = [];
    returnModel.push({
      name: 'id',
      value: splittedArray[0]
    },
      {
        name: 'name',
        value: splittedArray[1]
      },
      {
        name: 'ssn',
        value: splittedArray[2]
      })
    return returnModel;
  }
}

class ReturnModel {
  name: string;
  value: string;
}
