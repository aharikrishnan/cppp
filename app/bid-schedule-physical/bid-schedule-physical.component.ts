import { Component, OnInit, Input } from '@angular/core';
import {ActivityComponent} from '../activity-component';

@Component({
  selector: 'bid-schedule-physical',
  templateUrl: './bid-schedule-physical.component.html',
  styleUrls: ['./bid-schedule-physical.component.css']
})
export class BidSchedulePhysicalComponent implements OnInit {
  @Input() data: any;
  meeting_types = ['Physical', 'Video Conference', 'Not Required'];
  constructor() { }

  ngOnInit() {
  }

}