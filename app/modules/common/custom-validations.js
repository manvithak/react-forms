Formsy.addValidationRule('isMoreThan', function (values, value, otherField) {
  return Number(value) > Number(otherField);
})
Formsy.addValidationRule('isLessThan', function(values,value,otherField){
  return Number(value) < Number(otherField);
})

export class isMoreThan{}
export class isLessThan{}
