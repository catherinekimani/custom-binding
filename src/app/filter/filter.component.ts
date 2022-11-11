import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('Total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All';
  // 2. decorated it with the output decorator
  @Output()
    // 1. created an event
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
// 3. we created a method to raise the event
  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    // console.log(this.selectedRadioButtonValue)
  }
}
