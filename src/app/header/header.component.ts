
import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedMenu = new EventEmitter<string>();

  onClickMenu(input :string){
    this.selectedMenu.emit(input);
  } 

}
