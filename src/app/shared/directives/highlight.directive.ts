import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SecurityContext,
  SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnChanges{
  @Input("highlight") searchTerm: string;
  @Input("innerText") innerTextProps: string;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {

    if( !this.searchTerm && this.searchTerm.trim().length === 0) {
      this.renderer.setProperty(this.elemRef.nativeElement, 'innerHTML', this.innerTextProps);
      return
    }

    this.renderer.setProperty(this.elemRef.nativeElement, 'innerHTML', this.modifiedText());
  }


  private modifiedText() {
    const regExPattern = new RegExp(this.searchTerm, 'gi');
    return this.innerTextProps.replace(regExPattern, (match: string) => {
              return `<mark>${match}</mark>`;
            });
  }
}
