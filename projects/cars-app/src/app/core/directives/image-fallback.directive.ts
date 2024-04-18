import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[defaultImage]',
  standalone: true,
})
export class DefaultImageDirective {
  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError() {
    this.elementRef.nativeElement.src =
      './../../../assets/images/default-fallback-image.jpeg';

    this.elementRef.nativeElement.srcset =
      './../../../assets/images/default-fallback-image.jpeg';

    this.elementRef.nativeElement.height = 200;
  }
}
