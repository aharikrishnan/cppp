import { 
    Component,
    ViewChild, ViewContainerRef, ComponentRef,
    Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ComponentFactoryResolver,
    Input
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})

export class RuntimeTemplateComponent {
  @Input() data: any;
}

@Component({
    selector: 'runtime-content',
    template: `
        <div>
            <h3>Template</h3>
            <div>
                <textarea rows="5" [(ngModel)]="template"></textarea>
            </div>
            <button (click)="compileTemplate()">Compile</button>
            <h3>Output</h3>
            <div #container></div>
        </div>
    `,
    styleUrls: ['./runtime-content.component.css']
})

export class RuntimeContentComponent {

    template: string = '<div>\nHello, {{name}}\n</div>';

    @ViewChild('container', { static:true, read: ViewContainerRef })
    container: ViewContainerRef;

    private componentRef: ComponentRef<{}>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private compiler: Compiler) {
    }

    loadComponent() {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RuntimeTemplateComponent);

      const viewContainerRef = this.container;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = {name: "Saint", bio: "keep turning the knobs until it sounds right .."};
    }

    compileTemplate() {

        let metadata = {
            selector: `runtime-component-sample`,
            template: this.template
        };

        let factory = this.createComponentFactorySync(this.compiler, metadata, null);
        
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        this.componentRef = this.container.createComponent(factory);
    }

    private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
        const cmpClass = componentClass || class RuntimeComponent { name: string = 'Denys' };
        const decoratedCmp = Component(metadata)(cmpClass);

        @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
        class RuntimeComponentModule { }

        let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(f => f.componentType === decoratedCmp);
    }

}