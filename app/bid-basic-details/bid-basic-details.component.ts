import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bid-basic-details',
  templateUrl: './bid-basic-details.component.html',
  styleUrls: ['./bid-basic-details.component.css']
})
export class BidBasicDetailsComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}