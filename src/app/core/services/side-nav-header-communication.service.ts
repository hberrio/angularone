import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavHeaderCommunicationService {
  counter = 0;
  count: BehaviorSubject<number>;
  constructor() {

    this.count = new BehaviorSubject(this.counter);
  }

  nextCount() {
    if (this.counter == 1) {
      this.count.next(--this.counter);
    }
    else this.count.next(++this.counter);
  }
}