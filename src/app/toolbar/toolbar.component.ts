import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() menuBtnClicked = new EventEmitter<void>();

  readonly anchors = ['techs', 'experience', 'publications', 'education'];
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

  openSidenav(): void {
    this.menuBtnClicked.emit();
  }

  openContactSheet(): void {
    this.bottomSheet.open(ContactComponent, {
      panelClass: 'cv-bottom-sheet',
      restoreFocus: false,
      scrollStrategy: new NoopScrollStrategy(),
    });
  }
}
