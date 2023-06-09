import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconService } from '@ikerbede/shared';

import { GlobalComponent } from './global/global.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  standalone: true,
  imports: [CommonModule, GlobalComponent, ToolbarComponent],
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly iconService: IconService) {
    this.iconService.addIcons([
      'anchor',
      'angular',
      'business',
      'check',
      'code',
      'contact_page',
      'date_range',
      'download',
      'email',
      'expand_more',
      'favorite',
      'github',
      'insights',
      'language',
      'linkedin',
      'location_searching',
      'more_vert',
      'phone',
      'place',
      'school',
      'search',
    ]);
  }
}
