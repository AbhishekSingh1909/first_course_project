import { Directive,HostBinding, HostListener, ElementRef } from "@angular/core";
@Directive({
    selector : '[appDropdown]'
})
export class DropDownDirective
{// bind element property
    @HostBinding('class.open') isOpen = false;
    // a dropdown can also be closed by a click anywhere outside
    //(which also means that a click on one dropdown closes any other one, btw.)
    //listen event binding
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}

}