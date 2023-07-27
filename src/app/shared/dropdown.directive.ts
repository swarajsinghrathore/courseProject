import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false

    // @HostListener('click') toggleOpen() {//this function will open dropdown and close dropdown
    //     this.isOpen = !this.isOpen//by clicking on the dropdown icon only it won't get closed by clicking 
    // }//anywhere so for that below reference can be used
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}