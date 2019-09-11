import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ActivityComponent } from '../activity-component';
import { Activity } from '../activity';
import { StepDirective } from '../step.directive';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() activities: Activity[];
  currentAdIndex = -1;
  @ViewChild(StepDirective, { static: true }) appStep: StepDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.activities.length;
    const activity = this.activities[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(activity.component);

    const viewContainerRef = this.appStep.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ActivityComponent>componentRef.instance).data = activity.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}