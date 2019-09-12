import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Activity } from '../activity';
import { EmdEpbgDetailsComponent } from '../emd-epbg-details/emd-epbg-details.component';
import { BidSchedulePhysicalComponent } from '../bid-schedule-physical/bid-schedule-physical.component';
import { BidScheduleOnlineComponent } from '../bid-schedule-online/bid-schedule-online.component';

@Component({
  selector: 'bid-schedule',
  templateUrl: './bid-schedule.component.html',
  styleUrls: ['./bid-schedule.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class BidScheduleComponent implements OnInit {
  // firstFormGroup: FormGroup;

  activities: Activity[];
  @Input() data: any;

  constructor() { }
  // private _formBuilder: FormBuilder;
  getWorkable(){
    // wokable - bid
    return {
      ministry: 'Ministry of Highways',
      department: 'NHAI',
      buyer_name: 'Director - NCR',
      bid_classifications: ['EPC', 'ICT'],
      bid_types: ['Single', 'Limited'],
      project_title: "ICT Consultant for Smart City",
    }
  }
  getScheduleActivities() {
    return [
      new Activity(BidSchedulePhysicalComponent, {name: 'Bid Schedule Physical', workable: this.getWorkable()}),
      new Activity(BidScheduleOnlineComponent, {name: 'Bid Schedule Online', workable: this.getWorkable()}),
      new Activity(EmdEpbgDetailsComponent, {name: 'EMD / EPBG Details', workable: this.getWorkable()}),
    ];
  }
  ngOnInit() {
    this.activities = this.getScheduleActivities()
    console.log("this.activities", this.activities)
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
  }

}