import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  Input,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.isOpen = false;
  }
  // @Input() isOpen: boolean;
  // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // ngOnInit() {
  //   this.isOpen = false;
  // }

  // @HostListener('click') toggleOpen(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  //   if (this.isOpen) {
  //     this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  // }
}
