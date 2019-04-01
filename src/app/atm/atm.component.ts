import { Component, OnInit} from '@angular/core';

import { ComputerComponent } from './computer.component';
import { ValidatorComponent } from './validator.component';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  computer: ComputerComponent;
  validator: ValidatorComponent;
  change: number[];
  sum: number;
  error: string;

  constructor() {
    this.change = [];
    this.sum = 0;
    this.error = '';
    this.computer = new ComputerComponent();
    this.validator = new ValidatorComponent();
  }

  ngOnInit() {}

  runATM(inputSum: any) {
    this.resetATM();
    this.error = this.validator.validateSumInput(inputSum);
    if (this.error === '') {
      this.change = this.computer.computeChange(inputSum);
      this.sum = inputSum * 1;
    }
  }
  resetATM() {
    this.change = [];
    this.sum = 0;
  }
}
