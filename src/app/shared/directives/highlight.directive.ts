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
  // @HostBinding('innerHtml') content: string;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}


  ngOnChanges(changes: SimpleChanges) {

    if( !this.searchTerm && this.searchTerm.trim().length === 0) {
      this.renderer.setProperty(this.elemRef.nativeElement, 'innerHTML', this.innerTextProps);
      return
    }

    this.renderer.setProperty(this.elemRef.nativeElement, 'innerHTML', this.modifiedText());

    // if( this.elemRef.nativeElement ) {
    //   if( 'searchTerm' in changes) {
    //     const text = (this.elemRef.nativeElement as HTMLElement).textContent;
    //
    //     if( this.searchTerm === '') {
    //       // @ts-ignore
    //       console.log(this.content);
    //       this.content = text;
    //     } else {
    //       const regExPattern = new RegExp(this.searchTerm, 'gi');
    //       const newText = text!.replace(regExPattern, (match: string) => {
    //         return `<mark>${match}</mark>`;
    //       });
    //       // @ts-ignore
    //       this.content = this.sanitizer.sanitize( SecurityContext.HTML, newText )
    //     }
    //
    //   }
    // }
  }


  modifiedText() {
    const regExPattern = new RegExp(this.searchTerm, 'gi');
    return this.innerTextProps.replace(regExPattern, (match: string) => {
              return `<mark>${match}</mark>`;
            });
  }
}
