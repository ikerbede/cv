
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@cv/navigation';
import { IconService } from '@cv/shared-utils';
import { ToolbarComponent } from '@cv/toolbar';
import { CV_ICONS, CV_LOGOS } from './cv-assets.constant';

@Component({
    imports: [
    RouterModule,
    MatSidenavModule,
    NavigationComponent,
    ToolbarComponent
],
    selector: 'app-monitor-entry',
    templateUrl: './entry.component.html',
    styleUrl: './entry.component.scss'
})
export class RemoteEntryComponent {
  constructor(private readonly _iconService: IconService) {
    this._iconService.addIcons(CV_ICONS);
    this._iconService.addLogos(CV_LOGOS);
  }
}
