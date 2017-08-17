Formsy.addValidationRule('isLessThan', function(values,value,otherField){
  return Number(value) < Number(otherField);
})
export class isLessThan{}
