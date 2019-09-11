import { Injectable } from '@angular/core';
import { Activity } from './activity';

import { BidBasicDetailsComponent } from './bid-basic-details/bid-basic-details.component';
import { NoopComponent } from './noop/noop.component';


@Injectable()
export class ApiService {



  constructor() { }


  getWorkable(){
    // wokable - bid
    return {
      ministry: 'Ministry of Highways',
      department: 'NHAI',
      buyer_name: 'Director - NCR',
      bid_classifications: ['EPC', 'ICT'],
      bid_types: ['Single', 'Limited']
    }

  }

  getActivities() {
    return [
      new Activity(BidBasicDetailsComponent, {name: 'Bid Basic Details',workable: this.getWorkable()}),
      new Activity(NoopComponent, {name: 'Choose Template',workable: this.getWorkable()}),
      new Activity(NoopComponent, {name: 'Bid Schedule',workable: this.getWorkable()}),
      new Activity(NoopComponent, {name: 'Pre Qualifications Criterion',workable: this.getWorkable()}),
      new Activity(NoopComponent, {name: 'Specifications',workable: this.getWorkable()})
    ];
  }
}