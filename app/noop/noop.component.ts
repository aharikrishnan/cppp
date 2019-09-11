import { Component, OnInit, Input } from '@angular/core';
import {ActivityComponent} from '../activity-component';


@Component({
  selector: 'app-noop',
  templateUrl: './noop.component.html',
  styleUrls: ['./noop.component.css']
})
export class NoopComponent implements OnInit, ActivityComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}