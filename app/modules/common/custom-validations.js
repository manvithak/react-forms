Formsy.addValidationRule('isValidPercent', function (values, value) {
  if(value>100)
    return false;
  else if(value<0)
    return false;
  else
    return true;
})

export class isValidPercent{}
