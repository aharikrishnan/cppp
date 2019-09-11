import { Component, OnInit, Input } from '@angular/core';
import {TemplateEditorComponent} from '../template-editor/template-editor.component';
import {ActivityComponent} from '../activity-component';




@Component({
  selector: 'bid-basic-details',
  templateUrl: './bid-basic-details.component.html',
  styleUrls: ['./bid-basic-details.component.css']
})
export class BidBasicDetailsComponent implements ActivityComponent {
  @Input() data: any;
  value_types:string[] = ['absolute', 'commision']


  constructor() { }

  ngOnInit() {
  }

}