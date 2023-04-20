import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagingService {

  private expandedCardId = -1;
  private filterValue = '';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  setExpandedCardId(cardId:number){
    this.expandedCardId = cardId;
  }

  setFilterValue(filter:string){
    this.filterValue = filter;
  }

  getExpandedCardId(): number {
    return this.expandedCardId;
  }

  getFilterValue(): string {
    return this.filterValue;
  }
}
