import { Component, OnInit} from '@angular/core';

import { ComputerService } from '../_services/computer.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  private change: number[];
  private sum: number;

  constructor(private computerService: ComputerService) {
    this.change = [];
    this.sum = 0;
  }

  ngOnInit() {}

  runATM(inputSum: any) {
    this.resetATM();
    this.change = this.computerService.computeChange(inputSum);
    this.sum = inputSum * 1;
  }
  private resetATM() {
    this.change = [];
    this.sum = 0;
  }
}
