export class ValidatorComponent {

  validateSumInput(sumInput: any) {
    if (sumInput !== '' && sumInput * 1 !== 0) {
      if (isNaN(sumInput)) {
        return 'You should enter numbers only!';
      } else {
        return '';
      }
    } else {
      return 'Please, enter the sum to change!';
    }
  }
}
