import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgXUnless]'
})
export class NgXUnlessDirective {

  visible : boolean = false;
  constructor(public templateRef:TemplateRef<any>, public viewContainer:ViewContainerRef) { }

  @Input()
  set appNgXUnless(inp :boolean){
    if (!inp && !this.visible){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    }
    else{
      this.viewContainer.clear();
      this.visible = false;
    }
  }

}
