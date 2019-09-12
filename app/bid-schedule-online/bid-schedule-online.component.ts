import { Component, OnInit, Input } from '@angular/core';
import {ActivityComponent} from '../activity-component';

@Component({
  selector: 'bid-schedule-online',
  templateUrl: './bid-schedule-online.component.html',
  styleUrls: ['./bid-schedule-online.component.css']
})
export class BidScheduleOnlineComponent implements OnInit {
  @Input() data: any;
  meeting_types = ['Physical', 'Video Conference', 'Not Required'];
  constructor() { }

  ngOnInit() {
  }

}