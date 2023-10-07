import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { IconService } from '@ikerbede/shared';
import { CV_ICONS, CV_LOGOS } from './cv-icons.constant';
import { GlobalComponent } from './global/global.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    GlobalComponent,
    ToolbarComponent,
    SidenavComponent,
  ],
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly iconService: IconService) {
    this.iconService.addIcons(CV_ICONS);
    this.iconService.addLogos(CV_LOGOS);
  }
}
