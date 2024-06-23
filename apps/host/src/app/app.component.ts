import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private readonly _router: Router,
    private readonly _breakpointObserver: BreakpointObserver
  ) {
    this._breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map(
          (state: BreakpointState) =>
            state.breakpoints[Breakpoints.XSmall] ||
            state.breakpoints[Breakpoints.Small]
        ),
        distinctUntilChanged(),
        takeUntilDestroyed()
      )
      .subscribe((isSmallScreen: boolean) => {
        this._router.navigate([isSmallScreen ? '/mobile' : '/monitor']);
      });
  }
}
