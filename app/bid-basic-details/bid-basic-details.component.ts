import { Component, OnInit, Input } from '@angular/core';
import {TemplateEditorComponent} from '../template-editor/template-editor.component';



@Component({
  selector: 'bid-basic-details',
  templateUrl: './bid-basic-details.component.html',
  styleUrls: ['./bid-basic-details.component.css']
})
export class BidBasicDetailsComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}