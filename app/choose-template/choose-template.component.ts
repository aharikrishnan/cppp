import { Component, OnInit, Input } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ApiService }         from '../api.service';
import {ActivityComponent} from '../activity-component';

@Component({
  selector: 'app-choose-template',
  templateUrl: './choose-template.component.html',
  styleUrls: ['./choose-template.component.css']
})
export class ChooseTemplateComponent implements ActivityComponent {
  @Input() data: any;

  itemsPerSlide = 3;
 
  templates=[]

  constructor() { }

  ngOnInit() {
    this.templates = this.getTemplateInfo()
    console.log(this.templates)
  }

  getTemplateInfo(){
    let tpl = {
      "id": "TPL123",
      "name": "National Highway Bid Template",
      "metadata":{
        "created_by": "GEM",
        "created_at": "03/09/2018",
        "last_modified": "22/10/2019",
        "category": {
          "name": "NHAI"
        },
        "tags": ["NHAI", "MINIT"]
      },
      "tokens": [
          {
            "code": "logo",
            "type": "image",
            "default": {
              "src": "default-logo.png",
              "width": 200 ,
              "height": 100
            },
            "hint": "Your company logo"
          },
          {
            "code": "tnc_link",
            "type": "link",
            "default": {
              "src": "http://example/link",
              "text": "example link"
            },
            "hint": "Add T&C link"
          },
          {
            "code": "help_doc",
            "type": "document",
            "default": {
              "src": "http://example/link.pdf",
              "text": "example link"
            },
            "hint": "Upload Help Doc"
          },
          {
            "code": "help_docs",
            "type": "array",
            "item": {
              "type": "document"
            },
            "hint": "Upload Help Doc"
          },

          {
            "code": "project_name",
            "type": "string",
            "hint": "YOUR project Name"
          },
          {
            "code": "buyer_name",
            "type": "string",
            "hint": "YOUR Name here"
          },
          {
            "code": "published_at",
            "type": "date",
            "format": "dd/mm/yy",
            "hint": "Date"
          },
          {
            "code": "org_name",
            "type": "string",
            "hint": "Our Agency"
          }
      ],
      "sections":[
        {
          "name": "Section One",
          "content": `
            <div>
              <p class=\"c16\">
                <span class=\"c12\">
                  <token type=\"imgage\" hint=\"Your logo here\" code=\"$$logo\"> </token>
                  Website Redesign Request for Proposal
                  PAGE 1 of 8
                </span>
              </p>
            </div>

            <p class=\"c3\"><span class=\"c2\">From: $$buyer_name</span></p>
            <p class=\"c3\"><span class=\"c2\">Date: $$date</span></p>

            <p class=\"c3\"><span class=\"c0\">$$org_name wants to redesign its website currently found here:</span></p>
          "
        },
        {
          "name": "Section Two",
          "content": "
            <p class=\"c3\"><span class=\"c2\">Table of Content</span></p>

            <ol class=\"c7 lst-kix_list_3-0 start\" start=\"1\">
              <li class=\"c3 c6\"><span class=\"c0\">Guide to this RFP</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Project Overview</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Background</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Project Goals</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Proposed Sitemap</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Scope of Work</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Technical Requirements</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Budget</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Project Timeline</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Criteria for Selection</span></li>
              <li class=\"c3 c6\"><span class=\"c0\">Specific Requests</span></li>
            </ol>
          `
        }
      ]


    }
    let templates = Array.from(Array(7)).map((_, i) => {
      let t = Object.assign({}, tpl)
      t.name = t.name + " - " + (i+1)
      return t
    })
    return templates
  }
}