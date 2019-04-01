import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() submitSum: EventEmitter<string> = new EventEmitter();
  sumForm = new FormGroup ({
    sumInput: new FormControl('', Validators.compose([
      Validators.required, Validators.maxLength(5)
    ]))
  });

  getSum() {
    this.submitSum.emit(this.sumForm.value.sumInput);
    this.sumForm.reset();
  }

  ngOnInit() {
  }
}
