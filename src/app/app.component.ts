import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { IconService } from '@ikerbede/shared';
import { CV_ICONS, CV_LOGOS } from './cv-icons.constant';
import { GlobalComponent } from './global/global.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  isMobile$: Observable<boolean>;

  constructor(
    private readonly iconService: IconService,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.iconService.addIcons(CV_ICONS);
    this.iconService.addLogos(CV_LOGOS);

    this.isMobile$ = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(
          (state: BreakpointState) =>
            state.breakpoints[Breakpoints.XSmall] ||
            state.breakpoints[Breakpoints.Small]
        ),
        distinctUntilChanged(),
        shareReplay(1)
      );
  }
}
