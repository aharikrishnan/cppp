import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ActivityComponent } from '../activity-component';
import { Activity } from '../activity';
import { StepDirective } from '../step.directive';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() activity: Activity;
  currentAdIndex = -1;
  @ViewChild(StepDirective, { static: true }) appStep: StepDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.activity.component);

    const viewContainerRef = this.appStep.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ActivityComponent>componentRef.instance).data = this.activity.data;
  }

}