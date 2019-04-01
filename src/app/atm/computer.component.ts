export class ComputerComponent {
  nominals: number[] = [50, 10, 5, 1];

  computeChange(cash: number) {
    let change: number[] = [];
    for (let nom of this.nominals) {
      let nomCounter = Math.floor(cash / nom); // amount to give out
      const mod = cash % nom; // modulus
      if (cash >= 66 && mod < 16 ||
        cash < 66 && cash >= 20 && mod < 6 ||
        cash >= 10 && nomCounter > 1 && mod === 0 ||
        cash === 10 && nomCounter === 1) {
        nomCounter--;
      }
      cash -= nom * nomCounter;
      change.push(nomCounter);
    }
    return change;
  }
}
