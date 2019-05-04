import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() submitSum: EventEmitter<string> = new EventEmitter();
  sumForm: FormGroup;
  sum: AbstractControl;

  ngOnInit() {
    this.sumForm = new FormGroup ({
      sumInput: new FormControl('', Validators.compose([
        Validators.required, Validators.maxLength(5), Validators.pattern('[0-9]*')
      ]))
    });
    this.sum = this.sumForm.controls['sumInput'];
  }

  getSum() {
    this.submitSum.emit(this.sumForm.value.sumInput);
    this.sumForm.reset();
  }

}
