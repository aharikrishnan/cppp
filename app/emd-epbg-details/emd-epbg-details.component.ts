import { Component, OnInit, Input } from '@angular/core';
import {ActivityComponent} from '../activity-component';

@Component({
  selector: 'emd-epbg-details',
  templateUrl: './emd-epbg-details.component.html',
  styleUrls: ['./emd-epbg-details.component.css']
})
export class EmdEpbgDetailsComponent implements OnInit {
  @Input() data: any;
  types = ['absolute', 'commision'];
  banks = ['Punjab National Bank', 'HDFC Bank', 'ICICI Bank'];
  constructor() { }

  ngOnInit() {
  }

}