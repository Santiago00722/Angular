import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isShowing0 = false;
  showSubSubMenu0: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
      this.isShowing0 = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
      this.isShowing0 = false;
    }
  }
}
