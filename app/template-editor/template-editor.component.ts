import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.css']
})
export class TemplateEditorComponent implements OnInit {
  title = "Template Editor!"
  template = `
  Angular-xeditable is a bundle of {{app_name || "angular"}} directives that allows you to create editable elements.
  Such technique is also known as {{feature_name || "click-to-edit"}} or edit-in-place. It is based on ideas of x-editable but was written from scratch to use power of {{app_name || "angular"}} and support complex forms / editable grids.
  `
  constructor() { }

  ngOnInit() {
  }

}