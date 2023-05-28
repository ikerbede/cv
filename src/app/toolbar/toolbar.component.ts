import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatBottomSheetModule,
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { distinctUntilChanged, map, Observable, shareReplay } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'cv-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  readonly anchors = ['techs', 'experience', 'education'];
  isMobile$: Observable<boolean>;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly bottomSheet: MatBottomSheet
  ) {
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

  scrollTo(eltId: string): void {
    const element = document.getElementById(eltId);
    setTimeout(() =>
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    );
  }

  openContactSheet(): void {
    this.bottomSheet.open(ContactComponent, {
      panelClass: 'cv-bottom-sheet',
      restoreFocus: false,
      scrollStrategy: new NoopScrollStrategy(),
    });
  }
}
