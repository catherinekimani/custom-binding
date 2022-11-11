import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // property
  enteredSearchValue: string = '';
  // 1. import output decorator
  @Output()
  // 2. create a custom event
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  // 3. raise the custom event by creating a method
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
