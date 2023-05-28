import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from '../contact/contact.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
  ],
  selector: 'cv-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  @HostBinding('class.profile') class = true;

  constructor(private readonly bottomSheet: MatBottomSheet) {}

  openContactSheet(): void {
    this.bottomSheet.open(ContactComponent, {
      panelClass: 'cv-bottom-sheet',
      restoreFocus: false,
      scrollStrategy: new NoopScrollStrategy(),
    });
  }
}
