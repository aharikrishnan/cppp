import { Injectable } from '@angular/core';
import { BidBasicDetailsComponent } from './bid-basic-details/bid-basic-details.component';
import { Activity } from './activity';

@Injectable()
export class ApiService {

  constructor() { }
  getActivities() {
    return [
      new Activity(BidBasicDetailsComponent, {name: 'Bid Basic Details'}),
      new Activity(BidBasicDetailsComponent, {name: 'Choose Template'}),
      new Activity(BidBasicDetailsComponent, {name: 'Bid Schedule'}),
      new Activity(BidBasicDetailsComponent, {name: 'Pre Qualifications Criterion'}),
      new Activity(BidBasicDetailsComponent, {name: 'Specifications'})
    ];
  }
}